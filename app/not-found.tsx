import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-[600px] flex-col items-center px-4 py-24 text-center md:px-6">
      <p className="text-xs font-semibold tracking-[0.2em] text-[#B8912F]">404</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-[#0B1E3A]">Page not found</h1>
      <p className="mt-3 text-sm leading-6 text-[#6B7280]">The page you followed has moved or never existed. Stay inside the journey.</p>
      <Link href="/" className="btn-gold mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold">Back to Home <Icon name="arrow-right" size={14} /></Link>
    </div>
  );
}
