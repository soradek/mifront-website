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

export function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 3h3.5l1.5 5-2.2 1.3a12 12 0 0 0 6.9 6.9L16 14l5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
    </svg>
  );
}
