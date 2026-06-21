"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const team = [
  { id: "nickson", name: "Nickson Sekoh", role: "Chairman of Africa's Promise", img: "/assets/team-nickson.jpeg", excerpt: "Nickson Sekoh is the Chairman of Africa's Promise, overseeing global direction and strategic growth..." },
  { id: "collins", name: "Collins Okendi", role: "Chairman of Okendi Education Program", img: "/assets/team-collins.jpeg", excerpt: "Collins Okendi's profile details and role background will be updated here in due course..." },
  { id: "hassan", name: "Hassan Opidi", role: "Chief Executive Officer", img: "/assets/team-hassan.png", excerpt: "Profile, story, and role details for Hassan Opidi will be updated here in due course..." },
  { id: "emilly", name: "Emilly Okello", role: "Vice Chairperson", img: "/assets/team-emily.jpeg", excerpt: "Profile, story, and role details for Emilly Okello will be updated here in due course..." },
  { id: "james", name: "James Obop Mayienga", role: "Educationist", img: "/assets/team-james.png", excerpt: "James Obop Mayienga's profile details and role background will be updated here in due course..." },
  { id: "fredrick", name: "Dr. Fred Nyabwa", role: "Technical Advisor", img: "/assets/team-fred.jpeg", excerpt: "Profile, story, and role details for Fredrick Nyabwa will be updated here in due course..." },
  { id: "wendy", name: "Wendy Deya", role: "Creative", img: "/assets/team-wendy.jpeg", excerpt: "Profile, story, and role details for Wendy Deya will be updated here in due course..." },
  { id: "vitalis", name: "Dr. Vitalis Ogombe", role: "Lead Strategist", img: "/assets/team-vitalis.jpeg", excerpt: "Profile, story, and role details for Vitalis Ogombe will be updated here in due course..." },
  { id: "edith", name: "Edith Onyango", role: "Educationist", img: "/assets/team-edith.jpeg", excerpt: "Profile, story, and role details for Edith Onyango will be updated here in due course..." },
  { id: "joshua", name: "Joshua Omollo", role: "Financial Advisor", img: "/assets/team-joshua.png", excerpt: "Profile, story, and role details for Joshua Omollo will be updated here in due course..." },
  { id: "peter", name: "Peter Odongo", role: "Project Consultant", img: "/assets/team-peter.png", excerpt: "Profile, story, and role details for Peter Odongo will be updated here in due course..." },
  { id: "joseph", name: "Joseph Situma", role: "Program Strategist", img: "/assets/team-joseph.jpeg", excerpt: "Profile, story, and role details for Joseph Situma will be updated here in due course..." },
  { id: "george", name: "George Ngeta", role: "Development Expert", img: "/assets/team-geroge.png", excerpt: "Profile, story, and role details for George Ngeta will be updated here in due course..." },
  { id: "williams", name: "George Williams", role: "Learning Design and Training Specialist", img: "/assets/team-williams.jpeg", excerpt: "Profile, story, and role details for George Williams will be updated here in due course..." },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24" style={{ background: "var(--bg-light)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label mb-3 block">The People</span>
          <h2 className="text-4xl font-extrabold tracking-tight brand-underline" style={{ color: "var(--text-dark)" }}>
            Our Team
          </h2>
          <p className="text-sm text-[var(--text-muted)] mt-6 max-w-xl">
            The dedicated professionals driving impact and guiding our scholars under Africa&apos;s Promise.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map(({ id, name, role, img, excerpt }, i) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.07, duration: 0.45 }}
              className="flex flex-col bg-white rounded-2xl border border-[var(--border-color)]/80 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Photo — 4:5 portrait ratio, filled consistently */}
              <div
                className="relative w-full overflow-hidden"
                style={{ background: "var(--bg-light)", aspectRatio: "4/5" }}
              >
                <Image
                  src={img}
                  alt={`${name} portrait`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {/* Accent bar on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: "var(--accent-color)" }}
                />
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold mb-1" style={{ color: "var(--text-dark)" }}>
                  {name}
                </h3>
                <span
                  className="text-xs font-bold uppercase tracking-wider block mb-3"
                  style={{ color: "var(--accent-color)" }}
                >
                  {role}
                </span>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {excerpt}
                </p>
                <div className="mt-auto">
                  <button
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wide transition-colors group/btn"
                    style={{ color: "var(--primary-color)" }}
                  >
                    <span>Read {name.split(" ")[0]}&apos;s Story</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">
                      <ArrowIcon />
                    </span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
