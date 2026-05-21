// ============================================================
// Data layer — edit here or swap for a real database later
// ============================================================

export interface Case {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  crimeType: string;
  victim: string;
  location: string;
  suspects: number;
  players: string;
  duration: string;
  difficulty: number; // 1–5
  pricePhysical: number;
  priceDigital: number;
  coverImage: string;
  description: string;
  isFeatured: boolean;
  theme: string;
  portalCode: string;
  hints: HintSection[];
  solution: { killer: string; motive: string; weapon: string };
  confessionText: string;
}

export interface HintSection {
  id: string;
  question: string;
  level1: string;
  level2: string;
  level3: string;
}

export interface Testimonial {
  id: string;
  author: string;
  caseTitle: string;
  rating: number;
  text: string;
  date: string;
  classified: boolean;
}

export const cases: Case[] = [
  {
    id: "1",
    slug: "koi-otvleche-iskren",
    title: "Операция \"Искрен\": Изчезване без следа",
    tagline: "Следите водят до никъде. Искрен е в неизвестност.",
    crimeType: "ИНТЕНЗИВНО ТЪРСЕНЕ",
    victim: "Искрен Тодоров",
    location: "София",
    suspects: 4,
    players: "2–6",
    duration: "6–7 часа",
    difficulty: 5,
    pricePhysical: 49,
    priceDigital: 19,
    coverImage: "/images/iskren-missing-new.png",
    description: "Времето изтича, а уликите си противоречат. Едно обикновено излизане се превръща в кошмар. Готов ли си за 7-часов детективски маратон, в който всеки детайл е от значение? Докажи, че имаш ума на топ следовател.",
    isFeatured: true,
    theme: "Отвличане",
    portalCode: "ISKREN2024",
    hints: [],
    solution: {
      killer: "Станислав",
      motive: "Състезание",
      weapon: "Няма"
    },
    confessionText: "Не можех да позволя на Киара да спечели. Искрен трябваше да изчезне за малко."
  },
  {
    id: "2",
    slug: "otvlichaneto-na-baba-anka",
    title: "Отвличането на Баба Анка",
    tagline: "Мистериозно изчезване от селото. 4 заподозрени.",
    crimeType: "Отвличане",
    victim: "Баба Анка",
    location: "Добрич",
    suspects: 4,
    players: "2–6",
    duration: "3–4 часа",
    difficulty: 4,
    pricePhysical: 49,
    priceDigital: 19,
    coverImage: "/images/baba-anka.png",
    description: "Баба Анка е изчезнала безследно от своята къща в селото. Единственото, което е останало, е отключената входна врата и изстиналата й супа на масата. 4 заподозрени имат мотив. Можете ли да разберете кой стои зад това?",
    isFeatured: true,
    theme: "Отвличане",
    portalCode: "ANKA2026",
    hints: [],
    solution: {
      killer: "Иванка",
      motive: "Имоти",
      weapon: "Няма"
    },
    confessionText: "Исках просто да подпише пълномощно за имотите. Не съм искал да я нараня..."
  },
  {
    id: "3",
    slug: "otvlichaneto-na-dyado-nedyalko",
    title: "Отвличането на Дядо Недялко",
    tagline: "Изчезнал от пчелина си. 4 заподозрени.",
    crimeType: "Отвличане",
    victim: "Дядо Недялко",
    location: "Добрич",
    suspects: 4,
    players: "2–6",
    duration: "1–2 часа",
    difficulty: 3,
    pricePhysical: 49,
    priceDigital: 19,
    coverImage: "/images/dyado-nedyalko.png",
    description: "Дядо Недялко, местният пчелар, е изчезнал мистериозно. Кошерите му са отворени, а телефонът му е намерен в тревата. Кой от четиримата заподозрени е отговорен за отвличането му?",
    isFeatured: true,
    theme: "Отвличане",
    portalCode: "NEDYALKO2026",
    hints: [],
    solution: {
      killer: "Петър",
      motive: "Тайната рецепта за мед",
      weapon: "Няма"
    },
    confessionText: "Той не искаше да ми даде рецептата за специалния си билков мед. Трябваше да го притисна..."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    author: "Стефка П.",
    caseTitle: "Отвличането на Баба Анка",
    rating: 5,
    text: "Страхотна мистерия! Цялото семейство се забавлявахме да търсим кой е отвлякъл баба Анка. Жокерите бяха много добре премерени.",
    date: "2026-04-12",
    classified: true,
  },
  {
    id: "t2",
    author: "Георги К.",
    caseTitle: "Отвличането на Дядо Недялко",
    rating: 5,
    text: "Много забавен и оригинален случай с пчеларя дядо Недялко. Мотивите на заподозрените бяха супер интересни. Препоръчвам!",
    date: "2026-05-01",
    classified: false,
  },
  {
    id: "t3",
    author: "Иван С.",
    caseTitle: "Кой отвлече Искрен?",
    rating: 5,
    text: "Бърз и изключително интригуващ случай! Разкрихме извършителя в последния момент.",
    date: "2026-05-10",
    classified: true,
  }
];

export const themes = [
  { id: "corporate", label: "Корпоративна", icon: "💼", price: 199 },
  { id: "manor", label: "Имение", icon: "🏰", price: 249 },
  { id: "party", label: "Парти", icon: "🎉", price: 179 },
  { id: "wedding", label: "Сватба", icon: "💍", price: 299 },
];

export const CURRENCY = "EUR";

