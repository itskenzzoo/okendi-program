"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Filter = "all" | "founding" | "scholar" | "alumni";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const stories = [
  {
    id: "origin",
    category: "founding" as Filter,
    tag: "Origin",
    tagColor: "var(--primary-color)",
    img: null,
    meta: null,
    title: "Our Origin: A Family's Promise",
    body: [
      {
        heading: "The Spark: A Family's Promise",
        text: "Every great movement begins with a single act of conviction. Long before it became a structured beacon of hope, The Okendi Education Program began around a simple family table, occasioned by unfortunate death of family members and loss of income. Witnessing the immense struggles of many bright, determined children within our immediate circle who were forced out of classrooms simply because of school fees, we stepped in to close the gap.",
      },
      {
        heading: "The Growth: From a Few to Over 1,500 Learners",
        text: "What began as a quiet family lifeline soon gathered undeniable momentum. From supporting 314 students in 2024, to 694 in 2025, and scaling to 1,500+ students in 2026. We grew because the need was vast, but more importantly, we grew because the model worked.",
      },
      {
        heading: "The Shift: A Legacy of Collective Action",
        text: "As we expanded, our foundational drive remained the same. True impact cannot be achieved in isolation. It requires a dedicated network of mentors, educators, and supporters working in tandem.",
      },
    ],
    quote: null,
    cta: "Read Our Origin (Focus Mode)",
  },
  {
    id: "amina",
    category: "scholar" as Filter,
    tag: "Scholar",
    tagColor: "var(--primary-color)",
    img: "/assets/student-amina.png",
    meta: "Kilifi County • Grade 11 • Future Cardiologist",
    title: "Amina Wekesa",
    body: [
      {
        heading: null,
        text: "Amina Wekesa grew up in a small village in Kilifi County, where water scarcity and subsistence farming define daily life. Despite scoring 382 marks on her KCPE exams, she had no means to enrol in high school.",
      },
      {
        heading: null,
        text: "The Okendi Education Program stepped in, providing a full four-year scholarship covering all tuition, boarding fees, and health support. Today, Amina is one of the top students at her school, excels in Chemistry and Biology, and dreams of becoming a paediatric cardiologist.",
      },
    ],
    quote: '"Education has given me a voice and a purpose. I am no longer just a statistic of village dropouts; I am a future doctor."',
    cta: "Read Her Story (Focus Mode)",
  },
  {
    id: "david",
    category: "alumni" as Filter,
    tag: "Alumni",
    tagColor: "var(--accent-color)",
    img: "/assets/student-david.png",
    meta: "Kisumu County • University Freshman • Future Software Engineer",
    title: "David Omondi",
    body: [
      {
        heading: null,
        text: "David Omondi's journey with The Okendi Education Program began in 2021. Raised by a single grandmother in Kisumu, David spent his early childhood selling fish by the lakeshore to buy pencils. When he scored 405 marks in primary school, local leaders reached out to APV/Okendi.",
      },
      {
        heading: null,
        text: "David graduated secondary school with an overall A- grade. Thanks to The Okendi Alumni Program, he received assistance with college admission and was awarded a placement to study Software Engineering.",
      },
    ],
    quote: '"Okendi didn\'t just pay my fees; they gave me mentors who taught me how to think, build, and lead."',
    cta: "Read His Story (Focus Mode)",
  },
  {
    id: "florence",
    category: "scholar" as Filter,
    tag: "Scholar",
    tagColor: "var(--primary-color)",
    img: "/assets/hero-bg.png",
    meta: "Kericho County • Grade 10 • Future Agricultural Scientist",
    title: "Florence Chepngetich",
    body: [
      {
        heading: null,
        text: "Florence Chepngetich has always been fascinated by soil, plants, and weather. Living in the lush hills of Kericho, she witnessed smallholder farmers struggle with soil degradation and erratic rainfall due to climate change.",
      },
      {
        heading: null,
        text: "Unable to afford school fees, Florence was facing an early marriage or manual tea picking. Under the program, Florence is learning biology, agricultural sciences, and leadership.",
      },
    ],
    quote: '"A farm is a classroom. I want to bring modern science back to my village\'s soil so no family goes hungry."',
    cta: "Read Her Story (Focus Mode)",
  },
];

const filters: { label: string; value: Filter }[] = [
  { label: "All Stories", value: "all" },
  { label: "Our Origin", value: "founding" },
  { label: "Current Scholars", value: "scholar" },
  { label: "Alumni Spotlight", value: "alumni" },
];

export default function StoriesSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered = stories.filter(
    (s) => activeFilter === "all" || s.category === activeFilter
  );

  return (
    <section id="stories" className="py-24" style={{ background: "var(--bg-light)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="section-label mb-3 block">Impact Stories</span>
          <h2 className="text-4xl font-extrabold tracking-tight brand-underline" style={{ color: "var(--text-dark)" }}>
            Our Stories
          </h2>
          <p className="text-sm text-[var(--text-muted)] mt-6 max-w-xl">
            Real stories of hope, resilience, and success from our Okendi scholars.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-[var(--border-color)] pb-4">
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className="px-5 py-2 text-[12px] font-bold tracking-wide rounded-sm transition-all"
              style={{
                background: activeFilter === value ? "var(--primary-color)" : "white",
                color: activeFilter === value ? "white" : "var(--text-muted)",
                border: `1px solid ${activeFilter === value ? "var(--primary-color)" : "var(--border-color)"}`,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Story cards */}
        <div className="space-y-0 border border-[var(--border-color)] divide-y divide-[var(--border-color)] bg-white">
          <AnimatePresence mode="popLayout">
            {filtered.map(({ id, tag, tagColor, img, meta, title, body, quote, cta }) => (
              <motion.article
                key={id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col sm:flex-row group"
              >
                {/* Image col */}
                <div className="sm:w-56 shrink-0 relative overflow-hidden bg-[var(--bg-light)]">
                  {img ? (
                    <Image
                      src={img}
                      alt={title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full min-h-[200px] flex items-center justify-center text-xs text-[var(--text-muted)] p-4 text-center">
                      [ Image to be placed here ]
                    </div>
                  )}
                  {/* Tag badge */}
                  <span
                    className="absolute top-3 left-3 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
                    style={{ background: tagColor }}
                  >
                    {tag}
                  </span>
                </div>

                {/* Text col */}
                <div className="flex-1 p-8">
                  {meta && (
                    <div className="text-[11px] text-[var(--text-muted)] mb-2 font-medium">{meta}</div>
                  )}
                  <h3 className="text-xl font-bold mb-4" style={{ color: "var(--text-dark)" }}>
                    {title}
                  </h3>

                  {body.map(({ heading, text }, j) => (
                    <div key={j} className="mb-3">
                      {heading && (
                        <h4 className="text-[13px] font-bold mb-1" style={{ color: "var(--primary-color)" }}>
                          {heading}
                        </h4>
                      )}
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">{text}</p>
                    </div>
                  ))}

                  {quote && (
                    <blockquote
                      className="border-l-4 pl-4 my-4 text-sm italic text-[var(--text-dark)]"
                      style={{ borderColor: "var(--primary-light)" }}
                    >
                      {quote}
                    </blockquote>
                  )}

                  <button
                    className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-wide mt-2 transition-colors"
                    style={{ color: "var(--primary-color)" }}
                  >
                    {cta} <ArrowIcon />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
