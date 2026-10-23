import Link from 'next/link';
import Measure from '@/components/Measure';

export default function NotFound() {
  return (
    <div className="notfound">
      <p className="notfound__code">404</p>
      <Measure label="tu nic nie ma" />
      <h1 className="section-title">Ta strona nie pasuje do wymiaru</h1>
      <p>
        Adres mógł zostać po starej stronie. <Link href="/">Wróć na stronę główną</Link> albo{' '}
        <Link href="/realizacje">zobacz realizacje</Link>.
      </p>
    </div>
  );
}
