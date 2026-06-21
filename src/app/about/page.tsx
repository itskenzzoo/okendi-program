import AboutSection from "@/components/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are | The Okendi Education Program",
  description:
    "Learn how The Okendi Education Program bridges educational gaps and unlocks the potential of students across East Africa.",
};

export default function AboutPage() {
  return <AboutSection />;
}
