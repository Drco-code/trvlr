import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { tours } from "@/lib/data/tours";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Luxury Travel" };

export default function LuxuryPage() {
  const premium = tours.filter((t) => ["desert-luxury-dubai", "maldives-honeymoon-overwater"].includes(t.slug));
  return (
    <div>
      <section className="relative flex min-h-[56vh] items-center overflow-hidden bg-[#0B1E3A]">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80" alt="Luxury" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A] via-[#0B1E3A]/40 to-transparent" />
        <div className="relative mx-auto max-w-[1280px] px-4 py-14 md:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#B8912F]">LUXURY &amp; VIP · HONEYMOON</p>
          <h1 className="mt-3 max-w-[620px] font-serif text-[32px] font-semibold leading-tight text-white md:text-[42px]">A slower trip. A closer watch.</h1>
          <p className="mt-3 max-w-[520px] text-sm leading-6 text-white/75">Concierge-led itineraries, private charters and suites where silence is the amenity. Built around your rhythm, not a template.</p>
          <Link href="/quote" className="btn-gold mt-6 inline-flex rounded-full px-7 py-3 text-sm font-semibold">Enquire — Luxury Concierge</Link>
        </div>
      </section>

      <section className="bg-[#F6F3EC] py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <Reveal stagger className="grid gap-4 md:grid-cols-2">
            {premium.map((t) => (
              <Link key={t.slug} href={`/tours/${t.slug}`} className="card-hover overflow-hidden rounded-2xl border border-[#E8E6E0] bg-white">
                <img src={t.image} alt={t.name} className="aspect-[16/10] w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs tracking-widest text-[#B8912F]">{t.destination.toUpperCase()}</p>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-[#0B1E3A]">{t.name}</h3>
                  <p className="mt-1 text-sm text-[#6B7280]">{t.teaser}</p>
                  <p className="mt-3 text-sm font-semibold text-[#0B1E3A]">{t.price} · {t.duration}</p>
                </div>
              </Link>
            ))}
          </Reveal>
          <div className="mt-8 rounded-2xl bg-white p-6 text-center">
            <h3 className="font-serif text-lg font-semibold text-[#0B1E3A]">Bespoke honeymoon &amp; VIP</h3>
            <p className="mx-auto mt-2 max-w-[520px] text-sm text-[#6B7280]">Private sandbank dinners, seaplane windows by request, suites held while you decide.</p>
            <Link href="/quote" className="btn-gold mt-4 inline-flex rounded-full px-6 py-2.5 text-sm font-semibold gap-2">Enquire <Icon name="arrow-right" size={14} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
