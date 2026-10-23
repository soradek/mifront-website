'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ZoomImage, { THUMB_QUALITY, THUMB_SIZES } from '@/components/ZoomImage';
import type { Category, Photo, Project } from '@/data/realizacje';

type Props = { projects: Project[]; categories: { id: Category; label: string }[] };

export default function Gallery({ projects, categories }: Props) {
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [open, setOpen] = useState<{ project: Project; index: number } | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const show = (project: Project, index: number) => {
    setOpen({ project, index });
    dialog.current?.showModal();
  };

  const step = useCallback((d: number) => {
    setOpen((o) => (o ? { ...o, index: (o.index + d + o.project.photos.length) % o.project.photos.length } : o));
  }, []);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    const onClose = () => setOpen(null);
    el.addEventListener('keydown', onKey);
    el.addEventListener('close', onClose);
    return () => {
      el.removeEventListener('keydown', onKey);
      el.removeEventListener('close', onClose);
    };
  }, [step]);

  // Strona pod podglądem nie przewija się (iOS przewija ją mimo modalnego dialogu).
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = 'hidden';
    return () => {
      html.style.overflow = prev;
    };
  }, [open]);

  const current: Photo | undefined = open?.project.photos[open.index];
  const photos = open?.project.photos ?? [];
  // Sąsiednie zdjęcia ładujemy z wyprzedzeniem, żeby przewijanie było płynne.
  const neighbours = open && photos.length > 1
    ? [...new Set([(open.index + 1) % photos.length, (open.index - 1 + photos.length) % photos.length])].map((i) => photos[i])
    : [];

  return (
    <>
      <div className="filters" role="group" aria-label="Filtruj realizacje">
        <button type="button" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
          Wszystko
        </button>
        {categories.map((c) => (
          <button key={c.id} type="button" aria-pressed={filter === c.id} onClick={() => setFilter(c.id)}>
            {c.label}
          </button>
        ))}
      </div>

      <div className="projects">
        {visible.map((p) => (
          <section key={p.slug} id={p.slug} className="project" aria-labelledby={`${p.slug}-t`}>
            <div className="project__text">
              <h2 id={`${p.slug}-t`}>{p.title}</h2>
              <p>{p.description}</p>
              <p className="project__count">
                {p.photos.length} {p.photos.length === 1 ? 'zdjęcie' : p.photos.length < 5 ? 'zdjęcia' : 'zdjęć'}
              </p>
            </div>
            <ul className="project__photos">
              {p.photos.map((ph, i) => (
                <li key={ph.src}>
                  <button type="button" onClick={() => show(p, i)} aria-label={`Powiększ: ${ph.alt}`}>
                    <Image
                      src={ph.src}
                      alt={ph.alt}
                      width={ph.width}
                      height={ph.height}
                      sizes={THUMB_SIZES}
                      quality={THUMB_QUALITY}
                      loading="lazy"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <dialog ref={dialog} className="lightbox" aria-label={open ? open.project.title : 'Podgląd zdjęcia'}>
        {open && current && (
          <>
            <ZoomImage photo={current} onSwipe={step} />
            <div className="lightbox__preload" aria-hidden="true">
              {neighbours.map((ph) => (
                <Image key={ph.src} src={ph.src} alt="" fill sizes="100vw" quality={80} loading="eager" />
              ))}
            </div>
            <div className="lightbox__bar">
              <span>
                {open.project.title} · {open.index + 1}/{open.project.photos.length}
              </span>
              <div className="lightbox__nav">
                {open.project.photos.length > 1 && (
                  <>
                    <button type="button" onClick={() => step(-1)} aria-label="Poprzednie zdjęcie">←</button>
                    <button type="button" onClick={() => step(1)} aria-label="Następne zdjęcie">→</button>
                  </>
                )}
                <button type="button" onClick={() => dialog.current?.close()} aria-label="Zamknij podgląd" autoFocus>
                  ✕
                </button>
              </div>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
