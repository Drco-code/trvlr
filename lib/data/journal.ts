export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Tips" | "Destinations" | "Guides" | "Stories";
  date: string;
  author: string;
  image: string;
  content: string[];
  relatedTourSlugs?: string[];
};

export const posts: Post[] = [
  {
    slug: "packing-like-a-pro",
    title: "Packing Like a Pro — The 5-4-3-2-1 Method",
    excerpt: "Five tops, four bottoms, three pairs of shoes… How editors actually pack for two weeks in one carry-on.",
    category: "Tips",
    date: "12 Aug 2026",
    author: "Ama Boakye",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80",
    content: ["Capsule thinking beats more luggage.", "Start with palette, not items.", "Lay flat, roll soft, fold structured."],
    relatedTourSlugs: ["dubai-essentials"],
  },
  {
    slug: "zanzibar-first-time",
    title: "Zanzibar for First-Timers — Stone Town to Mnemba",
    excerpt: "Where to sleep, when to sail and why the spice tour is worth your morning.",
    category: "Destinations",
    date: "28 Jul 2026",
    author: "Kwame Asare",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&auto=format&fit=crop&q=80",
    content: ["Stone Town is best before 9am.", "Mnemba is tide-dependent — check, don’t assume.", "Ferry light, flight heavy — pick your trade."],
    relatedTourSlugs: ["zanzibar-stone-and-sea"],
  },
  {
    slug: "visa-documents-checklist",
    title: "Visas & Documents — A Calm Checklist",
    excerpt: "Passport validity, yellow fever, proof of funds — what officers actually check at the desk.",
    category: "Guides",
    date: "03 Jul 2026",
    author: "GG Team",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80",
    content: ["Six months validity is not a suggestion.", "Bank statements: 3 months, stamped.", "Yellow fever card lives in your passport, not your bag."],
    relatedTourSlugs: ["cape-coast-escape"],
  },
  {
    slug: "honeymoon-overwater-truth",
    title: "The Overwater Truth — What Honeymoon Brochures Leave Out",
    excerpt: "Wind, tides, seaplane windows and choosing villas by reef not by render.",
    category: "Stories",
    date: "18 Jun 2026",
    author: "Esi Owusu",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop&q=80",
    content: ["Sunrise vs sunset villas — not the same light.", "House reef beats house bar.", "Seaplane seats: request the bulkhead."],
    relatedTourSlugs: ["maldives-honeymoon-overwater"],
  },
  {
    slug: "cape-town-winelands-loop",
    title: "A Winelands Loop Without the Rush",
    excerpt: "Stellenbosch, Franschhoek and why Delaire Graff deserves the long lunch.",
    category: "Destinations",
    date: "02 Jun 2026",
    author: "Kwame Asare",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    content: ["One estate deeply beats three quickly.", "Book the late tasting, skip the crowds."],
    relatedTourSlugs: ["cape-coast-escape"],
  },
  {
    slug: "corporate-travel-101",
    title: "Corporate Travel 101 — From Invoices to Duty of Care",
    excerpt: "How teams move 12 people to one meeting without 12 separate headaches.",
    category: "Guides",
    date: "15 May 2026",
    author: "GG Corporate",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop&q=80",
    content: ["Consolidated invoicing is the real perk.", "Duty-of-care lists are not spreadsheets."],
    relatedTourSlugs: ["cape-coast-escape"],
  },
];
