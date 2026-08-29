import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/ui/Icon";
import { destinations } from "@/lib/data/destinations";
import { tours } from "@/lib/data/tours";

export function generateStaticParams() { return destinations.map((d) => ({ slug: d.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = destinations.find((x) => x.slug === slug);
  return { title: d ? d.name : "Destination" };
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = destinations.find((x) => x.slug === slug);
  if (!d) return notFound();
  const related = tours.filter((t) => d.relatedTourSlugs.includes(t.slug));

  return (
    <div>
      <div className="relative h-[44vh] min-h-[340px] overflow-hidden bg-[#0B1E3A]">
        <img src={d.image} alt={d.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A] via-[#0B1E3A]/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1280px] px-4 py-8 md:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#B8912F]">{d.country.toUpperCase()}</p>
          <h1 className="mt-2 font-serif text-3xl font-semibold text-white md:text-4xl">{d.name}</h1>
          <p className="mt-2 max-w-[600px] text-sm text-white/80">{d.tagline} — {d.description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            <div className="rounded-xl border border-[#E8E6E0] bg-white p-6">
              <h2 className="text-sm font-semibold tracking-widest text-[#0B1E3A]">HIGHLIGHTS</h2>
              <ul className="mt-3 space-y-2">
                {d.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-[#6B7280]"><Icon name="check" size={14} className="mt-0.5 text-[#B8912F] w-3.5 h-3.5" /> {h}</li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg bg-[#F6F3EC] p-4">
                <p className="text-xs font-semibold tracking-widest text-[#0B1E3A]">BEST TIME TO VISIT</p>
                <p className="mt-1 text-sm text-[#6B7280]">{d.bestTime}</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-[#F6F3EC]">
              <img src={d.image} alt={d.name} className="h-[360px] w-full object-cover" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest text-[#0B1E3A]">RELATED TOURS</h3>
            <div className="mt-4 space-y-3">
              {related.length ? related.map((t) => (
                <Link key={t.slug} href={`/tours/${t.slug}`} className="flex gap-3 rounded-xl border border-[#E8E6E0] bg-white p-3">
                  <img src={t.image} alt={t.name} className="h-16 w-20 shrink-0 rounded-lg object-cover" />
                  <div><p className="text-sm font-semibold text-[#0B1E3A] leading-tight">{t.name}</p><p className="text-xs text-[#6B7280]">{t.price} · {t.duration}</p></div>
                </Link>
              )) : <p className="text-sm text-[#6B7280]">More tours for {d.name} coming soon. <Link href="/tours" className="text-[#B8912F]">Browse all</Link></p>}
            </div>
            <Link href="/quote" className="btn-gold mt-6 flex w-full justify-center rounded-full py-3 text-sm font-semibold">Enquire for {d.name}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
