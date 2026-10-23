'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
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

  const current: Photo | undefined = open?.project.photos[open.index];

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
                <li key={ph.src} style={{ aspectRatio: `${ph.width} / ${ph.height}` }}>
                  <button type="button" onClick={() => show(p, i)} aria-label={`Powiększ: ${ph.alt}`}>
                    <Image
                      src={ph.src}
                      alt={ph.alt}
                      width={ph.width}
                      height={ph.height}
                      sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 22vw"
                      quality={70}
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
            <div className="lightbox__img">
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="100vw"
                quality={80}
              />
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
