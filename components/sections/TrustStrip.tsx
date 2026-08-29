"use client";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: 28, suffix: "+", label: "Destinations served" },
  { value: 12, suffix: "+", label: "Years of expertise" },
  { value: 3400, suffix: "+", label: "Happy travellers" },
  { value: 98, suffix: "%", label: "On-time support" },
];

function CountUp({ to }: { to: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let cur = 0; const step = Math.max(1, Math.floor(to / 40));
        const t = setInterval(() => { cur = Math.min(to, cur + step); setN(cur); if (cur >= to) clearInterval(t); }, 30);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString()}</span>;
}

export default function TrustStrip() {
  return (
    <Reveal className="border-y border-[#E8E6E0] bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-7 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:divide-x md:divide-[#E8E6E0]">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:px-4">
              <div className="font-serif text-2xl font-semibold tracking-tight text-[#0B1E3A] md:text-[30px]"><CountUp to={s.value} />{s.suffix}</div>
              <div className="mt-1 text-[11px] font-semibold tracking-[0.14em] text-[#6B7280]">{s.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-[#6B7280]">Placeholder numbers — awaiting final figures from client (§12).</p>
      </div>
    </Reveal>
  );
}
