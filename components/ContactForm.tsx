'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { site } from '@/lib/site';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const topics = ['Kuchnia', 'Szafa przesuwna', 'Garderoba', 'Łazienka', 'Inne meble', 'Okucia / serwis'];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const startedAt = useRef(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus('sending');
    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, elapsed: Date.now() - startedAt.current }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="form form--done" role="status">
        <p className="form__done-title">Dziękujemy, wiadomość dotarła.</p>
        <p>Odezwiemy się najszybciej, jak to możliwe. Jeśli sprawa jest pilna, zadzwoń: {site.phone}.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form__row">
        <label htmlFor="f-name">Imię</label>
        <input id="f-name" name="name" required maxLength={120} autoComplete="name" />
      </div>
      <div className="form__pair">
        <div className="form__row">
          <label htmlFor="f-phone">Telefon</label>
          <input id="f-phone" name="phone" type="tel" maxLength={30} autoComplete="tel" inputMode="tel" />
        </div>
        <div className="form__row">
          <label htmlFor="f-email">E-mail</label>
          <input id="f-email" name="email" type="email" maxLength={254} autoComplete="email" />
        </div>
      </div>
      <p className="form__hint">Podaj telefon lub e-mail, żebyśmy mogli odpowiedzieć.</p>
      <fieldset className="form__topics">
        <legend>Czego dotyczy zapytanie?</legend>
        {topics.map((t) => (
          <label key={t} className="chip">
            <input type="radio" name="topic" value={t} />
            <span>{t}</span>
          </label>
        ))}
      </fieldset>
      <div className="form__row">
        <label htmlFor="f-message">Wiadomość</label>
        <textarea
          id="f-message"
          name="message"
          required
          rows={5}
          maxLength={4000}
          placeholder="Np. kuchnia w kształcie L, ok. 3 m, białe fronty, termin do wiosny"
        />
      </div>
      <div className="form__trap" aria-hidden="true">
        <label htmlFor="f-website">Nie wypełniaj</label>
        <input id="f-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="form__consent">
        Wysyłając formularz, zgadzasz się na kontakt w sprawie zapytania.{' '}
        <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
      </p>
      <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Wysyłanie…' : 'Wyślij zapytanie'}
      </button>
      {status === 'error' && (
        <p className="form__error" role="alert">
          Nie udało się wysłać. Zadzwoń pod {site.phone} albo napisz na {site.email}.
        </p>
      )}
    </form>
  );
}
