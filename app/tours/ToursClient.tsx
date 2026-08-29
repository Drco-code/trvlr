"use client";
import { useState, useMemo } from "react";
import Icon from "@/components/ui/Icon";
import TourCard from "@/components/sections/TourCard";
import { tours } from "@/lib/data/tours";
import { Reveal } from "@/components/ui/Reveal";

export default function ToursClient() {
  const [q, setQ] = useState("");
  const [dest, setDest] = useState("All");
  const dests = useMemo(() => ["All", ...Array.from(new Set(tours.map((t) => t.destination)))], []);
  const filtered = tours.filter((t) => {
    const matchQ = !q || t.name.toLowerCase().includes(q.toLowerCase()) || t.destination.toLowerCase().includes(q.toLowerCase());
    const matchD = dest === "All" || t.destination === dest;
    return matchQ && matchD;
  });

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-6 lg:px-8">
      <div className="flex flex-col gap-3 rounded-xl border border-[#E8E6E0] bg-white p-4 md:flex-row md:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-full border border-[#E8E6E0] bg-[#F6F3EC]/60 px-4 py-2.5">
          <Icon name="search" size={16} className="text-[#6B7280] w-4 h-4" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search tours, destinations…" className="w-full bg-transparent text-sm outline-none placeholder:text-[#6B7280]/60" />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {dests.map((d) => (
            <button key={d} onClick={() => setDest(d)} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium ${dest === d ? "border-[#0B1E3A] bg-[#0B1E3A] text-white" : "border-[#E8E6E0] bg-white text-[#6B7280]"}`}>{d}</button>
          ))}
        </div>
      </div>
      <Reveal stagger className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => <TourCard key={t.slug} tour={t} />)}
      </Reveal>
      {filtered.length === 0 && <p className="py-12 text-center text-sm text-[#6B7280]">No tours match your filter.</p>}
    </div>
  );
}
