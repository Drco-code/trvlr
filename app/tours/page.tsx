import PageHeader from "@/components/ui/PageHeader";
import ToursClient from "./ToursClient";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tours" };

export default function ToursPage() {
  return (
    <div>
      <PageHeader title="Tours" subtitle="Browse and compare packages by destination, price and duration. Every card opens the full detail template." />
      <ToursClient />
    </div>
  );
}
