import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Image src="/mifront-logo-jasne.png" alt="MIFRONT. Meble skrojone na Twoją miarę" width={1200} height={217} sizes="260px" className="footer__logo" />
        <dl className="footer__contact">
          <div>
            <dt>Telefon</dt>
            <dd><a href={site.phoneHref}>{site.phone}</a></dd>
          </div>
          <div>
            <dt>E-mail</dt>
            <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
          </div>
          <div>
            <dt>Pracownia</dt>
            <dd>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </a>
            </dd>
          </div>
          <div>
            <dt>Facebook</dt>
            <dd>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                MIFRONT na Facebooku
              </a>
            </dd>
          </div>
        </dl>
        <p className="footer__legal">
          © {new Date().getFullYear()} {site.legalName} · NIP {site.nip} · REGON {site.regon} ·{' '}
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
        </p>
      </div>
    </footer>
  );
}
