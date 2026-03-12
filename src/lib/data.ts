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
    slug: "ubistvoto-v-mansardta",
    title: "Убийството в Мансардата",
    tagline: "Луксозна вечер. Мъртъв домакин. Шест заподозрени.",
    crimeType: "Убийство",
    victim: "Максим Велев",
    location: "Имение 'Черна роза', Витоша",
    suspects: 6,
    players: "2–8",
    duration: "2–3 часа",
    difficulty: 4,
    pricePhysical: 79,
    priceDigital: 29,
    coverImage: "/images/case1.jpg",
    description:
      "Богатият колекционер Максим Велев е открит мъртъв в заключената мансарда на имението си след коктейлно парти. Полицията е озадачена. Шест от гостите имат мотив. Само един е убиецът. Можете ли да го разкриете преди сутринта?",
    isFeatured: true,
    theme: "Имение",
    portalCode: "KRIM2024",
    hints: [
      {
        id: "h1",
        question: "Не мога да разбера кой лъже за алибито си.",
        level1:
          "Помислете за разликата в показанията на двама от гостите относно времето около 22:00.",
        level2:
          "Светлината в библиотеката е запалена в 22:05 - кой твърди, че е бил там, но не е споменат в камерите?",
        level3:
          "Виктория Стоева твърди, че е четяла в библиотеката от 21:30 до 23:00, но охранителната камера я показва да излиза към мансардата в 21:55.",
      },
      {
        id: "h2",
        question: "Какво означава шифърът от бележника?",
        level1: "Опитайте класически Цезаров шифър с отместване 3.",
        level2:
          'Прочетете всяка трета буква отляво надясно — формира се дума свързана с "ключ".',
        level3:
          'Шифърът гласи "ТРЕЗОРА" — комбинацията до сейфа в кабинета е 1947.',
      },
      {
        id: "h3",
        question: "Каква е връзката между жертвата и завещанието?",
        level1:
          "Максим е сменил завещанието си само 3 дни преди убийството.",
        level2:
          "Новото завещание изключва племенника му Борис от наследството.",
        level3:
          "Борис е разбрал за промяната от личния адвокат на Максим осем часа преди убийството — и е имал достъп до кухнята, откъдето е взето оръжието.",
      },
    ],
    solution: {
      killer: "Борис Велев",
      motive: "Наследство",
      weapon: "Бронзова статуетка",
    },
    confessionText:
      "Исках само да му кажа, че не е честно. Che аз съм работил за него цял живот и той ме изтрива с едно писание. Той се засмя. Тогава видях статуетката на масата...",
  },
  {
    id: "2",
    slug: "otravatata-igra",
    title: "Отровната Игра",
    tagline: "Корпоративна вечеря. Едно тяло. Нула свидетели.",
    crimeType: "Отравяне",
    victim: "Диана Коева",
    location: "Ресторант 'Алиби', София",
    suspects: 5,
    players: "2–6",
    duration: "3–4 часа",
    difficulty: 5,
    pricePhysical: 89,
    priceDigital: 34,
    coverImage: "/images/case2.jpg",
    description:
      "Изпълнителният директор на 'НовоТек' пада мъртва по средата на годишната корпоративна вечеря. Токсикологията открива редкият отровен алкалоид. Всеки от петимата й колеги е имал достъп до чашата й. Но кой е имал и мотив?",
    isFeatured: true,
    theme: "Корпоративна",
    portalCode: "NOVA2024",
    hints: [
      {
        id: "h1",
        question: "Откъде е дошла отровата?",
        level1: "Отровата е добавена в напитката, не в храната.",
        level2: "Сервитьорът е сменен в последния момент - разберете защо.",
        level3:
          "Отровата e в аспиринската таблетка, растворена в чашата с вода. Само един от гостите e алерголог и знае за точната доза.",
      },
    ],
    solution: {
      killer: "Атанас Попов",
      motive: "Корпоративен шпионаж",
      weapon: "Отровен алкалоид (аконитин)",
    },
    confessionText:
      "Тя щеше да продаде компанията. Двадесет години труд — продадени на конкурентите. Не можех да позволя това. Аконитинът е неоткриваем, ако знаеш дозата...",
  },
  {
    id: "3",
    slug: "iztcheznalata-nevesta",
    title: "Изчезналата Невеста",
    tagline: "Сватбата свърши. Булката — изчезнала.",
    crimeType: "Изчезване / Убийство",
    victim: "Елена Маринова",
    location: "Хотел 'Гранд Палас', Пловдив",
    suspects: 8,
    players: "4–12",
    duration: "3–5 часа",
    difficulty: 3,
    pricePhysical: 99,
    priceDigital: 39,
    coverImage: "/images/case3.jpg",
    description:
      "Пред целия сватбен гаст, Елена изчезва между тоста и първия танц. Стаята й е заключена отвътре. Писмо е оставено — но написано ли е от нея? Осем от гостите крият тайни. Само един знае истината.",
    isFeatured: true,
    theme: "Сватба",
    portalCode: "GLAM2024",
    hints: [
      {
        id: "h1",
        question: "Писмото ли е истинско?",
        level1: "Сравнете подписа с друг документ на Елена.",
        level2: "Натискът на химикала в писмото е различен от нормалните й подписи.",
        level3:
          "Писмото е фалшиво — написано от Красимир Маринов, братът на булката, за да отклони вниманието.",
      },
    ],
    solution: {
      killer: "Красимир Маринов",
      motive: "Застрахователна измама",
      weapon: "Задушаване",
    },
    confessionText:
      "Тя щеше да получи всичко от баща ни. А аз — нищо. Планирах го месеци наред. Писмото беше перфектно. Само подписът ме издаде...",
  },
  {
    id: "4",
    slug: "koi-otvleche-iskren",
    title: "Кой отвлече Искрен?",
    tagline: "Следите водят до никъде. Искрен е в неизвестност.",
    crimeType: "Отвличане",
    victim: "Искрен Тодоров",
    location: "София",
    suspects: 4,
    players: "2–6",
    duration: "1–2 часа",
    difficulty: 3,
    pricePhysical: 49,
    priceDigital: 19,
    coverImage: "/images/iskren-missing.png",
    description: "Искрен е изчезнал мистериозно. Всички следи водят до неговите най-близки приятели. Можете ли да разберете кой стои зад това преди да е станало твърде късно?",
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
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    author: "Мартин К.",
    caseTitle: "Убийството в Мансардата",
    rating: 5,
    text: "Прекарахме 3 часа в пълно потапяне. Детайлите са невероятни — досиетата, снимките, шифрите. Накрая всички останахме без думи. Абсолютно задължително изживяване!",
    date: "2024-11-15",
    classified: true,
  },
  {
    id: "t2",
    author: "Симона В.",
    caseTitle: "Отровната Игра",
    rating: 5,
    text: "Купихме го за тиймбилдинг и беше хит! Колегите се разделиха на фракции и накрая почти скарахме работата. Разкрихме убиеца в последните 5 минути!",
    date: "2024-12-02",
    classified: false,
  },
  {
    id: "t3",
    author: "Десислава М.",
    caseTitle: "Изчезналата Невеста",
    rating: 5,
    text: "Взехме го за моминско парти и беше ПЕРФЕКТНО. Жокерите ни помогнаха без да разалят всичко. Custom версията за сватбата ни после беше незабравима.",
    date: "2025-01-08",
    classified: true,
  },
  {
    id: "t4",
    author: "Петър Д.",
    caseTitle: "Убийството в Мансардата",
    rating: 4,
    text: "Много добре измислени улики. Намерихме убиеца но не можахме да докажем мотива докрая — трябваше ни жокер. Перфектен баланс на трудност.",
    date: "2025-01-20",
    classified: false,
  },
];

export const themes = [
  { id: "corporate", label: "Корпоративна", icon: "💼", price: 199 },
  { id: "manor", label: "Имение", icon: "🏰", price: 249 },
  { id: "party", label: "Парти", icon: "🎉", price: 179 },
  { id: "wedding", label: "Сватба", icon: "💍", price: 299 },
];
