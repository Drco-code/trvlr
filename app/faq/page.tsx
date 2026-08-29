import PageHeader from "@/components/ui/PageHeader";
import FaqClient from "./FaqClient";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <div>
      <PageHeader title="Frequently Asked Questions" subtitle="Grouped accordion — Booking, Visas & Documents, Payments, Cancellations & Refunds. Smooth expand with chevron per §7.5." />
      <FaqClient />
    </div>
  );
}
