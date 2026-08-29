"use client";
import { useState } from "react";
import Icon from "@/components/ui/Icon";

export default function NewsletterForm({ dark = true }: { dark?: boolean }) {
  const [value, setValue] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { setError("Enter a valid email."); return; }
    setError("");
    setDone(true);
    setTimeout(() => { setDone(false); setValue(""); }, 3000);
  };

  return (
    <form onSubmit={submit} noValidate className="flex gap-2">
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Your email" aria-label="Email" className={`h-10 w-full rounded-full border px-4 text-sm outline-none placeholder:text-white/40 focus:border-[#B8912F] ${dark ? "border-white/20 bg-white/10 text-white" : "border-[#E8E6E0] bg-white text-[#2B2B2B]"}`} />
      <button type="submit" aria-label="Subscribe" className="btn-gold inline-flex h-10 shrink-0 items-center justify-center rounded-full px-4 text-sm font-semibold">
        {done ? <Icon name="check" size={16} /> : <Icon name="arrow-right" size={16} />}
      </button>
      {(error || done) && <span className="sr-only">{error || "Subscribed"}</span>}
    </form>
  );
}
