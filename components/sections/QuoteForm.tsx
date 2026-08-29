"use client";
import { useState } from "react";
import Icon from "@/components/ui/Icon";

type Props = { variant?: "default" | "corporate" };

export default function QuoteForm({ variant = "default" }: Props) {
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const vals: Record<string, string> = {};
    fd.forEach((v, k) => (vals[k] = String(v).trim()));
    const errs: Record<string, string> = {};
    const required = variant === "corporate"
      ? ["fullName", "email", "phone", "company", "destination", "dates", "travellers"]
      : ["fullName", "email", "phone", "destination", "dates", "travellers"];
    required.forEach((k) => { if (!vals[k]) errs[k] = "Required"; });
    if (vals.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals.email)) errs.email = "Invalid email";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setDone(true);
    setTimeout(() => { setDone(false); (e.target as HTMLFormElement).reset(); }, 4000);
  };

  if (done) {
    return (
      <div className="animate-fade-up rounded-xl border border-[#B8912F]/30 bg-[#F6F3EC] p-8 text-center">
        <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#B8912F] text-white"><Icon name="check" size={18} /></span>
        <h3 className="mt-3 font-serif text-lg font-semibold text-[#0B1E3A]">Request received</h3>
        <p className="mt-1 text-sm text-[#6B7280]">UI-only confirmation — no data transmitted in this prototype phase (§1.2, §10).</p>
        <button onClick={() => setDone(false)} className="mt-4 text-sm font-semibold text-[#B8912F]">Send another</button>
      </div>
    );
  }

  const field = (name: string, label: string, type: string = "text", placeholder?: string) => (
    <label className="block">
      <span className="text-xs font-semibold tracking-wide text-[#0B1E3A]">{label}</span>
      <input name={name} type={type} placeholder={placeholder} className={`mt-1.5 w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none placeholder:text-[#6B7280]/50 focus:border-[#B8912F] ${errors[name] ? "border-red-300" : "border-[#E8E6E0]"}`} />
      {errors[name] && <span className="text-xs text-red-500">{errors[name]}</span>}
    </label>
  );

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        {field("fullName", "Full name", "text", "Ama Mensah")}
        {field("phone", "Phone / WhatsApp", "tel", "+233 XX XXX XXXX")}
      </div>
      {field("email", "Email", "email", "you@example.com")}
      {variant === "corporate" && field("company", "Company / Organisation", "text", "GG Travels Ltd")}
      <div className="grid gap-4 md:grid-cols-2">
        {field("destination", "Destination", "text", "Dubai, Zanzibar…")}
        {field("dates", "Travel dates", "text", "12–16 Dec 2026")}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold tracking-wide text-[#0B1E3A]">Travellers</span>
          <select name="travellers" className={`mt-1.5 w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none focus:border-[#B8912F] ${errors.travellers ? "border-red-300" : "border-[#E8E6E0]"}`}>
            <option value="">Select</option><option>1</option><option>2</option><option>3–5</option><option>6–10</option><option>11+</option>
          </select>
          {errors.travellers && <span className="text-xs text-red-500">{errors.travellers}</span>}
        </label>
        <label className="block">
          <span className="text-xs font-semibold tracking-wide text-[#0B1E3A]">Service</span>
          <select name="service" className="mt-1.5 w-full rounded-lg border border-[#E8E6E0] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#B8912F]">
            <option>Tour Packages</option><option>Flight Booking</option><option>Visa Assistance</option><option>Hotel Reservations</option><option>Corporate Travel</option><option>Luxury &amp; VIP</option><option>Customised Planning</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-xs font-semibold tracking-wide text-[#0B1E3A]">Budget (optional)</span>
        <select name="budget" className="mt-1.5 w-full rounded-lg border border-[#E8E6E0] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#B8912F]">
          <option value="">Select</option><option>GHS 5k – 10k</option><option>GHS 10k – 25k</option><option>GHS 25k+</option>
        </select>
      </label>
      <label className="block">
        <span className="text-xs font-semibold tracking-wide text-[#0B1E3A]">Special requirements</span>
        <textarea name="requirements" rows={3} placeholder="Dietary, accessibility, rooming…" className="mt-1.5 w-full rounded-lg border border-[#E8E6E0] bg-white px-3 py-2.5 text-sm outline-none placeholder:text-[#6B7280]/50 focus:border-[#B8912F]" />
      </label>
      <button type="submit" className="btn-gold flex w-full justify-center rounded-full py-3 text-sm font-semibold">Submit Request</button>
      <p className="text-center text-xs text-[#6B7280]">UI-only — no email or database in this phase.</p>
    </form>
  );
}
