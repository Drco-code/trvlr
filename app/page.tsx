import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import TrustStrip from "@/components/sections/TrustStrip";
import TourCard from "@/components/sections/TourCard";
import DestinationCard from "@/components/sections/DestinationCard";
import Testimonials from "@/components/sections/Testimonials";
import HeroSearch from "@/components/sections/HeroSearch";
import HeroParallax from "@/components/ui/HeroParallax";
import { services } from "@/lib/data/services";
import { destinations } from "@/lib/data/destinations";
import { tours } from "@/lib/data/tours";
import { posts } from "@/lib/data/journal";

export default function Home() {
  const featuredTours = tours.filter((t) => t.featured).slice(0, 4);
  const latestPosts = posts.slice(0, 3);

  return (
    <div>
      {/* Hero §5.1 — GSAP parallax + stagger (replaces CSS ken-burns/fade-up) */}
      <HeroParallax>
        <section className="relative flex min-h-[86vh] flex-col justify-center overflow-hidden bg-[#0B1E3A] pb-20 md:pb-28">
          <img
            data-parallax
            src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1920&q=80"
            alt="Mt Fuji and pagoda"
            className="absolute inset-0 h-[120%] w-full object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A]/85 via-[#0B1E3A]/35 to-[#0B1E3A]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3A]/30 via-transparent to-transparent" />
          <div className="relative mx-auto w-full max-w-[1280px] px-4 py-14 md:px-6 md:py-20 lg:px-8">
            <div data-hero-stagger className="max-w-[640px]">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B8912F] animate-pulse" /> YOUR JOURNEY. OUR EXPERTISE.
              </p>
              <h1 className="mt-4 font-serif text-[36px] font-semibold leading-[0.92] tracking-tight text-white md:text-[56px]">
                Explore the World
                <br />
                Without Limits
              </h1>
              <p className="mt-4 max-w-[500px] text-[14px] leading-6 text-white/80 md:text-[15px]">
                Seamless journeys. Exceptional experiences. From Accra to the world — flights, visas, tours and bespoke planning in one place.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/quote" className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide shadow-[0_6px_24px_rgba(184,145,47,0.35)]">
                  Book Your Trip <Icon name="arrow-right" size={16} />
                </Link>
                <Link href="/tours" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur hover:bg-white hover:text-[#0B1E3A] transition-colors">
                  Explore Tours <Icon name="arrow-right" size={14} />
                </Link>
              </div>
              <div className="mt-6 flex items-center gap-3 text-xs text-white/60">
                <span className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/100?img=8" alt="" className="h-7 w-7 rounded-full border-2 border-white/90 object-cover" />
                  <img src="https://i.pravatar.cc/100?img=12" alt="" className="h-7 w-7 rounded-full border-2 border-white/90 object-cover" />
                  <img src="https://i.pravatar.cc/100?img=32" alt="" className="h-7 w-7 rounded-full border-2 border-white/90 object-cover" />
                </span>
                <span>Trusted by 3,400+ travellers · 4.9/5</span>
              </div>
            </div>
          </div>

          {/* Floating search pill — inspo Trivera bar */}
          <div className="absolute inset-x-4 bottom-4 mx-auto max-w-[980px] md:inset-x-6 lg:inset-x-8">
            <HeroSearch />
            <p className="mt-2 text-center text-xs text-white/60 md:text-white/70">Or <Link href="/quote" className="underline decoration-white/40 hover:text-white">Request a custom quote</Link> — we handle visas, flights & planning.</p>
          </div>
        </section>
      </HeroParallax>

      <TrustStrip />

      {/* Services overview §5.1 — inspo: rounded 20px cards, gold icon pill */}
      <section className="bg-[#F6F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <Reveal>
            <SectionHeader eyebrow="SERVICES" title="Sixteen ways we move you" subtitle="Every service is bookable — flight to bespoke planning. Guidance first, logistics handled." />
          </Reveal>
          <Reveal stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              services.find((s) => s.slug === "flight-booking")!,
              services.find((s) => s.slug === "visa-assistance")!,
              services.find((s) => s.slug === "hotel-reservations")!,
              services.find((s) => s.slug === "tour-packages")!,
              services.find((s) => s.slug === "corporate-travel")!,
              services.find((s) => s.slug === "luxury-vip")!,
            ].map((s) => (
              <Link key={s.slug} href="/services" className="card-hover group flex min-h-[210px] flex-col rounded-[20px] border border-[#E8E6E0]/60 bg-white p-6 shadow-card">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F6F3EC] text-[#B8912F] ring-1 ring-[#B8912F]/15"><Icon name={s.icon} size={20} className="w-5 h-5 text-[#B8912F]" /></span>
                <h3 className="mt-6 text-[16px] font-semibold leading-tight text-[#0B1E3A]">{s.name}</h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-[#6B7280] line-clamp-3">{s.description}</p>
                <span className="card-arrow mt-auto inline-flex items-center gap-1.5 pt-6 text-[11px] font-semibold tracking-[0.14em] text-[#B8912F]">BOOK NOW <Icon name="arrow-right" size={12} className="w-3 h-3" /></span>
              </Link>
            ))}
          </Reveal>
          <div className="mt-8 flex justify-center">
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-[#0B1E3A]/15 bg-white px-6 py-3 text-sm font-medium text-[#0B1E3A] shadow-sm hover:border-[#B8912F] hover:text-[#0B1E3A] transition-colors">View all 16 services <Icon name="arrow-right" size={14} /></Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations §5.1 */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <Reveal><SectionHeader eyebrow="DESTINATIONS" title="Where the light is good" subtitle="Eight featured destinations. Each opens a long-form guide with highlights, best time and related tours." /></Reveal>
          <Reveal stagger className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {destinations.map((d) => <DestinationCard key={d.slug} d={d} />)}
          </Reveal>
        </div>
      </section>

      {/* Tour Packages preview §5.1 — inspo Popular Trips You'll Love */}
      <section className="bg-[#F6F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader eyebrow="TOUR PACKAGES" title="Popular Trips You'll Love" subtitle="Handpicked for this season — price, duration and destination at a glance." />
            <Link href="/tours" className="hidden shrink-0 items-center gap-1 rounded-full border border-[#0B1E3A]/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#0B1E3A] hover:border-[#B8912F] md:inline-flex">All tours <Icon name="arrow-right" size={14} /></Link>
          </div>
          <Reveal stagger className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredTours.map((t) => <TourCard key={t.slug} tour={t} />)}
          </Reveal>
          <div className="mt-6 flex justify-center md:hidden">
            <Link href="/tours" className="inline-flex items-center gap-2 rounded-full border border-[#0B1E3A]/15 bg-white px-6 py-3 text-sm font-medium text-[#0B1E3A]">All tours <Icon name="arrow-right" size={14} /></Link>
          </div>
        </div>
      </section>

      {/* Special Deals band §5.1 — light breaker between two lights, prevents dark tunnel */}
      <section className="bg-[#F6F3EC] py-6 md:py-8">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[20px] border border-[#B8912F]/20 bg-white px-6 py-6 shadow-soft md:flex-row md:px-8">
            <div className="flex-1">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#B8912F]"><span className="h-1.5 w-1.5 rounded-full bg-[#B8912F]" /> LIMITED TIME</p>
              <h3 className="mt-2 font-serif text-[18px] font-semibold leading-tight text-[#0B1E3A] md:text-[20px]">Early-bird — GHS 1,200 off Dubai Essentials when you book by 20 Nov</h3>
              <p className="mt-1.5 text-sm text-[#6B7280]">Use at quote time. Placeholder offer until confirmed.</p>
            </div>
            <Link href="/quote" className="btn-gold inline-flex shrink-0 items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold shadow-lg">Claim Offer <Icon name="arrow-right" size={14} /></Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us §5.1 — inspo dark glass 2x4 */}
      <section className="relative overflow-hidden bg-[#0B1E3A] py-14 md:py-20">
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80" alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.09]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A] via-[#0B1E3A]/85 to-[#0B1E3A]/60" />
        <div className="relative mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-[640px]">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#B8912F]">WHY TRAVEL WITH US</p>
                <h2 className="mt-2 font-serif text-[28px] font-semibold leading-tight tracking-tight text-white md:text-[34px]">Expertise, handled personally</h2>
                <p className="mt-3 text-[15px] leading-6 text-white/70">International reach, local care. Every trip has a person behind it.</p>
                <div className="mt-4 h-px w-12 bg-[#B8912F]" />
              </div>
              <Link href="/about" className="hidden shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-[#0B1E3A] md:inline-flex">Learn more <Icon name="arrow-right" size={14} /></Link>
            </div>
          </Reveal>
          <Reveal stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { icon: "route", title: "Effortless Planning", desc: "Routes sequenced by seasonality, jet-lag and local holidays — not just price." },
              { icon: "compass", title: "Get the Best Deals", desc: "Negotiated rates and fare holds matched to your budget without corner-cutting." },
              { icon: "map", title: "Endless Travel Options", desc: "Sixteen services, eight destinations — mixed however you want to go." },
              { icon: "shield", title: "Safe & Reliable Booking", desc: "A number that answers. Support before, during and after you travel." },
            ].map((c) => (
              <div key={c.title} className="group rounded-[18px] border border-white/[0.12] bg-white/[0.08] p-6 backdrop-blur-xl transition-colors hover:bg-white/[0.11] hover:border-white/20">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8912F]/15 text-[#B8912F] ring-1 ring-[#B8912F]/20 group-hover:bg-[#B8912F]/20"><Icon name={c.icon} size={18} /></span>
                <h3 className="mt-4 text-sm font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{c.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Trusted Partner statement — inspo typographic pills */}
      <section className="bg-[#F6F3EC] py-12 md:py-16">
        <div className="mx-auto max-w-[860px] px-4 text-center md:px-6">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#B8912F]">SMARTER WAY TO TRAVEL</p>
          <h2 className="mx-auto mt-3 font-serif text-[26px] font-semibold leading-[1.15] tracking-tight text-[#0B1E3A] md:text-[30px]">
            Your Trusted <span className="inline-flex items-center align-middle"><img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200&q=80" alt="" className="h-7 w-14 rounded-full object-cover ring-1 ring-[#0B1E3A]/10 md:h-8 md:w-16" /></span> Travel Partner
            <br />
            for Every Journey <span className="inline-flex items-center gap-1 align-middle rounded-full bg-[#B8912F]/15 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-[#0B1E3A] ring-1 ring-[#B8912F]/20">4.9/5 <span className="text-[#B8912F]">★★★★★</span></span> You Take
            <br />
            Around <span className="inline-flex align-middle"><img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=200&q=80" alt="" className="h-7 w-12 rounded-full object-cover ring-1 ring-[#0B1E3A]/10 md:h-8 md:w-14" /></span> the World
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-[#6B7280]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-[#E8E6E0]"><Icon name="shield" size={14} className="text-[#B8912F]" /> ATOL protected</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-[#E8E6E0]"><Icon name="users" size={14} className="text-[#B8912F]" /> Loved by 3,400+ travellers</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-[#E8E6E0]"><Icon name="phone" size={14} className="text-[#B8912F]" /> 24/7 support</span>
          </div>
        </div>
      </section>

      {/* Testimonials §5.1 */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Reveal><SectionHeader eyebrow="TESTIMONIALS" title="What travellers say" subtitle="Real itineraries, real logistics — the quiet part is that everything just worked." /></Reveal>
            <Reveal className="lg:pt-2"><Testimonials /></Reveal>
          </div>
        </div>
      </section>

      {/* Travel Journal preview §5.1 */}
      <section className="bg-[#F6F3EC] py-14 md:py-16">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <SectionHeader eyebrow="GG TRAVEL JOURNAL" title="Stories to travel by" subtitle="Tips, guides and destination notes — snacks between bookings." />
            <Link href="/journal" className="hidden shrink-0 items-center gap-1 rounded-full border border-[#0B1E3A]/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#0B1E3A] hover:border-[#B8912F] md:inline-flex">All articles <Icon name="arrow-right" size={14} /></Link>
          </div>
          <Reveal stagger className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {latestPosts.map((p) => (
              <Link key={p.slug} href={`/journal/${p.slug}`} className="card-hover overflow-hidden rounded-[20px] border border-[#E8E6E0] bg-white shadow-card">
                <div className="aspect-[16/10] overflow-hidden bg-[#F6F3EC]"><img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" /></div>
                <div className="p-5">
                  <p className="text-xs font-semibold tracking-widest text-[#B8912F]">{p.category.toUpperCase()} · {p.date}</p>
                  <h3 className="mt-2 font-serif text-[15px] font-semibold leading-tight text-[#0B1E3A] line-clamp-2">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-5 text-[#6B7280]">{p.excerpt}</p>
                  <span className="card-arrow mt-4 inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-[#0B1E3A]">Read <Icon name="arrow-right" size={12} /></span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Final CTA band §5.1 — inspo Ready to Explore with image */}
      <section className="bg-[#0B1E3A] py-6 md:py-8">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[24px] bg-[#13294B]">
            <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&q=80" alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A] via-[#0B1E3A]/55 to-[#0B1E3A]/10" />
            <div className="relative px-6 py-12 text-center md:px-10 md:py-14">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#B8912F]">READY TO GO?</p>
              <h2 className="mx-auto mt-2 max-w-[560px] font-serif text-2xl font-semibold leading-tight text-white md:text-[30px]">Ready to Explore Your Next Adventure Around the World?</h2>
              <p className="mx-auto mt-3 max-w-[520px] text-sm leading-6 text-white/70">Plan safe, book, and start your journey in minutes — visa, flight, hotel and itinerary handled as one.</p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/quote" className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold">Start Your Journey <Icon name="arrow-right" size={16} /></Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-medium text-white backdrop-blur hover:bg-white hover:text-[#0B1E3A] transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
          {/* thin footer brand watermark like inspi Triverra */}
          <p className="mt-3 text-center font-serif text-[11px] tracking-[0.35em] text-white/15">GG TRAVELS & TOURS</p>
        </div>
      </section>
    </div>
  );
}
