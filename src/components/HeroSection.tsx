"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

function useCountUp(target: number, duration = 1800, suffix = "") {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let start = 0;
    const end = target;
    const step = end / (duration / 16);
    let frame: number;
    const update = () => {
      start += step;
      if (start >= end) {
        if (ref.current) ref.current.textContent = end.toLocaleString() + suffix;
        return;
      }
      if (ref.current) ref.current.textContent = Math.floor(start).toLocaleString() + suffix;
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, suffix]);
  return ref;
}

function StatNumber({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useCountUp(value, 1800, suffix ?? "");
  return <span ref={ref}>0</span>;
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col -mt-[72px]">
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-bg.png"
          alt="African youth learning in class"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark-left overlay — no gradient, just layered solids for a clean look */}
        <div className="absolute inset-0" style={{ background: "rgba(10,68,164,0.82)" }} />
        <div className="absolute inset-0" style={{ background: "rgba(11,29,58,0.55)" }} />
      </div>

      {/* Decorative vertical rule */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 hidden lg:block"
        style={{ background: "var(--accent-color)" }}
      />

      {/* Hero Content */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Tag line */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span
                className="block w-8 h-[2px]"
                style={{ background: "var(--accent-color)" }}
              />
              <span className="text-[13px] font-bold tracking-widest uppercase text-white/80">
                A Project of Africa&apos;s Promise
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
              One Community,{" "}
              <span className="block" style={{ color: "var(--accent-color)" }}>
                Many Voices.
              </span>
              Shared Opportunity
            </h1>

            <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-xl">
              To cultivate one community that celebrates many voices and prepares diverse
              learners for a lifetime of shared opportunity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="px-8 py-3.5 text-sm font-bold tracking-wide text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all rounded-sm"
              >
                WHO WE ARE
              </Link>
              <Link
                href="/participate"
                className="px-8 py-3.5 text-sm font-bold tracking-wide text-white rounded-sm transition-all hover:opacity-90"
                style={{ background: "var(--accent-color)" }}
              >
                PARTICIPATE
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar — anchored to bottom */}
      <div
        className="relative border-t border-white/10"
        style={{ background: "rgba(11,29,58,0.92)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { value: 1500, suffix: "+", label: "Scholarships Awarded" },
              { value: 98, suffix: ".5%", label: "Graduation Rate" },
              { value: 45, suffix: "+", label: "Partner Schools" },
            ].map(({ value, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                className="py-8 px-6 text-center sm:text-left"
              >
                <div
                  className="text-4xl font-black mb-1.5 tabular-nums"
                  style={{ color: "var(--accent-color)" }}
                >
                  <StatNumber value={value} suffix={suffix} />
                </div>
                <div className="text-xs font-bold tracking-widest uppercase text-white/50">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
