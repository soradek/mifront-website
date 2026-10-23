# mifront.pl

Strona MIFRONT (meble na wymiar). Next.js na Vercel, w tym samym zespole Vercel co pbix.pl.

- `data/realizacje.ts` – realizacje i zdjęcia (pliki w `public/realizacje/`)
- `lib/site.ts` – telefon, e-mail, oferta, etapy pracy
- `app/api/kontakt/route.ts` – formularz (SMTP unixstorm, zmienne w `.env.example`)

Lokalnie: `npm install`, `npm run dev`. Każdy push na `main` wdraża się automatycznie.
