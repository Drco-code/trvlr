import Link from "next/link";
import Icon from "@/components/ui/Icon";
import NewsletterForm from "@/components/sections/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-[#0B1E3A] text-white">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#B8912F] font-serif text-sm font-bold tracking-widest text-[#0B1E3A]">GG</span>
            <span className="font-serif text-[14px] font-semibold tracking-[0.14em]">GG TRAVELS &amp; TOURS</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">Seamless journeys. Exceptional experiences. Travel made simple — from Accra to the world.</p>
          <div className="mt-5 flex gap-2">
            {[
              { n: "instagram", href: "#" },
              { n: "facebook", href: "#" },
              { n: "mail", href: "#" },
            ].map((s) => (
              <a key={s.n} href={s.href} aria-label={s.n} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-[#B8912F] hover:text-[#B8912F]">
                <Icon name={s.n} size={16} />
              </a>
            ))}
            <span className="flex h-9 items-center rounded-full border border-white/15 px-3 text-xs tracking-wide text-white/60">TikTok · X</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest text-white/90">SERVICES</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            {["Flight Booking","Visa Assistance","Hotel Reservations","Tour Packages","Luxury & VIP","Corporate Travel"].map((t) => (
              <li key={t}><Link href="/services" className="hover:text-[#B8912F]">{t}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest text-white/90">DESTINATIONS</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            {["Dubai","Cape Town","Zanzibar","Mauritius","Maldives","Paris","London","Singapore"].map((t) => (
              <li key={t}><Link href="/destinations" className="hover:text-[#B8912F]">{t}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest text-white/90">CONTACT</h4>
          <div className="mt-4 flex items-start gap-2 text-sm text-white/65">
            <Icon name="pin" size={16} className="mt-0.5 shrink-0 text-[#B8912F] w-4 h-4" />
            <span>Office address — placeholder (pending §14)</span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-white/65"><Icon name="phone" size={14} className="text-[#B8912F] w-4 h-4" /> +233 XX XXX XXXX</div>
          <div className="mt-2 flex items-center gap-2 text-sm text-white/65"><Icon name="mail" size={14} className="text-[#B8912F] w-4 h-4" /> hello@gg-travels.example.com</div>
          <div className="mt-5"><NewsletterForm /></div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-6 text-xs tracking-wide text-white/50 md:flex-row md:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} GG Travels &amp; Tours. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-white/80">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="hover:text-white/80">Privacy Policy</Link>
            <Link href="/refund" className="hover:text-white/80">Cancellation &amp; Refund</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
