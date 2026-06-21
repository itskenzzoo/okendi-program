"use client";

import { motion } from "framer-motion";

const events = [
  {
    dayLabel: "Jan –",
    monthLabel: "July",
    type: "Scholarship Distribution",
    title: "Bursary / Scholarship Programme",
    description:
      "Recurring scholarship and bursary distributions taking place across multiple cohorts throughout the year in January, March, April, and July.",
    location: "Okendi Program Head Office",
    time: "Scheduled Monthly",
  },
  {
    dayLabel: "20",
    monthLabel: "Aug",
    type: "Mentorship Program",
    title: "Young Women Mentorship Program",
    description:
      "A specialised mentoring and leadership development program designed for young women, focusing on life skills, education pathways, and career growth, led by Mrs Emilly Okello.",
    location: "Nairobi National Museum Complex",
    time: "09:00 AM – 04:00 PM",
  },
  {
    dayLabel: "11",
    monthLabel: "Dec",
    type: "Mentorship Summit",
    title: "Annual Education Conference and Mentorship Summit",
    description:
      "Bringing together all learners, mentors, and alumni in the programme for a weekend of leadership workshops, career guidance, and bonding.",
    location: "Nairobi National Museum Complex",
    time: "09:00 AM – 05:00 PM",
  },
];

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function EventsSection() {
  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label mb-3 block">Programme Calendar</span>
          <h2 className="text-4xl font-extrabold tracking-tight brand-underline" style={{ color: "var(--text-dark)" }}>
            What&apos;s On
          </h2>
          <p className="text-sm text-[var(--text-muted)] mt-6 max-w-xl">
            Stay updated with our upcoming program events, mentoring summits, and community initiatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events list — takes 2 cols */}
          <div className="lg:col-span-2 space-y-0 border border-[var(--border-color)] divide-y divide-[var(--border-color)]">
            {events.map(({ dayLabel, monthLabel, type, title, description, location, time }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="flex gap-6 p-6 group hover:bg-[var(--bg-light)] transition-colors"
              >
                {/* Date badge */}
                <div
                  className="shrink-0 w-16 flex flex-col items-center justify-center py-3 text-center"
                  style={{ background: "var(--primary-color)" }}
                >
                  <span className="text-white font-black text-lg leading-none">{dayLabel}</span>
                  <span className="text-white/70 text-[11px] font-bold uppercase tracking-wider mt-1">
                    {monthLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--text-muted)] block mb-1">
                    {type}
                  </span>
                  <h3 className="text-[15px] font-bold mb-2" style={{ color: "var(--text-dark)" }}>
                    {title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-3">{description}</p>
                  <div className="flex flex-wrap gap-4 text-[11px] text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5">
                      <span style={{ color: "var(--accent-color)" }}><LocationIcon /></span>
                      {location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span style={{ color: "var(--accent-color)" }}><ClockIcon /></span>
                      {time}
                    </span>
                  </div>
                </div>

                {/* Register */}
                <div className="shrink-0 flex items-center">
                  <button
                    className="px-5 py-2 text-[11px] font-bold tracking-wide border-2 transition-all hover:text-white rounded-sm"
                    style={{
                      borderColor: "var(--primary-color)",
                      color: "var(--primary-color)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "var(--primary-color)";
                      (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--primary-color)";
                    }}
                  >
                    REGISTER
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar partner card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="border border-[var(--border-color)] p-8 flex flex-col"
          >
            {/* Blue accent bar top */}
            <div className="h-1 w-full mb-8 -mt-8 -mx-0" style={{ background: "var(--primary-color)" }} />

            <div
              className="w-12 h-12 flex items-center justify-center mb-6"
              style={{ background: "var(--primary-light)", color: "var(--primary-color)" }}
            >
              <CalendarIcon />
            </div>

            <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-dark)" }}>
              Become a Partner
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-8 flex-1">
              Would you like to host a joint mentoring workshop or career day with us? Get in touch
              to partner on our next event.
            </p>
            <button
              className="w-full py-3 text-[12px] font-bold tracking-wide border-2 transition-all rounded-sm"
              style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--primary-color)";
                (e.currentTarget as HTMLButtonElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--primary-color)";
              }}
            >
              CONTACT PARTNERSHIPS
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
