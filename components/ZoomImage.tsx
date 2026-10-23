'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Photo } from '@/data/realizacje';

const MIN = 1;
const MAX = 6;

// Te same parametry co miniatury w galerii: ten sam adres obrazka, więc jest już w pamięci
// przeglądarki i pokazuje się natychmiast, zanim dojdzie ostra wersja.
export const THUMB_SIZES = '(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 22vw';
export const THUMB_QUALITY = 70;

type View = { s: number; x: number; y: number };
const FIT: View = { s: 1, x: 0, y: 0 };

// Zdjęcie dopasowane do ekranu (object-fit: contain) z przybliżaniem:
// kółko myszy, dwa palce, podwójne kliknięcie, przyciski i klawisze + / - / 0.
export default function ZoomImage({ photo, onSwipe }: { photo: Photo; onSwipe: (dir: 1 | -1) => void }) {
  const stage = useRef<HTMLDivElement>(null);
  const [view, setViewState] = useState<View>(FIT);
  const viewRef = useRef(view);
  // Ref aktualizowany od razu: szybkie serie zdarzeń kółka/gładzika widzą bieżącą skalę przed renderem.
  const setView = useCallback((v: View) => {
    viewRef.current = v;
    setViewState(v);
  }, []);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const gesture = useRef<{ dist: number; s: number; startX: number; startY: number; moved: boolean } | null>(null);
  const lastTap = useRef<{ t: number; x: number; y: number } | null>(null);
  const lastPointerType = useRef('mouse');
  const [sharp, setSharp] = useState(false);

  // Nie pozwala wyjechać zdjęciem poza kadr.
  const clamp = useCallback((v: View): View => {
    const el = stage.current;
    const s = Math.min(MAX, Math.max(MIN, v.s));
    if (!el || s === 1) return FIT;
    const { width: w, height: h } = el.getBoundingClientRect();
    return { s, x: Math.min(0, Math.max(w * (1 - s), v.x)), y: Math.min(0, Math.max(h * (1 - s), v.y)) };
  }, []);

  // Skaluje względem punktu (px, py) w kadrze, żeby ten punkt został pod kursorem/palcami.
  const zoomAt = useCallback(
    (nextS: number, px: number, py: number, from: View = viewRef.current) => {
      const s = Math.min(MAX, Math.max(MIN, nextS));
      const k = s / from.s;
      setView(clamp({ s, x: px - (px - from.x) * k, y: py - (py - from.y) * k }));
    },
    [clamp, setView],
  );

  const zoomCenter = useCallback(
    (factor: number) => {
      const r = stage.current?.getBoundingClientRect();
      if (r) zoomAt(viewRef.current.s * factor, r.width / 2, r.height / 2);
    },
    [zoomAt],
  );

  useEffect(() => {
    setView(FIT);
    setSharp(false);
  }, [photo.src, setView]);

  // Safari na iOS ma własne gesty przybliżania strony: blokujemy je w kadrze.
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const block = (e: Event) => e.preventDefault();
    el.addEventListener('gesturestart', block);
    el.addEventListener('gesturechange', block);
    return () => {
      el.removeEventListener('gesturestart', block);
      el.removeEventListener('gesturechange', block);
    };
  }, []);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const r = el.getBoundingClientRect();
      zoomAt(viewRef.current.s * Math.exp(-e.deltaY * 0.0015), e.clientX - r.left, e.clientY - r.top);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '+' || e.key === '=') zoomCenter(1.5);
      if (e.key === '-') zoomCenter(1 / 1.5);
      if (e.key === '0') setView(FIT);
    };
    const onResize = () => setView(FIT);
    el.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      el.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [zoomAt, zoomCenter, setView]);

  const local = (e: React.PointerEvent) => {
    const r = stage.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const onPointerDown = (e: React.PointerEvent) => {
    lastPointerType.current = e.pointerType;
    stage.current?.setPointerCapture(e.pointerId);
    const p = local(e);
    pointers.current.set(e.pointerId, p);
    const pts = [...pointers.current.values()];
    gesture.current = {
      dist: pts.length === 2 ? Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) : 0,
      s: viewRef.current.s,
      startX: p.x,
      startY: p.y,
      moved: false,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const prev = pointers.current.get(e.pointerId);
    if (!prev || !gesture.current) return;
    const p = local(e);
    pointers.current.set(e.pointerId, p);
    const pts = [...pointers.current.values()];
    if (Math.hypot(p.x - gesture.current.startX, p.y - gesture.current.startY) > 6) gesture.current.moved = true;

    if (pts.length === 2 && gesture.current.dist > 0) {
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      zoomAt((gesture.current.s * dist) / gesture.current.dist, (pts[0].x + pts[1].x) / 2, (pts[0].y + pts[1].y) / 2);
    } else if (pts.length === 1 && viewRef.current.s > 1) {
      const v = viewRef.current;
      setView(clamp({ s: v.s, x: v.x + p.x - prev.x, y: v.y + p.y - prev.y }));
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const g = gesture.current;
    const p = local(e);
    pointers.current.delete(e.pointerId);
    if (pointers.current.size > 0) {
      // Po zdjęciu jednego palca z dwóch: dalej przesuwamy drugim.
      const [rest] = [...pointers.current.values()];
      gesture.current = { dist: 0, s: viewRef.current.s, startX: rest.x, startY: rest.y, moved: true };
      return;
    }
    gesture.current = null;
    if (!g || e.pointerType === 'mouse') return;

    // Przesunięcie palcem w bok przy dopasowanym zdjęciu zmienia zdjęcie.
    if (viewRef.current.s === 1) {
      const dx = p.x - g.startX;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(p.y - g.startY)) {
        onSwipe(dx < 0 ? 1 : -1);
        return;
      }
    }
    // Podwójne stuknięcie liczymy sami: Safari na iOS nie zawsze zgłasza dblclick.
    if (!g.moved) {
      const now = Date.now();
      const prev = lastTap.current;
      if (prev && now - prev.t < 320 && Math.hypot(p.x - prev.x, p.y - prev.y) < 40) {
        lastTap.current = null;
        toggleZoom(p.x, p.y);
      } else {
        lastTap.current = { t: now, x: p.x, y: p.y };
      }
    }
  };

  const toggleZoom = (x: number, y: number) => {
    if (viewRef.current.s > 1) setView(FIT);
    else zoomAt(2.5, x, y);
  };

  const onDoubleClick = (e: React.MouseEvent) => {
    if (lastPointerType.current !== 'mouse') return;
    const r = stage.current!.getBoundingClientRect();
    toggleZoom(e.clientX - r.left, e.clientY - r.top);
  };

  const zoomed = view.s > 1;

  return (
    <div className="zoom">
      <div
        ref={stage}
        className={`zoom__stage${zoomed ? ' is-zoomed' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={onDoubleClick}
      >
        <div
          className="zoom__layer"
          style={{ transform: `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.s})` }}
        >
          <Image
            key={`${photo.src}-thumb`}
            src={photo.src}
            alt=""
            fill
            sizes={THUMB_SIZES}
            quality={THUMB_QUALITY}
            loading="eager"
            draggable={false}
            className="zoom__thumb"
          />
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            quality={80}
            loading="eager"
            draggable={false}
            className={`zoom__sharp${sharp ? ' is-loaded' : ''}`}
            onLoad={() => setSharp(true)}
          />
        </div>
      </div>
      <div className="zoom__controls" role="group" aria-label="Powiększenie">
        <button type="button" onClick={() => zoomCenter(1 / 1.5)} disabled={!zoomed} aria-label="Oddal">
          −
        </button>
        <button type="button" onClick={() => setView(FIT)} disabled={!zoomed} className="zoom__level" aria-label="Dopasuj do ekranu">
          {Math.round(view.s * 100)}%
        </button>
        <button type="button" onClick={() => zoomCenter(1.5)} disabled={view.s >= MAX} aria-label="Przybliż">
          +
        </button>
      </div>
    </div>
  );
}
