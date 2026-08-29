"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Reveal({ children, className = "", stagger = false }: { children: React.ReactNode; className?: string; stagger?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { el.classList.add("is-visible"); return; }
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (stagger) {
        const kids = Array.from(el.children) as HTMLElement[];
        if (kids.length) {
          gsap.set(kids, { autoAlpha: 0, y: 18 });
          gsap.to(kids, {
            autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
            onComplete: () => el.classList.add("is-visible"),
          });
        }
      } else {
        gsap.set(el, { autoAlpha: 0, y: 18 });
        gsap.to(el, {
          autoAlpha: 1, y: 0, duration: 0.65, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onComplete: () => el.classList.add("is-visible"),
        });
      }
    }, el);
    return () => ctx.revert();
  }, [stagger]);
  return (
    <div ref={ref} className={`${stagger ? "reveal-stagger" : "reveal"} ${className}`}>
      {children}
    </div>
  );
}
