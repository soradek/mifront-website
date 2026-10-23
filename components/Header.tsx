import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link href="/" className="header__logo" aria-label="MIFRONT, strona główna">
          <Image src="/mifront-logo.png" alt="" width={1200} height={217} priority sizes="220px" />
        </Link>
        <nav aria-label="Główna nawigacja" className="header__nav">
          <Link href="/#oferta">Oferta</Link>
          <Link href="/realizacje">Realizacje</Link>
          <Link href="/#kontakt">Kontakt</Link>
        </nav>
        <a href={site.phoneHref} className="header__phone">
          <PhoneIcon />
          <span>{site.phone}</span>
        </a>
      </div>
    </header>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 3h3.5l1.5 5-2.2 1.3a12 12 0 0 0 6.9 6.9L16 14l5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
    </svg>
  );
}
