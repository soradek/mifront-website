import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  alternates: { canonical: '/polityka-prywatnosci' },
};

export default function Privacy() {
  return (
    <article className="prose">
      <h1 className="section-title section-title--xl">Polityka prywatności</h1>
      <h2>Administrator danych</h2>
      <p>
        Administratorem danych przekazanych przez formularz lub e-mail jest MIFRONT, {site.owner}, kontakt:{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>, tel. {site.phone}.
      </p>
      <h2>Jakie dane i po co</h2>
      <p>
        Imię, telefon, adres e-mail i treść wiadomości z formularza. Używamy ich wyłącznie, żeby odpowiedzieć na
        zapytanie i przygotować wycenę (art. 6 ust. 1 lit. b i f RODO). Nie wysyłamy reklam i nie przekazujemy danych
        innym firmom poza dostawcami hostingu i poczty, którzy przetwarzają je na nasze zlecenie.
      </p>
      <h2>Jak długo</h2>
      <p>Do zakończenia rozmowy o zamówieniu, a jeśli dojdzie do realizacji, przez okres wymagany przepisami.</p>
      <h2>Twoje prawa</h2>
      <p>
        Możesz poprosić o dostęp do danych, ich poprawienie, usunięcie lub ograniczenie przetwarzania, a także wnieść
        sprzeciw. Przysługuje ci skarga do Prezesa UODO.
      </p>
      <h2>Pliki cookies i statystyki</h2>
      <p>
        Strona nie używa cookies reklamowych. Zbieramy anonimowe statystyki odwiedzin (Vercel Web Analytics), które
        nie zapisują cookies i nie identyfikują osób.
      </p>
    </article>
  );
}
