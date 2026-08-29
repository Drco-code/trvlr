import LegalTemplate from "@/components/sections/LegalTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Cancellation & Refund Policy" };
export default function Page() {
  return <LegalTemplate title="Cancellation & Refund Policy" updated="28 Aug 2026 — placeholder, per-tour terms apply" sections={[{ id: "general", title: "General", body: "Each Tour Detail shows its own deadline and refund tier. This page is the master policy." },{ id: "tiers", title: "Refund tiers", body: "Before deadline: up to 100% less non-recoverable partner fees. After deadline: 50%. Within 7 days: non-refundable unless partner waives." },{ id: "process", title: "Process", body: "Email or WhatsApp your handler. Refunds processed within 7–14 business days to original payment method." }]} />;
}
