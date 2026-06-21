import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "What's On", href: "/events" },
  { label: "Our Stories", href: "/stories" },
];

const pillars = [
  { label: "Scholarships", href: "/about" },
  { label: "Mentoring Program", href: "/about" },
  { label: "Alumni Community", href: "/stories" },
  { label: "Participate", href: "/participate" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-dark)", color: "#E2E8F0" }}>
      {/* Orange top accent line */}
      <div className="h-1" style={{ background: "var(--accent-color)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20">
                <Image
                  src="/assets/oep_logo.jpeg"
                  alt="Okendi Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-white text-[15px]">The Okendi</div>
                <div className="text-[11px] tracking-widest uppercase text-white/50 font-semibold">
                  Education Program
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              An educational empowerment initiative under Africa&apos;s Promise. Building the next
              generation of African leaders.
            </p>
            <div className="flex gap-3">
              {["facebook", "twitter", "instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 hover:border-[var(--accent-color)] hover:bg-[var(--accent-color)] transition-all text-white/60 hover:text-white"
                >
                  {s === "facebook" && (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  )}
                  {s === "twitter" && (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  )}
                  {s === "instagram" && (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-white mb-4">
              Navigation
            </h4>
            <div className="w-8 h-0.5 mb-6" style={{ background: "var(--accent-color)" }} />
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillars */}
          <div>
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-white mb-4">
              Pillars
            </h4>
            <div className="w-8 h-0.5 mb-6" style={{ background: "var(--accent-color)" }} />
            <ul className="space-y-3">
              {pillars.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-white mb-4">
              Contact Us
            </h4>
            <div className="w-8 h-0.5 mb-6" style={{ background: "var(--accent-color)" }} />
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <svg
                  className="shrink-0 mt-0.5"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent-color)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Nairobi Office: Thika Road Mall Complex, Suite 4B, Nairobi, Kenya
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <svg
                  className="shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent-color)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z" />
                </svg>
                +254 (0) 722 000 000
              </li>
              <li className="flex gap-3 items-center">
                <svg
                  className="shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent-color)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@okendieducation.org
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2026 The Okendi Education Program. Built under Africa&apos;s Promise. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            {["Privacy Policy", "Terms of Service", "Annual Reports"].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
