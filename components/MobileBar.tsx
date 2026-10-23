import Link from 'next/link';
import { site } from '@/lib/site';
import { PhoneIcon } from '@/components/Header';

// Dolny pasek na telefonie: nawigacja i telefon zawsze pod kciukiem.
export default function MobileBar() {
  return (
    <nav className="mbar" aria-label="Szybkie akcje">
      <Link href="/#oferta">Oferta</Link>
      <Link href="/realizacje">Realizacje</Link>
      <a href={site.phoneHref} className="mbar__call">
        <PhoneIcon />
        Zadzwoń
      </a>
    </nav>
  );
}
