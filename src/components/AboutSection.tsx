"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10" /><path d="M6 10h10" />
      </svg>
    ),
    title: "Full Scholarships",
    body: "We cover tuition, boarding fees, learning materials, and healthcare throughout secondary and university education.",
    accent: "var(--primary-color)",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Mentorship & Life Skills",
    body: "Every scholar is paired with a mentor. We run workshops on leadership, career pathways, financial health, and social responsibility.",
    accent: "var(--accent-color)",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
    title: "Alumni Network",
    body: "Our program doesn't stop at graduation. We support alumni with university applications, internships, and professional networking.",
    accent: "var(--primary-color)",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Text */}
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="section-label mb-3 block">Who We Are</span>
            <h2 className="text-4xl xl:text-5xl font-extrabold tracking-tight mb-3 brand-underline" style={{ color: "var(--text-dark)" }}>
              Who We Are
            </h2>
            <p className="text-[var(--text-muted)] mt-6 mb-4 text-sm font-medium">
              Bridging educational gaps and unlocking potential under Africa&apos;s Promise.
            </p>
            <p className="text-[17px] font-bold text-[var(--text-dark)] leading-snug mb-5">
              At The Okendi Education Program, we are the bridge between raw potential and future
              impact. We are an organization founded on a single, profound belief: financial
              constraints should never dictate a child&apos;s destiny.
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
              We operate as a vital lifeline and strategic support system for determined students
              facing severe financial barriers. Through our targeted bursary program, we don&apos;t
              just clear balances on a school ledger—we restore peace of mind to families, bring
              stability to classrooms, and safeguard the dreams of brilliant young minds.
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-8">
              Our Promise: We are the champions of the determined, the partners to the resilient,
              and the believers in tomorrow. By uniting resources and removing financial barriers,
              we prove what is possible when we come together as one community.
            </p>
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold tracking-wide text-white rounded-sm transition-all hover:opacity-90"
              style={{ background: "var(--primary-color)" }}
            >
              MEET OUR SCHOLARS
            </Link>
          </motion.div>

          {/* Image + badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[520px]"
          >
            <div className="absolute inset-0 rounded-sm overflow-hidden">
              <Image
                src="/assets/hero-bg.png"
                alt="Students learning in class"
                fill
                className="object-cover object-center"
              />
            </div>
            {/* Accent badge */}
            <div
              className="absolute bottom-6 left-6 p-6 shadow-xl"
              style={{ background: "var(--accent-color)" }}
            >
              <div className="text-4xl font-black text-white mb-0.5">100%</div>
              <div className="text-[11px] font-bold tracking-widest uppercase text-white/80">
                Direct Impact Guarantee
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Pillars */}
        <div>
          <motion.h3
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center text-2xl font-bold tracking-tight mb-12"
            style={{ color: "var(--text-dark)" }}
          >
            OUR CORE PILLARS
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--border-color)] divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)]">
            {pillars.map(({ icon, title, body, accent }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 group hover:bg-[var(--bg-light)] transition-colors"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-5 rounded-sm"
                  style={{ background: `color-mix(in srgb, ${accent} 12%, transparent)`, color: accent }}
                >
                  {icon}
                </div>
                {/* Colored top border */}
                <div className="w-full h-[3px] mb-5" style={{ background: accent }} />
                <h4 className="text-base font-bold mb-3" style={{ color: "var(--text-dark)" }}>
                  {title}
                </h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
