export type Destination = {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  bestTime: string;
  relatedTourSlugs: string[];
};

export const destinations: Destination[] = [
  { slug: "dubai", name: "Dubai", country: "UAE", tagline: "Future meets the desert", description: "From Burj Khalifa sunsets to desert safaris, Dubai is engineered wonder with souk-side soul.", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=80", highlights: ["Burj Khalifa & Dubai Mall", "Desert safari at golden hour", "Spice Souk & Creek"], bestTime: "Nov — Mar", relatedTourSlugs: ["dubai-essentials", "desert-luxury-dubai"] },
  { slug: "cape-town", name: "Cape Town", country: "South Africa", tagline: "Where mountain meets ocean", description: "Table Mountain, Kirstenbosch, Robben Island — a city of dramatic geography and layered history.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80", highlights: ["Cableway & mountain hikes", "Peninsula & penguins", "Stellenbosch day trip"], bestTime: "Oct — Apr", relatedTourSlugs: ["cape-coast-escape"] },
  { slug: "zanzibar", name: "Zanzibar", country: "Tanzania", tagline: "Spice Island calm", description: "White sand, Stone Town alleys and turquoise that edits itself.", image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&auto=format&fit=crop&q=80", highlights: ["Stone Town UNESCO walk", "Mnemba snorkelling", "Spice farm tour"], bestTime: "Jun — Oct, Dec — Feb", relatedTourSlugs: ["zanzibar-stone-and-sea"] },
  { slug: "mauritius", name: "Mauritius", country: "Mauritius", tagline: "Indian Ocean poise", description: "Calm lagoons, Creole cuisine and a French-inflected ease.", image: "https://images.unsplash.com/photo-1552873547-b88e7b2760e2?w=800&auto=format&fit=crop&q=80", highlights: ["Ile aux Cerfs", "Chamarel & tea plantations", "Lagoon kayaks"], bestTime: "May — Dec", relatedTourSlugs: ["mauritius-lagoon-retreat"] },
  { slug: "maldives", name: "Maldives", country: "Maldives", tagline: "Atolls, at ease", description: "Overwater villas, house-reef snorkels and the quietest horizon you will hear.", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop&q=80", highlights: ["Overwater suites", "Dolphin cruises", "Dive atolls"], bestTime: "Nov — Apr", relatedTourSlugs: ["maldives-honeymoon-overwater"] },
  { slug: "paris", name: "Paris", country: "France", tagline: "Light, always", description: "Museums by day, bistros by night — the template for city romance.", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=80", highlights: ["Louvre & Musée d’Orsay", "Seine & Île Saint-Louis", "Marais & Montmartre"], bestTime: "Apr — Jun, Sep — Oct", relatedTourSlugs: ["paris-city-of-light"] },
  { slug: "london", name: "London", country: "United Kingdom", tagline: "Village of villages", description: "From Borough Market to the British Museum, layered, walkable, wordly.", image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&auto=format&fit=crop&q=80", highlights: ["West End & Tate Modern", "Greenwich & Thames", "Notting Hill & markets"], bestTime: "May — Sep", relatedTourSlugs: ["london-heritage-city"] },
  { slug: "singapore", name: "Singapore", country: "Singapore", tagline: "Garden in a city", description: "Hawker craft, Gardens by the Bay and orchids that behave like architecture.", image: "https://images.unsplash.com/photo-1529528070131-eda9f3e90919?w=800&auto=format&fit=crop&q=80", highlights: ["Gardens by the Bay", "Hawker & Peranakan trails", "Sentosa & skyline"], bestTime: "Feb — Apr", relatedTourSlugs: ["singapore-garden-city"] },
];
