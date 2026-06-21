import ParticipateSection from "@/components/ParticipateSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Participate | The Okendi Education Program",
  description:
    "Participate in the Okendi Education Program and support our scholars through educational sponsorship.",
};

export default function ParticipatePage() {
  return <ParticipateSection />;
}
