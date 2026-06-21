import EventsSection from "@/components/EventsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What's On | The Okendi Education Program",
  description:
    "Stay updated with upcoming program events, mentoring summits, and community initiatives from The Okendi Education Program.",
};

export default function EventsPage() {
  return <EventsSection />;
}
