import PageHeader from "@/components/ui/PageHeader";
import ServicesGrid from "./ServicesGrid";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div>
      <PageHeader title="Services" subtitle="Sixteen services, each with its own description and direct CTA. Filter to find your fit." />
      <ServicesGrid />
      <div className="mx-auto max-w-[1280px] px-4 pb-14 md:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0B1E3A] p-6 text-center md:p-8">
          <h3 className="font-serif text-xl font-semibold text-white">Not sure which service fits?</h3>
          <p className="mx-auto mt-2 max-w-[520px] text-sm text-white/70">Tell us dates and intent — we map you to the right lane and handle the rest.</p>
          <a href="/quote" className="btn-gold mt-5 inline-flex rounded-full px-7 py-3 text-sm font-semibold">Enquire Now</a>
        </div>
      </div>
    </div>
  );
}
