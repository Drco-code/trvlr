"use client";
import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";

const testimonials = [
  { quote: "GG handled our visas, flights and a last-minute rebooking without a single wasted day. Calm, precise, human.", name: "L. Mensah", meta: "Dubai Essentials · Dec 2025" },
  { quote: "The Zanzibar itinerary felt edited, not assembled. Every transfer was waiting.", name: "A. Ofori", meta: "Stone & Sea · Feb 2026" },
  { quote: "Corporate retreat for 18 across two cities — invoicing, transfers, dietary needs. Flawless.", name: "K. Adoma — Ops Lead", meta: "Cape & Coast · Jan 2026" },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 3800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#0B1E3A] p-6 md:p-10">
      <div className="flex items-center gap-2 text-[#B8912F]">
        <span className="flex gap-1">{Array.from({ length: 5 }).map((_,i)=>(<Icon key={i} name="star" size={14} className="text-[#B8912F] fill-[#B8912F] w-3.5 h-3.5" />))}</span>
        <span className="text-xs tracking-widest">TRUSTED BY TRAVELLERS</span>
      </div>
      <div className="relative mt-6 min-h-[140px]">
        {testimonials.map((tm, i) => (
          <div key={i} className={`absolute inset-0 transition-all duration-700 ${i===idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}>
            <p className="font-serif text-lg leading-7 text-white md:text-xl">“{tm.quote}”</p>
            <p className="mt-4 text-sm font-medium text-white">{tm.name}</p>
            <p className="text-xs tracking-wide text-white/60">{tm.meta}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex gap-1.5">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} aria-label={`Go to testimonial ${i+1}`} className={`h-1.5 rounded-full transition-all ${i===idx ? "w-8 bg-[#B8912F]" : "w-3 bg-white/25"}`} />
        ))}
      </div>
      <p className="mt-6 text-xs text-white/45">Placeholder testimonials — awaiting client assets (§12).</p>
    </div>
  );
}
