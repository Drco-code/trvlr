"use client";
import { useState } from "react";
import Icon from "@/components/ui/Icon";

export default function ContactForm() {
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string,string>>({});
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v: Record<string,string> = {}; fd.forEach((val,k)=> v[k]=String(val).trim());
    const errs: Record<string,string>={};
    ["name","email","message"].forEach(k=>{ if(!v[k]) errs[k]="Required"; });
    if(v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errs.email="Invalid email";
    if(Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({}); setDone(true); setTimeout(()=>{ setDone(false); (e.target as HTMLFormElement).reset(); }, 3500);
  };
  if(done) return (
    <div className="rounded-xl bg-[#F6F3EC] p-8 text-center">
      <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#B8912F] text-white"><Icon name="check" size={18} /></span>
      <p className="mt-3 font-semibold text-[#0B1E3A]">Message received</p>
      <p className="text-sm text-[#6B7280]">UI-only — no email sent in this phase.</p>
    </div>
  );
  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <label className="block"><span className="text-xs font-semibold text-[#0B1E3A]">Full name</span><input name="name" placeholder="Ama Mensah" className={`mt-1.5 w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:border-[#B8912F] ${errors.name?"border-red-300":"border-[#E8E6E0]"}`} /></label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block"><span className="text-xs font-semibold text-[#0B1E3A]">Email</span><input name="email" placeholder="you@example.com" className={`mt-1.5 w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:border-[#B8912F] ${errors.email?"border-red-300":"border-[#E8E6E0]"}`} /></label>
        <label className="block"><span className="text-xs font-semibold text-[#0B1E3A]">Phone</span><input name="phone" placeholder="+233 …" className="mt-1.5 w-full rounded-lg border border-[#E8E6E0] px-3 py-2.5 text-sm outline-none focus:border-[#B8912F]" /></label>
      </div>
      <label className="block"><span className="text-xs font-semibold text-[#0B1E3A]">Message</span><textarea name="message" rows={4} placeholder="How can we help?" className={`mt-1.5 w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:border-[#B8912F] ${errors.message?"border-red-300":"border-[#E8E6E0]"}`} /></label>
      <button type="submit" className="btn-gold w-full rounded-full py-3 text-sm font-semibold">Send Message</button>
    </form>
  );
}
