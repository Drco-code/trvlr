import LegalTemplate from "@/components/sections/LegalTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms & Conditions" };
export default function Page() {
  return <LegalTemplate title="Terms & Conditions" updated="28 Aug 2026 — placeholder, pending legal review" sections={[{ id: "use", title: "Use of site", body: "Content is for enquiry and planning. Prices and availability are indicative until confirmed in writing." },{ id: "booking", title: "Bookings", body: "Bookings are confirmed upon deposit and written confirmation. Names, dates and documents must be accurate." },{ id: "liability", title: "Liability", body: "GG Travels acts as intermediary for airlines, hotels and ground partners. Partner terms apply." }]} />;
}
