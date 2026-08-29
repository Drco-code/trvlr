import Link from "next/link";
import QuoteForm from "@/components/sections/QuoteForm";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Corporate Travel" };

export default function CorporatePage() {
  return (
    <div>
      <section className="bg-[#0B1E3A] py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#B8912F]">CORPORATE · GROUP</p>
          <h1 className="mt-3 max-w-[640px] font-serif text-[32px] font-semibold leading-tight text-white md:text-[40px]">Move the team. Keep the cost clear.</h1>
          <p className="mt-3 max-w-[560px] text-sm leading-6 text-white/70">Account-style handling, group rates and a single invoice. One contact, one timeline, one duty-of-care list.</p>
        </div>
      </section>

      <section className="bg-[#F6F3EC] py-10 md:py-12">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-4 md:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-4">
            {[
              { t: "Consolidated invoicing", d: "One VAT-compliant invoice for flights, hotels and transfers — no paper chase." },
              { t: "Group rates & blocks", d: "Negotiated holds for 10–50+ travellers with name-change windows." },
              { t: "Dedicated support", d: "A named handler on WhatsApp and phone from first enquiry to return." },
            ].map((x) => (
              <div key={x.t} className="rounded-xl border border-[#E8E6E0] bg-white p-5"><h3 className="text-sm font-semibold text-[#0B1E3A]">{x.t}</h3><p className="mt-1 text-sm leading-6 text-[#6B7280]">{x.d}</p></div>
            ))}
            <div className="rounded-xl bg-[#0B1E3A] p-6 text-white">
              <h3 className="text-sm font-semibold">Trusted by teams</h3>
              <p className="mt-1 text-sm text-white/70">Churches, schools, corporate cohorts — placeholder logos until supplied (§12).</p>
              <div className="mt-3 grid grid-cols-4 gap-2 opacity-50">
                {Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-10 rounded bg-white/10" />)}
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#E8E6E0] bg-white p-6">
            <h2 className="text-sm font-semibold tracking-widest text-[#0B1E3A]">REQUEST CORPORATE PROPOSAL</h2>
            <p className="mt-1 text-sm text-[#6B7280]">Same enquiry flow, with company details step (UI-only, no data sent in this phase).</p>
            <div className="mt-6"><QuoteForm variant="corporate" /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
