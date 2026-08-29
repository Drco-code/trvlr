import PageHeader from "@/components/ui/PageHeader";
import Icon from "@/components/ui/Icon";
import ContactForm from "./ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Contact" subtitle="Every channel, obvious and reachable. Map and form are functional UI (no data sent in this phase)." />
      <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E8E6E0] bg-white p-6">
          <h2 className="text-sm font-semibold tracking-widest text-[#0B1E3A]">SEND A MESSAGE</h2>
          <div className="mt-6"><ContactForm /></div>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl bg-[#F6F3EC] p-6">
            <h3 className="text-sm font-semibold text-[#0B1E3A]">Direct</h3>
            <div className="mt-3 space-y-2 text-sm text-[#6B7280]">
              <div className="flex gap-2"><Icon name="phone" size={14} className="mt-0.5 text-[#B8912F] w-4 h-4" /> +233 XX XXX XXXX</div>
              <div className="flex gap-2"><Icon name="mail" size={14} className="mt-0.5 text-[#B8912F] w-4 h-4" /> hello@gg-travels.example.com</div>
              <div className="flex gap-2"><Icon name="clock" size={14} className="mt-0.5 text-[#B8912F] w-4 h-4" /> Mon–Sat 08:00–18:00 GMT</div>
              <div className="flex gap-2"><Icon name="pin" size={14} className="mt-0.5 text-[#B8912F] w-4 h-4" /> Office address — placeholder (pending §14)</div>
            </div>
            <a href="https://wa.me/233000000000" target="_blank" rel="noopener noreferrer" className="btn-gold mt-4 inline-flex rounded-full px-5 py-2 text-sm font-semibold">Chat on WhatsApp</a>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#E8E6E0]">
            <div className="flex h-[240px] items-center justify-center bg-[#E8E6E0] text-sm text-[#6B7280]">Google Map — placeholder (pending address)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
