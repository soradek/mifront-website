# DESIGN.md — mifront.pl

## Scene
Ktoś wieczorem na kanapie, w ciepłym świetle lampy, przegląda na telefonie kuchnie i porównuje je ze swoim rzutem mieszkania. Jasny, papierowy motyw jak arkusz rysunku technicznego; zdjęcia niosą kolor.

## Color (OKLCH, strategia: committed)
- `--paper` oklch(0.972 0.006 85): tło, ciepły papier kreślarski
- `--ink` oklch(0.31 0.004 20): grafit z logo (#555454 przyciemniony do tekstu)
- `--teal` oklch(0.77 0.085 205): turkus z logo (#62C2CB), pasma i wyróżnienia na dużych powierzchniach
- `--teal-ink` oklch(0.47 0.075 215): turkus w tekście/linkach (kontrast AA na papierze)
- `--oak` oklch(0.66 0.09 65): dąb z blatów, wyłącznie drobne akcenty
- Pasmo „Jak pracujemy” i stopka: grafit, turkus jako linie wymiarowe.

## Typography
- Display: Barlow Condensed 600/700, wersaliki tylko w krótkich hasłach. Echo podpisu z logo („MEBLE SKROJONE NA TWOJĄ MIARĘ”).
- Body: Hanken Grotesk 400/500/600.
- Skala: clamp, stosunek ≥1.25.

## Motif
Linie wymiarowe (kreska + znaczniki na końcach + wymiar w cm) jako separator, rama zdjęcia i oś procesu.

## Components
- Przyciski: prostokątne, promień 2px, wypełnienie grafitowe lub turkusowe.
- Galeria: mozaika (CSS columns), lightbox na natywnym `<dialog>`.
- Brak kart z ikonami; oferta to lista typograficzna z numerami.
