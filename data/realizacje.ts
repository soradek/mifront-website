// Realizacje MIFRONT. Nowe zdjęcia: wrzuć do public/realizacje i dopisz je tutaj.
// Kolejność na liście = kolejność na stronie. Pierwsze zdjęcie projektu to okładka.

export type Category = 'kuchnie' | 'szafy' | 'lazienki' | 'pokoje';

export type Photo = { src: string; width: number; height: number; alt: string };

export type Project = {
  slug: string;
  category: Category;
  title: string;
  description: string;
  photos: Photo[];
};

export const categories: { id: Category; label: string }[] = [
  { id: 'kuchnie', label: 'Kuchnie' },
  { id: 'szafy', label: 'Szafy i garderoby' },
  { id: 'lazienki', label: 'Łazienki' },
  { id: 'pokoje', label: 'Pokoje i przedpokoje' },
];

export const projects: Project[] = [
  {
    "slug": "kuchnia-grafit-dab-2025",
    "category": "kuchnie",
    "title": "Kuchnia w kształcie U, szary mat i dąb",
    "description": "Szare fronty bez uchwytów na górze, blat w dekorze dębu, czarny zlew granitowy i zabudowa okna.",
    "photos": [
      {
        "src": "/realizacje/kuchnia-grafit-dab-2025-1.jpg",
        "width": 809,
        "height": 1800,
        "alt": "Kuchnia w kształcie U, szary mat i dąb, zdjęcie 1"
      },
      {
        "src": "/realizacje/kuchnia-grafit-dab-2025-2.jpg",
        "width": 809,
        "height": 1800,
        "alt": "Kuchnia w kształcie U, szary mat i dąb, zdjęcie 2"
      },
      {
        "src": "/realizacje/kuchnia-grafit-dab-2025-3.jpg",
        "width": 1800,
        "height": 809,
        "alt": "Kuchnia w kształcie U, szary mat i dąb, zdjęcie 3"
      },
      {
        "src": "/realizacje/kuchnia-grafit-dab-2025-4.jpg",
        "width": 809,
        "height": 1800,
        "alt": "Kuchnia w kształcie U, szary mat i dąb, zdjęcie 4"
      },
      {
        "src": "/realizacje/kuchnia-grafit-dab-2025-5.jpg",
        "width": 1800,
        "height": 809,
        "alt": "Kuchnia w kształcie U, szary mat i dąb, zdjęcie 5"
      },
      {
        "src": "/realizacje/kuchnia-grafit-dab-2025-6.jpg",
        "width": 809,
        "height": 1800,
        "alt": "Kuchnia w kształcie U, szary mat i dąb, zdjęcie 6"
      },
      {
        "src": "/realizacje/kuchnia-grafit-dab-2025-7.jpg",
        "width": 1800,
        "height": 809,
        "alt": "Kuchnia w kształcie U, szary mat i dąb, zdjęcie 7"
      },
      {
        "src": "/realizacje/kuchnia-grafit-dab-2025-8.jpg",
        "width": 809,
        "height": 1800,
        "alt": "Kuchnia w kształcie U, szary mat i dąb, zdjęcie 8"
      },
      {
        "src": "/realizacje/kuchnia-grafit-dab-2025-9.jpg",
        "width": 809,
        "height": 1800,
        "alt": "Kuchnia w kształcie U, szary mat i dąb, zdjęcie 9"
      },
      {
        "src": "/realizacje/kuchnia-grafit-dab-2025-10.jpg",
        "width": 809,
        "height": 1800,
        "alt": "Kuchnia w kształcie U, szary mat i dąb, zdjęcie 10"
      }
    ]
  },
  {
    "slug": "kuchnia-szara-led-2024",
    "category": "kuchnie",
    "title": "Szara kuchnia z podświetlanym sufitem",
    "description": "Fronty do sufitu, słupek z piekarnikiem, dębowa listwa i blenda, oświetlenie LED nad zabudową.",
    "photos": [
      {
        "src": "/realizacje/kuchnia-szara-led-2024-1.jpg",
        "width": 1350,
        "height": 1800,
        "alt": "Szara kuchnia z podświetlanym sufitem, zdjęcie 1"
      },
      {
        "src": "/realizacje/kuchnia-szara-led-2024-2.jpg",
        "width": 1350,
        "height": 1800,
        "alt": "Szara kuchnia z podświetlanym sufitem, zdjęcie 2"
      },
      {
        "src": "/realizacje/kuchnia-szara-led-2024-3.jpg",
        "width": 1350,
        "height": 1800,
        "alt": "Szara kuchnia z podświetlanym sufitem, zdjęcie 3"
      },
      {
        "src": "/realizacje/kuchnia-szara-led-2024-4.jpg",
        "width": 1350,
        "height": 1800,
        "alt": "Szara kuchnia z podświetlanym sufitem, zdjęcie 4"
      }
    ]
  },
  {
    "slug": "kuchnia-dab-cegla",
    "category": "kuchnie",
    "title": "Kuchnia z dębową ścianą i półkami",
    "description": "Jasnoszare fronty z czarnymi uchwytami, ściana i półki w dekorze dębu, okap wyspowy.",
    "photos": [
      {
        "src": "/realizacje/kuchnia-dab-cegla-1.jpg",
        "width": 1196,
        "height": 1600,
        "alt": "Kuchnia z dębową ścianą i półkami, zdjęcie 1"
      },
      {
        "src": "/realizacje/kuchnia-dab-cegla-2.jpg",
        "width": 1600,
        "height": 1196,
        "alt": "Kuchnia z dębową ścianą i półkami, zdjęcie 2"
      },
      {
        "src": "/realizacje/kuchnia-dab-cegla-3.jpg",
        "width": 1196,
        "height": 1600,
        "alt": "Kuchnia z dębową ścianą i półkami, zdjęcie 3"
      },
      {
        "src": "/realizacje/kuchnia-dab-cegla-4.jpg",
        "width": 1600,
        "height": 1196,
        "alt": "Kuchnia z dębową ścianą i półkami, zdjęcie 4"
      },
      {
        "src": "/realizacje/kuchnia-dab-cegla-5.jpg",
        "width": 1196,
        "height": 1600,
        "alt": "Kuchnia z dębową ścianą i półkami, zdjęcie 5"
      },
      {
        "src": "/realizacje/kuchnia-dab-cegla-6.jpg",
        "width": 1196,
        "height": 1600,
        "alt": "Kuchnia z dębową ścianą i półkami, zdjęcie 6"
      },
      {
        "src": "/realizacje/kuchnia-dab-cegla-7.jpg",
        "width": 1196,
        "height": 1600,
        "alt": "Kuchnia z dębową ścianą i półkami, zdjęcie 7"
      }
    ]
  },
  {
    "slug": "kuchnia-biel-polysk-kolumny",
    "category": "kuchnie",
    "title": "Biały połysk z zabudową AGD w słupkach",
    "description": "Wysokie słupki z piekarnikami, czarny blat, skośny okap i podświetlenie pod szafkami.",
    "photos": [
      {
        "src": "/realizacje/kuchnia-biel-polysk-kolumny-1.jpg",
        "width": 1800,
        "height": 1350,
        "alt": "Biały połysk z zabudową AGD w słupkach, zdjęcie 1"
      },
      {
        "src": "/realizacje/kuchnia-biel-polysk-kolumny-2.jpg",
        "width": 1800,
        "height": 1350,
        "alt": "Biały połysk z zabudową AGD w słupkach, zdjęcie 2"
      },
      {
        "src": "/realizacje/kuchnia-biel-polysk-kolumny-3.jpg",
        "width": 1350,
        "height": 1800,
        "alt": "Biały połysk z zabudową AGD w słupkach, zdjęcie 3"
      },
      {
        "src": "/realizacje/kuchnia-biel-polysk-kolumny-4.jpg",
        "width": 1800,
        "height": 1350,
        "alt": "Biały połysk z zabudową AGD w słupkach, zdjęcie 4"
      }
    ]
  },
  {
    "slug": "kuchnia-biel-dab-czarny-okap",
    "category": "kuchnie",
    "title": "Biel, dąb i czarny okap",
    "description": "Białe fronty w połysku, blat i panel ścienny w dekorze dębu, szuflady z pełnym wysuwem.",
    "photos": [
      {
        "src": "/realizacje/kuchnia-biel-dab-czarny-okap-1.jpg",
        "width": 1600,
        "height": 1200,
        "alt": "Biel, dąb i czarny okap, zdjęcie 1"
      },
      {
        "src": "/realizacje/kuchnia-biel-dab-czarny-okap-2.jpg",
        "width": 1600,
        "height": 1200,
        "alt": "Biel, dąb i czarny okap, zdjęcie 2"
      },
      {
        "src": "/realizacje/kuchnia-biel-dab-czarny-okap-3.jpg",
        "width": 1600,
        "height": 1200,
        "alt": "Biel, dąb i czarny okap, zdjęcie 3"
      },
      {
        "src": "/realizacje/kuchnia-biel-dab-czarny-okap-4.jpg",
        "width": 1200,
        "height": 1600,
        "alt": "Biel, dąb i czarny okap, zdjęcie 4"
      },
      {
        "src": "/realizacje/kuchnia-biel-dab-czarny-okap-5.jpg",
        "width": 1200,
        "height": 1600,
        "alt": "Biel, dąb i czarny okap, zdjęcie 5"
      }
    ]
  },
  {
    "slug": "kuchnia-biel-metro",
    "category": "kuchnie",
    "title": "Biała kuchnia z płytką metro",
    "description": "Białe fronty, dębowy blat i podnośniki frontów w górnych szafkach.",
    "photos": [
      {
        "src": "/realizacje/kuchnia-biel-metro-1.jpg",
        "width": 1200,
        "height": 1600,
        "alt": "Biała kuchnia z płytką metro, zdjęcie 1"
      },
      {
        "src": "/realizacje/kuchnia-biel-metro-2.jpg",
        "width": 1600,
        "height": 1200,
        "alt": "Biała kuchnia z płytką metro, zdjęcie 2"
      },
      {
        "src": "/realizacje/kuchnia-biel-metro-3.jpg",
        "width": 1200,
        "height": 1600,
        "alt": "Biała kuchnia z płytką metro, zdjęcie 3"
      },
      {
        "src": "/realizacje/kuchnia-biel-metro-4.jpg",
        "width": 1200,
        "height": 1600,
        "alt": "Biała kuchnia z płytką metro, zdjęcie 4"
      },
      {
        "src": "/realizacje/kuchnia-biel-metro-5.jpg",
        "width": 1200,
        "height": 1600,
        "alt": "Biała kuchnia z płytką metro, zdjęcie 5"
      },
      {
        "src": "/realizacje/kuchnia-biel-metro-6.jpg",
        "width": 1600,
        "height": 1200,
        "alt": "Biała kuchnia z płytką metro, zdjęcie 6"
      },
      {
        "src": "/realizacje/kuchnia-biel-metro-7.jpg",
        "width": 1200,
        "height": 1600,
        "alt": "Biała kuchnia z płytką metro, zdjęcie 7"
      }
    ]
  },
  {
    "slug": "kuchnia-czern-dab",
    "category": "kuchnie",
    "title": "Czarne fronty i jasny dąb",
    "description": "Czarne szafki dolne, górne w dekorze dębu, cargo i szuflady pod zlewem.",
    "photos": [
      {
        "src": "/realizacje/kuchnia-czern-dab-1.jpg",
        "width": 1600,
        "height": 1200,
        "alt": "Czarne fronty i jasny dąb, zdjęcie 1"
      },
      {
        "src": "/realizacje/kuchnia-czern-dab-2.jpg",
        "width": 1350,
        "height": 1800,
        "alt": "Czarne fronty i jasny dąb, zdjęcie 2"
      },
      {
        "src": "/realizacje/kuchnia-czern-dab-3.jpg",
        "width": 1350,
        "height": 1800,
        "alt": "Czarne fronty i jasny dąb, zdjęcie 3"
      },
      {
        "src": "/realizacje/kuchnia-czern-dab-4.jpg",
        "width": 1350,
        "height": 1800,
        "alt": "Czarne fronty i jasny dąb, zdjęcie 4"
      }
    ]
  },
  {
    "slug": "kuchnia-limonka",
    "category": "kuchnie",
    "title": "Limonkowy połysk",
    "description": "Fronty w intensywnym połysku, czarny blat i grafika na szkle nad blatem.",
    "photos": [
      {
        "src": "/realizacje/kuchnia-limonka-1.jpg",
        "width": 960,
        "height": 720,
        "alt": "Limonkowy połysk, zdjęcie 1"
      },
      {
        "src": "/realizacje/kuchnia-limonka-2.jpg",
        "width": 720,
        "height": 960,
        "alt": "Limonkowy połysk, zdjęcie 2"
      },
      {
        "src": "/realizacje/kuchnia-limonka-3.jpg",
        "width": 1350,
        "height": 1800,
        "alt": "Limonkowy połysk, zdjęcie 3"
      },
      {
        "src": "/realizacje/kuchnia-limonka-4.jpg",
        "width": 1800,
        "height": 1350,
        "alt": "Limonkowy połysk, zdjęcie 4"
      },
      {
        "src": "/realizacje/kuchnia-limonka-5.jpg",
        "width": 1800,
        "height": 1350,
        "alt": "Limonkowy połysk, zdjęcie 5"
      },
      {
        "src": "/realizacje/kuchnia-limonka-6.jpg",
        "width": 960,
        "height": 720,
        "alt": "Limonkowy połysk, zdjęcie 6"
      }
    ]
  },
  {
    "slug": "kuchnia-biel-beton",
    "category": "kuchnie",
    "title": "Biel z blatem w dekorze betonu",
    "description": "Proste białe fronty bez uchwytów i ciemny blat w kamiennym dekorze.",
    "photos": [
      {
        "src": "/realizacje/kuchnia-biel-beton-1.jpg",
        "width": 1600,
        "height": 1200,
        "alt": "Biel z blatem w dekorze betonu, zdjęcie 1"
      },
      {
        "src": "/realizacje/kuchnia-biel-beton-2.jpg",
        "width": 1600,
        "height": 1200,
        "alt": "Biel z blatem w dekorze betonu, zdjęcie 2"
      },
      {
        "src": "/realizacje/kuchnia-biel-beton-3.jpg",
        "width": 1600,
        "height": 1200,
        "alt": "Biel z blatem w dekorze betonu, zdjęcie 3"
      }
    ]
  },
  {
    "slug": "kuchnia-dab-naturalny",
    "category": "kuchnie",
    "title": "Kuchnia w dekorze naturalnego dębu",
    "description": "Pełna zabudowa do sufitu z czarnymi uchwytami, wnęka z półkami.",
    "photos": [
      {
        "src": "/realizacje/kuchnia-dab-naturalny-1.jpg",
        "width": 1350,
        "height": 1800,
        "alt": "Kuchnia w dekorze naturalnego dębu, zdjęcie 1"
      },
      {
        "src": "/realizacje/kuchnia-dab-naturalny-2.jpg",
        "width": 1350,
        "height": 1800,
        "alt": "Kuchnia w dekorze naturalnego dębu, zdjęcie 2"
      },
      {
        "src": "/realizacje/kuchnia-dab-naturalny-3.jpg",
        "width": 1350,
        "height": 1800,
        "alt": "Kuchnia w dekorze naturalnego dębu, zdjęcie 3"
      }
    ]
  },
  {
    "slug": "kuchnia-szara-dab-cegla",
    "category": "kuchnie",
    "title": "Szarość, dąb i czarna płytka",
    "description": "Kilka kuchni w tej samej palecie: szare lub białe fronty z dębowymi blatami.",
    "photos": [
      {
        "src": "/realizacje/kuchnia-szara-dab-cegla-1.jpg",
        "width": 720,
        "height": 960,
        "alt": "Szarość, dąb i czarna płytka, zdjęcie 1"
      },
      {
        "src": "/realizacje/kuchnia-szara-dab-cegla-2.jpg",
        "width": 720,
        "height": 960,
        "alt": "Szarość, dąb i czarna płytka, zdjęcie 2"
      },
      {
        "src": "/realizacje/kuchnia-szara-dab-cegla-3.jpg",
        "width": 720,
        "height": 960,
        "alt": "Szarość, dąb i czarna płytka, zdjęcie 3"
      },
      {
        "src": "/realizacje/kuchnia-szara-dab-cegla-4.jpg",
        "width": 720,
        "height": 960,
        "alt": "Szarość, dąb i czarna płytka, zdjęcie 4"
      },
      {
        "src": "/realizacje/kuchnia-szara-dab-cegla-5.jpg",
        "width": 960,
        "height": 720,
        "alt": "Szarość, dąb i czarna płytka, zdjęcie 5"
      },
      {
        "src": "/realizacje/kuchnia-szara-dab-cegla-6.jpg",
        "width": 720,
        "height": 960,
        "alt": "Szarość, dąb i czarna płytka, zdjęcie 6"
      },
      {
        "src": "/realizacje/kuchnia-szara-dab-cegla-7.jpg",
        "width": 960,
        "height": 720,
        "alt": "Szarość, dąb i czarna płytka, zdjęcie 7"
      },
      {
        "src": "/realizacje/kuchnia-szara-dab-cegla-8.jpg",
        "width": 720,
        "height": 960,
        "alt": "Szarość, dąb i czarna płytka, zdjęcie 8"
      }
    ]
  },
  {
    "slug": "kuchnia-szary-polysk",
    "category": "kuchnie",
    "title": "Szary połysk z dębowym blatem",
    "description": "Fronty w połysku, podświetlenie pod szafkami i zabudowa zmywarki.",
    "photos": [
      {
        "src": "/realizacje/kuchnia-szary-polysk-1.jpg",
        "width": 1800,
        "height": 1013,
        "alt": "Szary połysk z dębowym blatem, zdjęcie 1"
      },
      {
        "src": "/realizacje/kuchnia-szary-polysk-2.jpg",
        "width": 1012,
        "height": 1800,
        "alt": "Szary połysk z dębowym blatem, zdjęcie 2"
      },
      {
        "src": "/realizacje/kuchnia-szary-polysk-3.jpg",
        "width": 1800,
        "height": 1013,
        "alt": "Szary połysk z dębowym blatem, zdjęcie 3"
      },
      {
        "src": "/realizacje/kuchnia-szary-polysk-4.jpg",
        "width": 1800,
        "height": 1013,
        "alt": "Szary połysk z dębowym blatem, zdjęcie 4"
      }
    ]
  },
  {
    "slug": "kuchnia-szara-2023",
    "category": "kuchnie",
    "title": "Jasnoszara kuchnia z cegłą",
    "description": "Szuflady z frezowanymi uchwytami, wysoka zabudowa i dębowy blat.",
    "photos": [
      {
        "src": "/realizacje/kuchnia-szara-2023-1.jpg",
        "width": 1800,
        "height": 1013,
        "alt": "Jasnoszara kuchnia z cegłą, zdjęcie 1"
      },
      {
        "src": "/realizacje/kuchnia-szara-2023-2.jpg",
        "width": 1800,
        "height": 1013,
        "alt": "Jasnoszara kuchnia z cegłą, zdjęcie 2"
      },
      {
        "src": "/realizacje/kuchnia-szara-2023-3.jpg",
        "width": 1800,
        "height": 1350,
        "alt": "Jasnoszara kuchnia z cegłą, zdjęcie 3"
      }
    ]
  },
  {
    "slug": "szafy-przesuwne",
    "category": "szafy",
    "title": "Szafy przesuwne",
    "description": "Drzwi lustrzane, w szkle grafitowym i w czarnej ramie w stylu loft; wnętrza z półkami i szufladami.",
    "photos": [
      {
        "src": "/realizacje/szafy-przesuwne-1.jpg",
        "width": 1200,
        "height": 1600,
        "alt": "Szafy przesuwne, zdjęcie 1"
      },
      {
        "src": "/realizacje/szafy-przesuwne-2.jpg",
        "width": 1200,
        "height": 1600,
        "alt": "Szafy przesuwne, zdjęcie 2"
      },
      {
        "src": "/realizacje/szafy-przesuwne-3.jpg",
        "width": 1200,
        "height": 1600,
        "alt": "Szafy przesuwne, zdjęcie 3"
      },
      {
        "src": "/realizacje/szafy-przesuwne-4.jpg",
        "width": 1012,
        "height": 1800,
        "alt": "Szafy przesuwne, zdjęcie 4"
      },
      {
        "src": "/realizacje/szafy-przesuwne-5.jpg",
        "width": 540,
        "height": 960,
        "alt": "Szafy przesuwne, zdjęcie 5"
      }
    ]
  },
  {
    "slug": "zabudowa-wneki",
    "category": "szafy",
    "title": "Zabudowa całej ściany",
    "description": "Biała zabudowa od podłogi do sufitu z szufladami u dołu.",
    "photos": [
      {
        "src": "/realizacje/zabudowa-wneki-1.jpg",
        "width": 720,
        "height": 960,
        "alt": "Zabudowa całej ściany, zdjęcie 1"
      },
      {
        "src": "/realizacje/zabudowa-wneki-2.jpg",
        "width": 720,
        "height": 960,
        "alt": "Zabudowa całej ściany, zdjęcie 2"
      }
    ]
  },
  {
    "slug": "garderoba-prasowanie",
    "category": "szafy",
    "title": "Garderoba z deską do prasowania",
    "description": "Wysuwana deska, drążki na różnych wysokościach i drzwi przesuwne.",
    "photos": [
      {
        "src": "/realizacje/garderoba-prasowanie-1.jpg",
        "width": 720,
        "height": 960,
        "alt": "Garderoba z deską do prasowania, zdjęcie 1"
      }
    ]
  },
  {
    "slug": "przedpokoj",
    "category": "pokoje",
    "title": "Przedpokoje",
    "description": "Wieszaki, siedziska z tapicerką i szafy z lustrem.",
    "photos": [
      {
        "src": "/realizacje/przedpokoj-1.jpg",
        "width": 720,
        "height": 960,
        "alt": "Przedpokoje, zdjęcie 1"
      },
      {
        "src": "/realizacje/przedpokoj-2.jpg",
        "width": 720,
        "height": 960,
        "alt": "Przedpokoje, zdjęcie 2"
      },
      {
        "src": "/realizacje/przedpokoj-3.jpg",
        "width": 720,
        "height": 960,
        "alt": "Przedpokoje, zdjęcie 3"
      }
    ]
  },
  {
    "slug": "lazienka",
    "category": "lazienki",
    "title": "Szafka łazienkowa pod umywalkę nablatową",
    "description": "Białe szuflady z blatem w dekorze dębu.",
    "photos": [
      {
        "src": "/realizacje/lazienka-1.jpg",
        "width": 960,
        "height": 720,
        "alt": "Szafka łazienkowa pod umywalkę nablatową, zdjęcie 1"
      },
      {
        "src": "/realizacje/lazienka-2.jpg",
        "width": 960,
        "height": 720,
        "alt": "Szafka łazienkowa pod umywalkę nablatową, zdjęcie 2"
      },
      {
        "src": "/realizacje/lazienka-3.jpg",
        "width": 960,
        "height": 720,
        "alt": "Szafka łazienkowa pod umywalkę nablatową, zdjęcie 3"
      }
    ]
  },
  {
    "slug": "sypialnia-lamele",
    "category": "pokoje",
    "title": "Sypialnia ze ścianą z lameli",
    "description": "Ściana z lameli z podświetleniem i wiszącą toaletką.",
    "photos": [
      {
        "src": "/realizacje/sypialnia-lamele-1.jpg",
        "width": 1350,
        "height": 1800,
        "alt": "Sypialnia ze ścianą z lameli, zdjęcie 1"
      },
      {
        "src": "/realizacje/sypialnia-lamele-2.jpg",
        "width": 1800,
        "height": 1350,
        "alt": "Sypialnia ze ścianą z lameli, zdjęcie 2"
      }
    ]
  },
  {
    "slug": "salon-rtv",
    "category": "pokoje",
    "title": "Zabudowa RTV",
    "description": "Szafka RTV z otwartymi półkami w dekorze dębu.",
    "photos": [
      {
        "src": "/realizacje/salon-rtv-1.jpg",
        "width": 720,
        "height": 960,
        "alt": "Zabudowa RTV, zdjęcie 1"
      }
    ]
  },
  {
    "slug": "komoda-ludwik",
    "category": "pokoje",
    "title": "Komoda i szafka nocna z ażurowymi frontami",
    "description": "Białe meble z frezowanym wzorem i złotymi nóżkami.",
    "photos": [
      {
        "src": "/realizacje/komoda-ludwik-1.jpg",
        "width": 1440,
        "height": 1080,
        "alt": "Komoda i szafka nocna z ażurowymi frontami, zdjęcie 1"
      },
      {
        "src": "/realizacje/komoda-ludwik-2.jpg",
        "width": 1350,
        "height": 1800,
        "alt": "Komoda i szafka nocna z ażurowymi frontami, zdjęcie 2"
      }
    ]
  }
];
