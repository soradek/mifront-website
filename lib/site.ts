// Dane firmy zgodne z wpisem w CEIDG.
export const site = {
  name: 'MIFRONT',
  legalName: 'MIFRONT Mirosław Sobczak',
  tagline: 'Meble skrojone na Twoją miarę',
  owner: 'Mirosław Sobczak',
  url: 'https://www.mifront.pl',
  phone: '696 020 841',
  phoneHref: 'tel:+48696020841',
  email: 'info@mifront.pl',
  facebook: 'https://www.facebook.com/profile.php?id=100054620192029',
  address: {
    street: 'ul. Staropoznańska 178',
    postalCode: '88-100',
    city: 'Inowrocław',
    region: 'kujawsko-pomorskie',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Staropozna%C5%84ska+178%2C+88-100+Inowroc%C5%82aw',
  nip: '5561219454',
  regon: '381842382',
  since: 2018,
  description:
    'MIFRONT z Inowrocławia: meble na wymiar, kuchnie, szafy przesuwne, garderoby, meble łazienkowe i pokojowe. Pomiar, projekt, wykonanie i montaż. Tel. 696 020 841.',
} as const;

export const faq = [
  {
    q: 'Ile kosztują meble na wymiar?',
    a: 'Cenę podajemy po pomiarze i projekcie. Zależy od wymiarów, rodzaju frontów, blatu, okuć i wyposażenia, więc dwie kuchnie tej samej długości mogą kosztować zupełnie inaczej.',
  },
  {
    q: 'Gdzie pracujecie?',
    a: 'Pracownia jest w Inowrocławiu, przy ul. Staropoznańskiej 178. Wykonujemy meble dla klientów z Inowrocławia i okolic. Mieszkasz dalej? Zadzwoń i zapytaj o swoją miejscowość.',
  },
  {
    q: 'Jakie fronty możecie wykonać?',
    a: 'Lakierowane, matowe, akrylowe, w połysku i w dekorach drewna. Pokażemy próbki i pomożemy dobrać fronty do blatu, podłogi i ścian.',
  },
  {
    q: 'Ile trwa realizacja?',
    a: 'Termin podajemy razem z wyceną. Zależy od wielkości zamówienia i dostępności materiałów.',
  },
  {
    q: 'Czy naprawiacie i wymieniacie okucia w starych meblach?',
    a: 'Tak. Wymieniamy zawiasy, prowadnice szuflad i podnośniki, regulujemy fronty i naprawiamy meble.',
  },
] as const;

export const offer = [
  { title: 'Kuchnie na wymiar', text: 'Od pomiaru ścian po ostatnią listwę. Zabudowa AGD, cargo, szuflady, blaty i oświetlenie.' },
  { title: 'Szafy przesuwne', text: 'Drzwi lustrzane, szklane, w ramie loft albo w dekorze drewna. Wnętrze ustawione pod to, co w niej będzie.' },
  { title: 'Garderoby', text: 'Drążki, półki, szuflady i wysuwane dodatki, nawet deska do prasowania. Każdy centymetr wnęki pracuje.' },
  { title: 'Meble łazienkowe', text: 'Szafki pod umywalkę, słupki i zabudowy pralki.' },
  { title: 'Meble pokojowe i przedpokoje', text: 'Zabudowy RTV, komody, ściany z lameli, szafy z siedziskiem i wieszakami.' },
  { title: 'Wymiana okuć i serwis', text: 'Nowe zawiasy, prowadnice, podnośniki. Regulacja i naprawa mebli.' },
] as const;

export const steps = [
  { title: 'Rozmowa', text: 'Dzwonisz albo piszesz. Mówisz, co chcesz zabudować i w jakim stylu.' },
  { title: 'Pomiar', text: 'Przyjeżdżamy zmierzyć wnętrze. Ściany rzadko są proste, więc mierzymy wszystko.' },
  { title: 'Projekt i wycena', text: 'Dobieramy fronty, blaty i okucia. Dostajesz projekt i konkretną cenę.' },
  { title: 'Wykonanie i montaż', text: 'Meble powstają na wymiar i są montowane na miejscu, razem z AGD i oświetleniem.' },
] as const;
