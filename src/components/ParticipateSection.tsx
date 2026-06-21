"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tiers = [
  {
    label: "Bronze",
    amount: 24500,
    description: "Supports 7 students with full educational funding.",
  },
  {
    label: "Silver",
    amount: 49000,
    description: "Supports 14 students with full educational funding.",
  },
  {
    label: "Gold",
    amount: 73500,
    description: "Supports 21 students with full educational funding.",
  },
  {
    label: "Platinum",
    amount: 98000,
    description: "Supports 28 students with full educational funding.",
  },
];

export default function ParticipateSection() {
  const [selected, setSelected] = useState(tiers[1].amount);
  const [custom, setCustom] = useState("");

  const effectiveAmount = custom ? Number(custom) : selected;

  return (
    <section id="participate" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label mb-3 block">Make a Difference</span>
            <h2 className="text-4xl font-extrabold tracking-tight brand-underline mb-6" style={{ color: "var(--text-dark)" }}>
              Participate & Support
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-8 mt-6">
              Every contribution directly funds a student&apos;s education. 100% of proceeds go to
              scholarships, mentoring, and student welfare — no administrative overhead.
            </p>

            {/* Impact list */}
            <div className="space-y-4">
              {[
                { icon: "📚", text: "Tuition and boarding fully covered" },
                { icon: "🩺", text: "Healthcare and wellness support" },
                { icon: "🤝", text: "Dedicated mentor for every scholar" },
                { icon: "🎓", text: "University placement and alumni support" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <span
                    className="w-10 h-10 flex items-center justify-center text-lg shrink-0"
                    style={{ background: "var(--primary-light)" }}
                  >
                    {icon}
                  </span>
                  <span className="text-sm text-[var(--text-dark)] font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="border border-[var(--border-color)] p-8"
          >
            {/* Blue top bar */}
            <div className="h-1 -mx-8 -mt-8 mb-8" style={{ background: "var(--primary-color)" }} />

            <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-dark)" }}>
              Choose a Support Level
            </h3>
            <p className="text-xs text-[var(--text-muted)] mb-6">
              All amounts are in Kenyan Shillings (Ksh). Every 3,500 Ksh contributed directly funds one student.
            </p>

            {/* Tier grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {tiers.map(({ label, amount, description }) => (
                <button
                  key={amount}
                  onClick={() => { setSelected(amount); setCustom(""); }}
                  type="button"
                  className="p-4 text-left border-2 transition-all rounded-sm cursor-pointer"
                  style={{
                    borderColor: selected === amount && !custom ? "var(--primary-color)" : "var(--border-color)",
                    background: selected === amount && !custom ? "var(--primary-light)" : "white",
                  }}
                >
                  <div
                    className="text-lg font-black mb-0.5"
                    style={{ color: selected === amount && !custom ? "var(--primary-color)" : "var(--text-dark)" }}
                  >
                    Ksh {amount.toLocaleString()}
                  </div>
                  <div className="text-[11px] font-bold mb-1" style={{ color: "var(--accent-color)" }}>
                    {label}
                  </div>
                  <p className="text-[10px] text-[var(--text-muted)] leading-snug">{description}</p>
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="mb-6">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                Custom Amount (Ksh)
              </label>
              <div className="flex border-2 border-[var(--border-color)] focus-within:border-[var(--primary-color)] transition-colors rounded-sm overflow-hidden mb-2">
                <span className="px-4 flex items-center text-sm font-bold text-[var(--text-muted)] border-r border-[var(--border-color)] bg-[var(--bg-light)]">
                  Ksh
                </span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={custom}
                  onChange={(e) => { setCustom(e.target.value); setSelected(0); }}
                  className="flex-1 px-4 py-3 text-sm outline-none bg-white"
                  min="1"
                />
              </div>
              {custom && Number(custom) > 0 && (
                <p className="text-xs font-semibold mt-1.5 transition-all" style={{ color: "var(--primary-color)" }}>
                  ✨ {(() => {
                    const val = Number(custom);
                    const students = val / 3500;
                    if (students === 1) return "Supports 1 student with full educational funding.";
                    if (students < 1) {
                      return `Covers ${Math.round(students * 100)}% of a student's educational funding.`;
                    }
                    const formatted = Number.isInteger(students) ? students : students.toFixed(1);
                    return `Supports ${formatted} students with educational funding.`;
                  })()}
                </p>
              )}
            </div>

            {/* Frequency */}
            <div className="flex gap-3 mb-8">
              {["One-time", "Monthly"].map((freq) => (
                <button
                  key={freq}
                  type="button"
                  className="flex-1 py-2.5 text-xs font-bold border-2 rounded-sm transition-all cursor-pointer"
                  style={{
                    borderColor: freq === "One-time" ? "var(--primary-color)" : "var(--border-color)",
                    color: freq === "One-time" ? "var(--primary-color)" : "var(--text-muted)",
                    background: freq === "One-time" ? "var(--primary-light)" : "white",
                  }}
                >
                  {freq}
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              type="button"
              className="w-full py-4 font-bold tracking-wide text-white text-sm transition-all hover:opacity-90 rounded-sm cursor-pointer"
              style={{ background: "var(--accent-color)" }}
            >
              PARTICIPATE {effectiveAmount ? `(Ksh ${effectiveAmount.toLocaleString()})` : ""} NOW
            </button>

            <p className="text-center text-[10px] text-[var(--text-muted)] mt-4">
              Secure payment • 100% goes to scholars • Receipts emailed instantly
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
