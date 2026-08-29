import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/ui/Icon";
import { posts } from "@/lib/data/journal";
import { tours } from "@/lib/data/tours";

export function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return { title: p ? p.title : "Article" };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();
  const relatedTours = post.relatedTourSlugs ? tours.filter((t) => post.relatedTourSlugs!.includes(t.slug)) : [];
  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-[820px] px-4 py-10 md:px-6">
      <p className="text-xs font-semibold tracking-widest text-[#B8912F]">{post.category.toUpperCase()} · {post.date} · By {post.author}</p>
      <h1 className="mt-2 font-serif text-[26px] font-semibold leading-tight text-[#0B1E3A] md:text-[32px]">{post.title}</h1>
      <p className="mt-3 text-sm leading-6 text-[#6B7280]">{post.excerpt}</p>
      <img src={post.image} alt={post.title} className="mt-6 aspect-[16/9] w-full rounded-xl object-cover" />
      <article className="prose prose-sm mt-6 max-w-none">
        {post.content.map((para, i) => (
          <p key={i} className="text-sm leading-7 text-[#2B2B2B]">{para}</p>
        ))}
        <p className="text-sm leading-7 text-[#6B7280]">Placeholder body — full copy will be supplied by the client. Layout demonstrates title, hero image, author/date, formatted body, share and related sections per §5.8.</p>
      </article>

      <div className="mt-8 flex gap-2">
        <span className="text-xs font-semibold tracking-wide text-[#6B7280]">Share:</span>
        <span className="text-xs text-[#B8912F]">Copy link · WhatsApp · Facebook</span>
      </div>

      {relatedTours.length > 0 && (
        <div className="mt-10 rounded-xl border border-[#E8E6E0] bg-[#F6F3EC]/60 p-5">
          <h3 className="text-sm font-semibold text-[#0B1E3A]">Explore related tours</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {relatedTours.map((t) => (
              <Link key={t.slug} href={`/tours/${t.slug}`} className="flex gap-3 rounded-lg bg-white p-3">
                <img src={t.image} alt={t.name} className="h-14 w-18 rounded object-cover" />
                <div><p className="text-sm font-semibold text-[#0B1E3A]">{t.name}</p><p className="text-xs text-[#6B7280]">{t.price}</p></div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10">
        <h3 className="text-sm font-semibold tracking-widest text-[#0B1E3A]">RELATED STORIES</h3>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {relatedPosts.map((p) => (
            <Link key={p.slug} href={`/journal/${p.slug}`} className="card-hover overflow-hidden rounded-xl border border-[#E8E6E0] bg-white">
              <img src={p.image} alt={p.title} className="aspect-[16/10] w-full object-cover" />
              <div className="p-3"><p className="text-sm font-semibold text-[#0B1E3A] line-clamp-2">{p.title}</p></div>
            </Link>
          ))}
        </div>
      </div>

      <Link href="/journal" className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-[#0B1E3A]"><Icon name="arrow-right" size={14} className="rotate-180" /> Back to Journal</Link>
    </div>
  );
}
