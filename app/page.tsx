import Image from 'next/image';
import Link from 'next/link';
import Measure from '@/components/Measure';
import ContactForm from '@/components/ContactForm';
import { PhoneIcon } from '@/components/Header';
import { offer, site, steps } from '@/lib/site';
import { projects } from '@/data/realizacje';

const featuredSlugs = [
  'kuchnia-dab-cegla',
  'kuchnia-biel-polysk-kolumny',
  'szafy-przesuwne',
  'kuchnia-grafit-dab-2025',
  'sypialnia-lamele',
];

export default function Home() {
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <p className="hero__kicker">MIFRONT · {site.owner}</p>
          <h1 className="hero__title">
            <span className="hero__line">Meble</span>
            <span className="hero__line">skrojone</span>
            <span className="hero__line hero__accent">na Twoją</span>
            <span className="hero__line">miarę.</span>
          </h1>
          <p className="hero__lead">
            Kuchnie, szafy przesuwne, garderoby i zabudowy, zaprojektowane pod Twoje ściany, a nie pod katalog. Mierzymy,
            projektujemy, wykonujemy i montujemy.
          </p>
          <div className="hero__actions">
            <a href={site.phoneHref} className="btn btn--primary">
              <PhoneIcon />
              Zadzwoń: {site.phone}
            </a>
            <Link href="/realizacje" className="btn btn--ghost">
              Zobacz realizacje
            </Link>
          </div>
        </div>
        <figure className="hero__photo">
          <Measure label="od podłogi do sufitu" className="measure--vertical" />
          <div className="hero__frame">
            <Image
              src="/realizacje/kuchnia-szara-led-2024-2.jpg"
              alt="Jasnoszara kuchnia na wymiar z frontami do sufitu, dębowym blatem i podświetleniem LED"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 46vw"
              quality={80}
            />
          </div>
          <Measure label="co do centymetra" />
        </figure>
      </section>

      <section className="offer" id="oferta" aria-labelledby="oferta-tytul">
        <div className="offer__intro" data-reveal>
          <h2 id="oferta-tytul" className="section-title">Co robimy</h2>
          <p>
            Każdy mebel powstaje pod konkretne wnętrze. Dlatego nie ma tu cennika z półki: najpierw pomiar, potem
            projekt i wycena.
          </p>
        </div>
        <ol className="offer__list">
          {offer.map((item, i) => (
            <li key={item.title} data-reveal style={{ '--d': `${i * 70}ms` } as React.CSSProperties}>
              <span className="offer__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="works" aria-labelledby="realizacje-tytul">
        <div className="works__head" data-reveal>
          <h2 id="realizacje-tytul" className="section-title">Z naszego warsztatu</h2>
          <Link href="/realizacje" className="link-arrow">
            Wszystkie realizacje <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ul className="works__grid">
          {featured.map((p, i) => (
            <li key={p.slug} className={`works__item works__item--${i + 1}`} data-reveal="curtain" style={{ '--d': `${i * 90}ms` } as React.CSSProperties}>
              <Link href={`/realizacje#${p.slug}`}>
                <Image
                  src={p.photos[0].src}
                  alt={p.photos[0].alt}
                  fill
                  sizes={i === 0 ? '(max-width: 860px) 100vw, 58vw' : '(max-width: 860px) 50vw, 28vw'}
                  quality={70}
                />
                <span className="works__caption">{p.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="process" aria-labelledby="proces-tytul">
        <div className="process__inner">
          <h2 id="proces-tytul" className="section-title" data-reveal>Od pomiaru do montażu</h2>
          <ol className="process__steps" data-reveal="line">
            {steps.map((s, i) => (
              <li key={s.title} style={{ '--d': `${200 + i * 140}ms` } as React.CSSProperties}>
                <span className="process__tick" aria-hidden="true" />
                <span className="process__num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="contact" id="kontakt" aria-labelledby="kontakt-tytul">
        <div className="contact__direct" data-reveal>
          <h2 id="kontakt-tytul" className="section-title">Umówmy pomiar</h2>
          <p>Najszybciej telefonicznie. Jeśli wolisz napisać, zostaw wiadomość, oddzwonimy.</p>
          <a href={site.phoneHref} className="contact__phone">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="contact__mail">
            {site.email}
          </a>
        </div>
        <div data-reveal style={{ '--d': '120ms' } as React.CSSProperties}>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
