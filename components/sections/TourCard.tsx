import Link from "next/link";
import Icon from "@/components/ui/Icon";
import type { Tour } from "@/lib/data/tours";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link href={`/tours/${tour.slug}`} className="card-hover group flex flex-col overflow-hidden rounded-[20px] border border-[#E8E6E0] bg-white shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F6F3EC]">
        <img src={tour.image} alt={tour.name} className="h-full w-full object-cover" loading="lazy" />
        <span className="absolute left-3 top-3 rounded-full bg-[#0B1E3A]/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-white shadow backdrop-blur">{tour.destination}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-[16px] font-semibold leading-tight text-[#0B1E3A] line-clamp-1">{tour.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-6 text-[#6B7280]">{tour.teaser}</p>
        <div className="mt-3 flex items-center gap-2 text-xs text-[#8A94A6]">
          <span className="inline-flex items-center gap-1.5"><Icon name="clock" size={12} /> {tour.duration}</span>
          <span className="h-1 w-1 rounded-full bg-[#E8E6E0]" />
          <span className="truncate">{tour.dates}</span>
        </div>
        <div className="mt-4 flex items-end justify-between border-t border-[#E8E6E0]/60 pt-4">
          <div>
            <span className="block text-[10px] font-semibold tracking-[0.16em] text-[#8A94A6]">FROM</span>
            <span className="mt-0.5 block text-[15px] font-semibold tracking-tight text-[#0B1E3A]">{tour.price}</span>
          </div>
          <span className="card-arrow inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-[#B8912F]">View Package <Icon name="arrow-right" size={12} /></span>
        </div>
      </div>
    </Link>
  );
}
