import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, Hanken_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBar from '@/components/MobileBar';
import Reveal from '@/components/Reveal';
import { site } from '@/lib/site';
import './globals.css';

const display = Barlow_Condensed({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Hanken_Grotesk({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Meble na wymiar Inowrocław: kuchnie, szafy, garderoby | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: site.url,
    siteName: site.name,
    title: `${site.name}. ${site.tagline}`,
    description: site.description,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Kuchnia na wymiar wykonana przez MIFRONT' }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#f6f4ef',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  '@id': `${site.url}/#firma`,
  name: site.name,
  legalName: site.legalName,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  telephone: '+48696020841',
  email: site.email,
  image: `${site.url}/og.jpg`,
  logo: `${site.url}/mifront-logo.png`,
  foundingDate: String(site.since),
  founder: { '@type': 'Person', name: site.owner },
  taxID: site.nip,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street.replace('ul. ', ''),
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: 'PL',
  },
  areaServed: { '@type': 'City', name: site.address.city },
  hasMap: site.mapsUrl,
  sameAs: [site.facebook],
  makesOffer: ['Kuchnie na wymiar', 'Szafy przesuwne', 'Garderoby', 'Meble łazienkowe', 'Meble pokojowe', 'Wymiana okuć meblowych'].map(
    (name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } }),
  ),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <body>
        {/* Animacje przewijania ukrywają treść tylko, gdy działa JS. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <a className="skip" href="#tresc">Przejdź do treści</a>
        <Header />
        <main id="tresc">{children}</main>
        <Footer />
        <MobileBar />
        <Reveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Analytics />
      </body>
    </html>
  );
}
