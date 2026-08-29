import Link from "next/link";
import type { Destination } from "@/lib/data/destinations";

export default function DestinationCard({ d }: { d: Destination }) {
  return (
    <Link href={`/destinations/${d.slug}`} className="card-hover group relative overflow-hidden rounded-[20px] shadow-card">
      <div className="aspect-[4/5] overflow-hidden bg-[#F6F3EC]">
        <img src={d.image} alt={d.name} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A]/90 via-[#0B1E3A]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="inline-flex rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold tracking-[0.12em] text-white backdrop-blur">{d.country.toUpperCase()}</p>
        <h3 className="mt-2 font-serif text-[17px] font-semibold text-white">{d.name}</h3>
        <p className="mt-1 text-sm text-white/75 line-clamp-2">{d.tagline}</p>
        <span className="card-arrow mt-2 inline-flex items-center gap-1 text-xs font-medium text-white/85">Explore <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#0B1E3A]">›</span></span>
      </div>
    </Link>
  );
}
