import LegalTemplate from "@/components/sections/LegalTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy" };
export default function Page() {
  return <LegalTemplate title="Privacy Policy" updated="28 Aug 2026 — placeholder" sections={[{ id: "collect", title: "What we collect", body: "In prototype phase no data is collected or stored. Production will collect enquiry details to respond and fulfil bookings." },{ id: "use", title: "How we use it", body: "To respond to enquiries, issue tickets and coordinate travel partners — never sold." },{ id: "rights", title: "Your rights", body: "Request access, correction or deletion via hello@gg-travels.example.com." }]} />;
}
