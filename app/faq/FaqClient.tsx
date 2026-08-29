"use client";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Link from "next/link";

const groups = [
  {
    title: "Booking",
    items: [
      { q: "How far ahead should I book?", a: "International tours: 6–8 weeks. Peak periods (Dec–Jan) earlier. We hold provisional slots where airlines allow." },
      { q: "Can you customise a package?", a: "Yes — every package extends to bespoke via Customised Planning. Tell us budget, pace and must-dos." },
    ],
  },
  {
    title: "Visas & Documents",
    items: [
      { q: "Do you handle visa applications?", a: "We review documents, file, and coordinate embassy appointments. Approval remains with the mission." },
      { q: "Passport validity required?", a: "Six months beyond return date is standard. We check before ticketing." },
    ],
  },
  {
    title: "Payments",
    items: [
      { q: "Which payment methods in this prototype?", a: "Prototype shows UI only — no gateway. Production (brief §6) will support Mobile Money, bank transfer, cards." },
      { q: "Deposits?", a: "Typically 50% to confirm, balance by deadline shown on each Tour Detail." },
    ],
  },
  {
    title: "Cancellations & Refunds",
    items: [
      { q: "What is the refund window?", a: "Varies by package — see Cancellation & Refund on each Tour Detail and the full policy page." },
      { q: "Can I transfer my booking?", a: "Name changes allowed where airline/hotel permits, usually for a fee. Ask your handler." },
    ],
  },
];

export default function FaqClient() {
  const [open, setOpen] = useState<string | null>("Booking-0");
  return (
    <div className="mx-auto max-w-[720px] px-4 py-10 md:px-6">
      {groups.map((g) => (
        <div key={g.title} className="mt-8">
          <h2 className="text-xs font-semibold tracking-[0.18em] text-[#B8912F]">{g.title.toUpperCase()}</h2>
          <div className="mt-3 space-y-2">
            {g.items.map((it, idx) => {
              const id = `${g.title}-${idx}`;
              const isOpen = open === id;
              return (
                <div key={id} className="rounded-xl border border-[#E8E6E0] bg-white">
                  <button onClick={() => setOpen(isOpen ? null : id)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                    <span className="text-sm font-semibold text-[#0B1E3A]">{it.q}</span>
                    <span className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}><Icon name="chevron-down" size={16} /></span>
                  </button>
                  <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden"><p className="px-5 pb-4 text-sm leading-6 text-[#6B7280]">{it.a}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <div className="mt-10 rounded-2xl bg-[#0B1E3A] p-6 text-center text-white">
        <h3 className="font-semibold">Still have questions?</h3>
        <p className="mt-1 text-sm text-white/70">Talk to a person. We answer.</p>
        <Link href="/contact" className="btn-gold mt-4 inline-flex rounded-full px-6 py-2.5 text-sm font-semibold">Contact Us</Link>
      </div>
    </div>
  );
}
