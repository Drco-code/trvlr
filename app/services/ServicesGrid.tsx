"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { services } from "@/lib/data/services";
import { Reveal } from "@/components/ui/Reveal";

const filters = ["All", "Book Now", "Contact for Quote", "Concierge"];

export default function ServicesGrid() {
  const [active, setActive] = useState("All");
  const filtered = services.filter((s) => {
    if (active === "All") return true;
    if (active === "Concierge") return s.cta.includes("Concierge") || s.cta.includes("Corporate");
    return s.cta === active;
  });

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-10 md:px-6 lg:px-8">
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button key={f} onClick={() => setActive(f)} className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${active === f ? "border-[#0B1E3A] bg-[#0B1E3A] text-white" : "border-[#E8E6E0] bg-white text-[#6B7280] hover:border-[#B8912F]"}`}>{f}</button>
        ))}
      </div>
      <Reveal stagger className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <div key={s.slug} className="card-hover group flex min-h-[200px] flex-col rounded-[16px] border border-[#E8E6E0]/70 bg-white p-6 shadow-[0_2px_10px_rgba(11,30,58,0.04)]">
            <span className="text-[#B8912F]"><Icon name={s.icon} size={20} className="w-5 h-5 text-[#B8912F]" /></span>
            <h3 className="mt-6 text-[16px] font-medium leading-tight text-[#0F2B46]">{s.name}</h3>
            <p className="mt-2.5 text-[13px] leading-[1.6] text-[#6B7280] line-clamp-3">{s.description}</p>
            <Link href="/quote" className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[11px] font-semibold tracking-[0.14em] text-[#B8912F] group-hover:gap-2 transition-all">BOOK NOW <Icon name="arrow-right" size={12} className="w-3 h-3" /></Link>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
