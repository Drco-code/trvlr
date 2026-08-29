"use client";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function HeroSearch() {
  return (
    <div className="rounded-[20px] border border-white/15 bg-white p-2 shadow-[0_12px_40px_rgba(11,30,58,0.18)] md:rounded-full md:p-1.5">
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-1.5 md:flex-row md:items-center md:gap-0">
        <label className="flex flex-1 items-center gap-3 rounded-full px-4 py-3 hover:bg-[#F6F3EC] transition-colors md:px-6">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B1E3A]/5 text-[#0B1E3A]"><Icon name="pin" size={16} /></span>
          <span className="min-w-0 flex-1 text-left">
            <span className="block text-xs font-semibold tracking-wide text-[#0B1E3A]">Destination</span>
            <select defaultValue="Dubai, UAE" className="w-full bg-transparent text-sm text-[#6B7280] outline-none">
              <option>Dubai, UAE</option>
              <option>Cape Town, SA</option>
              <option>Zanzibar</option>
              <option>Maldives</option>
              <option>Paris</option>
            </select>
          </span>
        </label>
        <span className="hidden h-10 w-px shrink-0 bg-[#E8E6E0] md:block" />
        <label className="flex flex-1 items-center gap-3 rounded-full px-4 py-3 hover:bg-[#F6F3EC] transition-colors md:px-6">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B1E3A]/5 text-[#0B1E3A]"><Icon name="clock" size={16} /></span>
          <span className="min-w-0 flex-1 text-left">
            <span className="block text-xs font-semibold tracking-wide text-[#0B1E3A]">Date</span>
            <input defaultValue="12 Apr 2026" className="w-full bg-transparent text-sm text-[#6B7280] outline-none" />
          </span>
        </label>
        <span className="hidden h-10 w-px shrink-0 bg-[#E8E6E0] md:block" />
        <label className="flex flex-1 items-center gap-3 rounded-full px-4 py-3 hover:bg-[#F6F3EC] transition-colors md:px-6">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B1E3A]/5 text-[#0B1E3A]"><Icon name="users" size={16} /></span>
          <span className="min-w-0 flex-1 text-left">
            <span className="block text-xs font-semibold tracking-wide text-[#0B1E3A]">Guests</span>
            <select defaultValue="2 People" className="w-full bg-transparent text-sm text-[#6B7280] outline-none">
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4+ People</option>
            </select>
          </span>
        </label>
        <Link href="/tours" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#0B1E3A] px-8 py-3.5 text-sm font-semibold tracking-wide text-white hover:bg-[#13294B] transition-colors md:py-3">
          Search <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#B8912F] text-[#0B1E3A]"><Icon name="search" size={12} /></span>
        </Link>
      </form>
    </div>
  );
}
