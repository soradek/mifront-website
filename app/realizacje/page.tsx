import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import { categories, projects } from '@/data/realizacje';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Realizacje: kuchnie, szafy i garderoby na wymiar, Inowrocław',
  description:
    'Zdjęcia mebli na wymiar wykonanych przez MIFRONT z Inowrocławia: kuchnie, szafy przesuwne, garderoby, łazienki, przedpokoje i meble pokojowe.',
  alternates: { canonical: '/realizacje' },
};

export default function RealizacjePage() {
  return (
    <div className="gallery-page">
      <header className="gallery-page__head">
        <h1 className="section-title section-title--xl">Realizacje</h1>
        <p>
          Meble wykonane w mieszkaniach i domach naszych klientów. Podoba Ci się któraś realizacja? Zadzwoń:{' '}
          <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      </header>
      <Gallery projects={projects} categories={categories} />
    </div>
  );
}
