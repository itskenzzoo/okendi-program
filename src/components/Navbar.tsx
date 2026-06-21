"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "What's On", href: "/events" },
  { label: "Our Stories", href: "/stories" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.98)",
        borderBottom: scrolled ? "1px solid var(--border-color)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(10,68,164,0.07)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo + Wordmark → links to Home */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 shrink-0 overflow-hidden ring-1 ring-[var(--border-color)] group-hover:ring-[var(--primary-color)] transition-all">
              <Image
                src="/assets/oep_logo.jpeg"
                alt="Okendi Education Program Logo"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-[var(--text-dark)] text-[15px] tracking-tight group-hover:text-[var(--primary-color)] transition-colors">
                The Okendi
              </div>
              <div className="text-[11px] font-semibold tracking-widest text-[var(--text-muted)] uppercase">
                Education Program
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-[13px] font-semibold tracking-wide transition-all rounded-sm ${
                    isActive
                      ? "text-[var(--primary-color)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-dark)]"
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                      style={{ background: "var(--primary-color)" }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/participate"
              className="ml-4 px-6 py-2.5 text-[13px] font-bold tracking-wide text-white rounded-sm transition-all hover:opacity-90 active:scale-95"
              style={{ background: "var(--accent-color)" }}
            >
              PARTICIPATE
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[var(--text-dark)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden border-t border-[var(--border-color)] bg-white"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`px-3 py-3 text-[14px] font-semibold rounded transition-all ${
                      isActive
                        ? "text-[var(--primary-color)] bg-[var(--primary-light)]"
                        : "text-[var(--text-muted)] hover:text-[var(--primary-color)] hover:bg-[var(--primary-light)]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
              <Link
                href="/participate"
                className="mt-2 w-full py-3 text-[13px] font-bold tracking-wide text-white rounded text-center transition-all"
                style={{ background: "var(--accent-color)" }}
              >
                PARTICIPATE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
