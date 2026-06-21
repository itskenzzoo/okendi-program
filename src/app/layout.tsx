import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Okendi Education Program | Empowering Youth under Africa's Promise",
  description:
    "The Okendi Education Program provides secondary and university scholarships, mentoring, and support for promising students in East Africa.",
  keywords:
    "The Okendi Education Program, Africa's Promise, Kenya Education Fund, scholarships, mentoring, education charity Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col" style={{ background: "var(--bg-light)" }}>
        <Navbar />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
