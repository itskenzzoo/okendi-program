import TeamSection from "@/components/TeamSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | The Okendi Education Program",
  description:
    "Meet the dedicated professionals driving impact and guiding scholars under Africa's Promise.",
};

export default function TeamPage() {
  return <TeamSection />;
}
