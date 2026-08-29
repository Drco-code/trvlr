import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { posts } from "@/lib/data/journal";
import { Reveal } from "@/components/ui/Reveal";
import NewsletterForm from "@/components/sections/NewsletterForm";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Travel Journal" };

export default function JournalPage() {
  const featured = posts[0];
  const rest = posts.slice(1);
  return (
    <div>
      <PageHeader title="GG Travel Journal" subtitle="Stories, guides and destination notes — SEO-friendly, human-written, browsable by category." />
      <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-6 lg:px-8">
        <Reveal>
          <Link href={`/journal/${featured.slug}`} className="card-hover grid overflow-hidden rounded-2xl border border-[#E8E6E0] bg-white md:grid-cols-[1.2fr_0.8fr]">
            <img src={featured.image} alt={featured.title} className="h-[300px] w-full object-cover md:h-full" />
            <div className="p-6">
              <p className="text-xs font-semibold tracking-widest text-[#B8912F]">{featured.category.toUpperCase()} · {featured.date}</p>
              <h2 className="mt-2 font-serif text-xl font-semibold text-[#0B1E3A]">{featured.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">{featured.excerpt}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-[#B8912F]">Read Article →</span>
              <p className="mt-2 text-xs text-[#6B7280]">By {featured.author}</p>
            </div>
          </Link>
        </Reveal>

        <Reveal stagger className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {rest.map((p) => (
            <Link key={p.slug} href={`/journal/${p.slug}`} className="card-hover overflow-hidden rounded-xl border border-[#E8E6E0] bg-white">
              <img src={p.image} alt={p.title} className="aspect-[16/10] w-full object-cover" />
              <div className="p-4">
                <p className="text-xs font-semibold tracking-widest text-[#B8912F]">{p.category.toUpperCase()} · {p.date}</p>
                <h3 className="mt-1.5 font-serif text-[15px] font-semibold text-[#0B1E3A] line-clamp-2">{p.title}</h3>
                <p className="mt-1 text-sm text-[#6B7280] line-clamp-2">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </Reveal>

        <div className="mt-10 rounded-2xl bg-[#0B1E3A] p-6 md:p-8">
          <h3 className="font-serif text-lg font-semibold text-white">Get the next story</h3>
          <p className="mt-1 text-sm text-white/70">One email, when we publish. No spam.</p>
          <div className="mt-4 max-w-sm"><NewsletterForm /></div>
        </div>
      </div>
    </div>
  );
}
