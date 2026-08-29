export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: string;
  cta: "Book Now" | "Contact for Quote" | "Request Corporate Proposal" | "Enquire — Luxury Concierge";
};

export const services: Service[] = [
  { slug: "flight-booking", name: "Flight booking & ticketing", short: "Global flights at competitive fares", description: "Smart routes, competitive fares and support from search to boarding.", icon: "plane", cta: "Book Now" },
  { slug: "visa-assistance", name: "Visa assistance", short: "End-to-end visa guidance", description: "Confident guidance through requirements, documents and applications.", icon: "shield", cta: "Book Now" },
  { slug: "hotel-reservations", name: "Hotels & stays", short: "Curated stays worldwide", description: "Thoughtfully selected accommodation for every style of traveller.", icon: "building", cta: "Book Now" },
  { slug: "tour-packages", name: "Tours & holidays", short: "Ready-to-go itineraries", description: "Curated escapes with memorable experiences, not cookie-cutter itineraries.", icon: "compass", cta: "Book Now" },
  { slug: "travel-consultation", name: "Travel Consultation", short: "Expert planning & advice", description: "One-on-one route, budget and seasonality planning with local insight.", icon: "compass", cta: "Contact for Quote" },
  { slug: "airport-transfers", name: "Airport Transfers", short: "Meet, greet & go", description: "Private chauffeur pickups, inter-terminal and city-to-airport transfers.", icon: "bus", cta: "Book Now" },
  { slug: "car-rental", name: "Car Rental & Chauffeur", short: "Drive or be driven", description: "Self-drive rentals and chauffeur-driven fleets with vetted drivers.", icon: "car", cta: "Book Now" },
  { slug: "travel-insurance", name: "Travel Insurance", short: "Cover that travels with you", description: "Medical, baggage and cancellation cover from trusted underwriters.", icon: "shield", cta: "Contact for Quote" },
  { slug: "passport-assistance", name: "Passport Assistance", short: "New & renewal support", description: "Biometric appointments, form review and fast-track guidance.", icon: "book", cta: "Contact for Quote" },
  { slug: "study-work-abroad", name: "Study / Work Abroad Travel", short: "Go further, stay longer", description: "Student, volunteer and work-travel logistics and documentation.", icon: "graduation", cta: "Contact for Quote" },
  { slug: "group-travel", name: "Group Travel", short: "Built for cohorts", description: "Churches, schools, alumni and friends — coordinated at scale.", icon: "users", cta: "Request Corporate Proposal" },
  { slug: "corporate-travel", name: "Corporate travel", short: "Business, streamlined", description: "Seamless business travel for teams that value time, clarity and care.", icon: "briefcase", cta: "Book Now" },
  { slug: "luxury-vip", name: "Luxury & VIP travel", short: "White-glove concierge", description: "Private transfers, elevated stays and the details that make a difference.", icon: "crown", cta: "Book Now" },
  { slug: "honeymoon", name: "Honeymoon Getaways", short: "Privacy & romance", description: "Secluded villas, overwater suites and couples-only experiences.", icon: "heart", cta: "Enquire — Luxury Concierge" },
  { slug: "family-holidays", name: "Family Holidays", short: "Joy for every age", description: "Kid-friendly stays, edu-tainment excursions and flexible pacing.", icon: "users-round", cta: "Book Now" },
  { slug: "customised-planning", name: "Customised Planning", short: "Exactly your trip", description: "Bespoke itineraries shaped around taste, tempo and budget.", icon: "route", cta: "Contact for Quote" },
];
