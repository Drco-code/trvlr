import PageHeader from "@/components/ui/PageHeader";
import DestinationCard from "@/components/sections/DestinationCard";
import { destinations } from "@/lib/data/destinations";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Destinations" };

export default function DestinationsPage() {
  return (
    <div>
      <PageHeader title="Destinations" subtitle="Eight featured destinations — each opens a long-form guide with highlights, best time and related tours. Room to add more." image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80" />
      <div className="mx-auto max-w-[1280px] px-4 py-10 md:px-6 lg:px-8">
        <Reveal stagger className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {destinations.map((d) => <DestinationCard key={d.slug} d={d} />)}
        </Reveal>
      </div>
    </div>
  );
}
