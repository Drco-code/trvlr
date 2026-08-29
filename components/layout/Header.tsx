"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/Icon";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/tours", label: "Tours" },
  { href: "/destinations", label: "Destinations" },
  { href: "/luxury", label: "Luxury Travel" },
  { href: "/corporate", label: "Corporate" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
          solid ? "bg-[#0B1E3A]/85 backdrop-blur-xl border-white/10 shadow-[0_4px_24px_rgba(11,30,58,0.12)] supports-[backdrop-filter]:bg-[#0B1E3A]/70" : "bg-transparent border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-4 md:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#B8912F] font-serif text-sm font-bold tracking-widest text-[#0B1E3A]">GG</span>
            <span className={`hidden sm:block font-serif text-[14px] font-semibold tracking-[0.14em] ${solid ? "text-white" : "text-white"}`}>GG TRAVELS &amp; TOURS</span>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {nav.map((n) => {
              const active = pathname === n.href || (n.href !== "/" && pathname.startsWith(n.href));
              return (
                <Link key={n.href} href={n.href} className={`nav-link text-[13px] font-medium tracking-wide transition-colors ${active ? "is-active text-white" : solid ? "text-white/85 hover:text-white" : "text-white/90 hover:text-white"}`}>
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/quote" className="btn-gold hidden rounded-full px-5 py-2.5 text-[13px] font-semibold tracking-wide md:inline-flex">BOOK NOW</Link>
            <button aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className={`xl:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border ${solid ? "border-white/20 text-white" : "border-white/30 text-white"}`}>
              <Icon name={open ? "x" : "menu"} size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-30 bg-[#0B1E3A] transition-all duration-300 xl:hidden ${open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}`}>
        <div className="flex h-full flex-col px-6 pb-8 pt-[84px]">
          <nav className="flex flex-col">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className={`border-b border-white/10 py-4 text-[15px] font-medium tracking-wide ${pathname === n.href ? "text-[#B8912F]" : "text-white/90"}`}>{n.label}</Link>
            ))}
          </nav>
          <div className="mt-6">
            <Link href="/quote" onClick={() => setOpen(false)} className="btn-gold flex w-full justify-center rounded-full py-3.5 text-sm font-semibold tracking-wide">BOOK NOW</Link>
            <Link href="/faq" onClick={() => setOpen(false)} className="mt-3 flex w-full justify-center rounded-full border border-white/20 py-3 text-sm font-medium text-white/90">FAQ &amp; Support</Link>
          </div>
          <p className="mt-auto text-center text-xs tracking-widest text-white/40">YOUR JOURNEY. OUR EXPERTISE.</p>
        </div>
      </div>

      {/* spacer so header not overlap when solid — only when not home hero */}
      {!isHome && <div className="h-[68px]" />}
    </>
  );
}
