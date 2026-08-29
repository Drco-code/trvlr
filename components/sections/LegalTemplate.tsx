export default function LegalTemplate({ title, updated, sections }: { title: string; updated: string; sections: { id: string; title: string; body: string }[] }) {
  return (
    <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-10 md:grid-cols-[200px_1fr] md:px-6 lg:px-8">
      <nav className="hidden md:block">
        <div className="sticky top-[84px] rounded-xl border border-[#E8E6E0] bg-white p-4">
          <p className="text-xs font-semibold tracking-widest text-[#6B7280]">ON THIS PAGE</p>
          <ul className="mt-3 space-y-2">
            {sections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="text-sm text-[#0B1E3A] hover:text-[#B8912F]">{s.title}</a></li>
            ))}
          </ul>
        </div>
      </nav>
      <article className="rounded-2xl border border-[#E8E6E0] bg-white p-6 md:p-8">
        <h1 className="font-serif text-2xl font-semibold text-[#0B1E3A]">{title}</h1>
        <p className="mt-2 text-xs text-[#6B7280]">{updated}</p>
        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-sm font-semibold tracking-widest text-[#0B1E3A]">{s.title.toUpperCase()}</h2>
              <p className="mt-2 text-sm leading-7 text-[#6B7280]">{s.body}</p>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
