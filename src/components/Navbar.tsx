"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 backdrop-blur-xl border-b"
          : "py-6"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(15,5,32,0.85)" : "transparent",
        borderColor: scrolled ? "var(--border)" : "transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="font-display font-bold text-xl gradient-text"
        >
          Gustavo Santos
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--purple-glow)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden md:block btn-primary text-sm"
        >
          Vamos conversar
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-4"
          style={{
            backgroundColor: "rgba(15,5,32,0.97)",
            borderColor: "var(--border)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-display font-medium text-lg py-1 transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href="#contato" className="btn-primary text-center mt-2">
            Vamos conversar
          </a>
        </div>
      )}
    </header>
  );
}
