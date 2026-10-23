import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const MAX = { name: 120, email: 254, phone: 30, topic: 40, message: 4000 } as const;
const TOPICS = new Set(['Kuchnia', 'Szafa przesuwna', 'Garderoba', 'Łazienka', 'Inne meble', 'Okucia / serwis']);

// Limit zapytań per IP w obrębie jednej instancji funkcji. Wystarczy na proste boty.
const hits = new Map<string, number[]>();
function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
}

function str(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

const ok = () => NextResponse.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });
const fail = (status: number) => NextResponse.json({ ok: false }, { status });

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');
  if (origin && new URL(origin).host !== req.headers.get('host')) return fail(403);

  const cl = Number(req.headers.get('content-length') ?? 0);
  if (cl > 20_000) return fail(413);

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (limited(ip)) return fail(429);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return fail(400);
  }

  // Pułapki na boty: ukryte pole i zbyt szybkie wysłanie. Odpowiadamy "ok", żeby ich nie uczyć.
  if (str(body.website) || Number(body.elapsed) < 2500) return ok();

  const f = {
    name: str(body.name),
    email: str(body.email),
    phone: str(body.phone),
    topic: str(body.topic),
    message: str(body.message),
  };
  for (const [k, v] of Object.entries(f)) {
    if (v.length > MAX[k as keyof typeof MAX]) return fail(400);
  }
  if (!f.name || !f.message) return fail(400);
  if (!f.email && !f.phone) return fail(400);
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email)) return fail(400);
  if (f.phone && !/^[+\d\s()-]{6,30}$/.test(f.phone)) return fail(400);
  if (f.topic && !TOPICS.has(f.topic)) return fail(400);

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('Brak konfiguracji SMTP');
    return fail(503);
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: false,
    requireTLS: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const html = `<h2>Zapytanie ze strony mifront.pl</h2>
    <p><strong>Imię:</strong> ${esc(f.name)}</p>
    <p><strong>Telefon:</strong> ${esc(f.phone) || '–'}</p>
    <p><strong>E-mail:</strong> ${esc(f.email) || '–'}</p>
    <p><strong>Temat:</strong> ${esc(f.topic) || '–'}</p>
    <p><strong>Wiadomość:</strong><br>${esc(f.message).replace(/\n/g, '<br>')}</p>`;

  try {
    await transporter.sendMail({
      from: `"Formularz mifront.pl" <${SMTP_USER}>`,
      to: MAIL_TO || 'info@mifront.pl',
      replyTo: f.email ? `"${f.name.replace(/["\r\n]/g, '')}" <${f.email}>` : undefined,
      subject: `Zapytanie: ${f.topic || 'meble na wymiar'} (${f.name.replace(/[\r\n]/g, '')})`,
      html,
    });
    return ok();
  } catch (err) {
    console.error('Błąd wysyłki', err);
    return fail(502);
  }
}
