"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Возможности", href: "#superpowers" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Вопросы", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-zinc-100 font-bold text-lg">
          Kent <span className="text-sm">👔</span>
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://t.me/ask_kent_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full px-5 py-2 hover:scale-105 transition-transform"
          >
            Попробовать
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden text-zinc-400 hover:text-zinc-100 transition-colors p-1"
          aria-label="Меню"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/50"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-zinc-400 hover:text-zinc-100 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://t.me/ask_kent_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full px-5 py-2.5 mt-2"
              >
                Попробовать
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
