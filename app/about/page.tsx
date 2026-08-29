import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <div>
      <PageHeader title="About GG Travels & Tours" subtitle="The story, the mission and the people behind Your Journey. Our Expertise." image="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&q=80" />
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#B8912F]">OUR STORY</p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-[#0B1E3A] md:text-3xl">Built on judgement, not just bookings.</h2>
              <p className="mt-4 text-sm leading-7 text-[#6B7280]">GG Travels &amp; Tours was founded to do one thing well — plan travel that respects your time, taste and tempo. From Gall-operated visas to Indian Ocean honeymoons, we handle the pieces so you experience the whole.</p>
              <p className="mt-3 text-sm leading-7 text-[#6B7280]"><span className="rounded bg-[#F6F3EC] px-1.5 py-0.5 text-xs tracking-wide text-[#6B7280]">Placeholder</span> Mission, vision and year established will replace this once supplied (§12). For now the layout reserves the rhythm.</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-[#F6F3EC] p-5"><h3 className="text-sm font-semibold text-[#0B1E3A]">Mission</h3><p className="mt-2 text-sm leading-6 text-[#6B7280]">Make exceptional travel seamless — honest pricing, calm logistics, attentive support.</p></div>
                <div className="rounded-xl bg-[#F6F3EC] p-5"><h3 className="text-sm font-semibold text-[#0B1E3A]">Vision</h3><p className="mt-2 text-sm leading-6 text-[#6B7280]">The most trusted Ghanaian travel curator for Africa and beyond.</p></div>
              </div>
            </Reveal>
            <Reveal className="overflow-hidden rounded-2xl bg-[#F6F3EC]">
              <img src="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800&auto=format&fit=crop&q=80" alt="Team placeholder" className="h-full w-full object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F3EC] py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <Reveal><SectionHeader eyebrow="WHY CHOOSE US" title="Value that shows in transit" /></Reveal>
          <Reveal stagger className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { t: "Expertise", d: "Decades of combined routing, fare and embassy knowledge." },
              { t: "Personalised", d: "Itineraries tuned to who you travel with and how you rest." },
              { t: "Reach", d: "Accra-rooted, partner-fluent across 28 destinations and counting." },
            ].map((x) => (
              <div key={x.t} className="rounded-xl border border-[#E8E6E0] bg-white p-6"><h3 className="text-sm font-semibold text-[#0B1E3A]">{x.t}</h3><p className="mt-2 text-sm leading-6 text-[#6B7280]">{x.d}</p></div>
            ))}
          </Reveal>
          <div className="mt-8 flex justify-center"><Link href="/contact" className="btn-gold rounded-full px-7 py-3 text-sm font-semibold">Contact Us</Link></div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="rounded-2xl border border-dashed border-[#E8E6E0] bg-[#F6F3EC]/60 p-6 text-center">
            <p className="text-sm font-semibold text-[#0B1E3A]">Team section — placeholder</p>
            <p className="mt-1 text-sm text-[#6B7280]">Photos and bios will replace this grid once supplied.</p>
            <div className="mt-4 grid grid-cols-3 gap-3 opacity-60 md:grid-cols-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-xl bg-white" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
