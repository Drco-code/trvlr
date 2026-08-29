export default function SectionHeader({ eyebrow, title, subtitle, centered = false, light = false }: { eyebrow?: string; title: string; subtitle?: string; centered?: boolean; light?: boolean }) {
  return (
    <div className={`${centered ? "text-center mx-auto max-w-[640px]" : "max-w-[640px]"} ${light ? "text-white" : ""}`}>
      {eyebrow && <p className={`text-xs font-semibold tracking-[0.18em] ${light ? "text-[#B8912F]" : "text-[#B8912F]"}`}>{eyebrow}</p>}
      <h2 className={`mt-2 font-serif text-[28px] font-semibold leading-tight tracking-tight md:text-[34px] ${light ? "text-white" : "text-[#0B1E3A]"}`}>{title}</h2>
      {subtitle && <p className={`mt-3 text-[15px] leading-6 ${light ? "text-white/75" : "text-[#6B7280]"}`}>{subtitle}</p>}
      <div className={`mt-4 h-px w-12 bg-[#B8912F] ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
