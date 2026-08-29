export default function PageHeader({ title, subtitle, image }: { title: string; subtitle?: string; image?: string }) {
  return (
    <div className="relative overflow-hidden bg-[#0B1E3A]">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A] via-[#0B1E3A]/50 to-transparent" />
        </>
      )}
      <div className="relative mx-auto max-w-[1280px] px-4 py-14 md:px-6 md:py-16 lg:px-8">
        <h1 className="font-serif text-[30px] font-semibold tracking-tight text-white md:text-[40px]">{title}</h1>
        {subtitle && <p className="mt-3 max-w-[640px] text-sm leading-6 text-white/75 md:text-[15px]">{subtitle}</p>}
      </div>
    </div>
  );
}
