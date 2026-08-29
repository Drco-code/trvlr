import PageHeader from "@/components/ui/PageHeader";
import QuoteForm from "@/components/sections/QuoteForm";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Request a Quote" };

export default function QuotePage() {
  return (
    <div>
      <PageHeader title="Request a Quote / Booking" subtitle="The core conversion form from §5 of the brief — reachable from every Book Now and Contact for Quote CTA. UI-only in this phase." />
      <div className="mx-auto max-w-[720px] px-4 py-10 md:px-6">
        <div className="rounded-2xl border border-[#E8E6E0] bg-white p-6 md:p-8">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
