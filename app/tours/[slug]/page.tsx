import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/ui/Icon";
import { tours } from "@/lib/data/tours";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = tours.find((x) => x.slug === slug);
  return { title: t ? t.name : "Tour" };
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) return notFound();

  const related = tours.filter((x) => x.destinationSlug === tour.destinationSlug && x.slug !== tour.slug).slice(0, 3);

  return (
    <div>
      <div className="relative h-[42vh] min-h-[320px] overflow-hidden bg-[#0B1E3A]">
        <img src={tour.image} alt={tour.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A] via-[#0B1E3A]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1280px] px-4 py-8 md:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#B8912F]">{tour.destination.toUpperCase()} · {tour.duration}</p>
          <h1 className="mt-2 max-w-[720px] font-serif text-2xl font-semibold text-white md:text-3xl">{tour.name}</h1>
          <p className="mt-2 text-sm text-white/75">{tour.dates} · Booking deadline {tour.deadline} · {tour.price}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-8 md:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
        <div className="space-y-6">
          <Reveal className="rounded-xl border border-[#E8E6E0] bg-white p-6">
            <h2 className="text-sm font-semibold tracking-widest text-[#0B1E3A]">ITINERARY</h2>
            <div className="mt-4 space-y-4">
              {tour.itinerary.map((d) => (
                <div key={d.day} className="flex gap-4">
                  <span className="shrink-0 text-xs font-semibold tracking-wide text-[#B8912F]">{d.day}</span>
                  <div><p className="text-sm font-semibold text-[#0B1E3A]">{d.title}</p><p className="text-sm leading-6 text-[#6B7280]">{d.details}</p></div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { k: "Inclusions", v: tour.inclusions },
              { k: "Exclusions", v: tour.exclusions },
              { k: "Requirements", v: tour.requirements },
              { k: "Accommodation", v: [tour.accommodation] },
            ].map((sec) => (
              <div key={sec.k} className="rounded-xl border border-[#E8E6E0] bg-[#F6F3EC]/60 p-5">
                <h3 className="text-xs font-semibold tracking-widest text-[#0B1E3A]">{sec.k.toUpperCase()}</h3>
                <ul className="mt-3 space-y-1.5">
                  {sec.v.map((x) => (
                    <li key={x} className="flex gap-2 text-sm leading-5 text-[#6B7280]"><Icon name="check" size={14} className="mt-0.5 shrink-0 text-[#B8912F] w-3.5 h-3.5" /> {x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-[#0B1E3A] p-6 text-white">
            <h3 className="text-sm font-semibold tracking-widest">CANCELLATION &amp; REFUND</h3>
            <p className="mt-2 text-sm leading-6 text-white/70">{tour.cancellation}</p>
            <Link href="/refund" className="mt-3 inline-flex text-xs font-semibold tracking-wide text-[#B8912F]">Full policy <Icon name="arrow-right" size={12} /></Link>
          </div>

          {related.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-[#0B1E3A]">RELATED PACKAGES</h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link key={r.slug} href={`/tours/${r.slug}`} className="card-hover overflow-hidden rounded-xl border border-[#E8E6E0] bg-white">
                    <img src={r.image} alt={r.name} className="aspect-[16/10] w-full object-cover" />
                    <div className="p-3"><p className="text-sm font-semibold text-[#0B1E3A] line-clamp-2">{r.name}</p><p className="text-xs text-[#6B7280]">{r.price}</p></div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="lg:sticky lg:top-[84px] h-fit">
          <div className="rounded-2xl border border-[#E8E6E0] bg-white p-6 shadow-[0_8px_32px_rgba(11,30,58,0.08)]">
            <p className="text-xs tracking-widest text-[#6B7280]">STARTING FROM</p>
            <p className="font-serif text-2xl font-semibold text-[#0B1E3A]">{tour.price}</p>
            <p className="text-xs text-[#6B7280]">{tour.duration} · {tour.dates}</p>
            <Link href="/quote" className="btn-gold mt-5 flex w-full justify-center rounded-full py-3 text-sm font-semibold">Book This Package</Link>
            <p className="mt-3 text-center text-xs text-[#6B7280]">Booking deadline: {tour.deadline}</p>
            <a href="https://wa.me/233000000000" target="_blank" rel="noopener noreferrer" className="mt-3 flex w-full justify-center rounded-full border border-[#E8E6E0] py-2.5 text-sm font-medium text-[#0B1E3A]">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}
