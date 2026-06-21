import StoriesSection from "@/components/StoriesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Stories | The Okendi Education Program",
  description:
    "Real stories of hope, resilience, and success from Okendi scholars across East Africa.",
};

export default function StoriesPage() {
  return <StoriesSection />;
}
