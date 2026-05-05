"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Code2, Link as Link2, Mail } from "lucide-react";

const roles = ["Desenvolvedor Frontend", "Desenvolvedor Backend", "Desenvolvedor Full Stack","Desenvolvedor Web/Mobile"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIndex];
    let i = displayed.length;

    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute animate-float"
          style={{
            width: 600,
            height: 600,
            top: "-10%",
            left: "-15%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(91,33,182,0.35) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute animate-float-reverse"
          style={{
            width: 500,
            height: 500,
            top: "20%",
            right: "-10%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,121,249,0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute animate-pulse-slow"
          style={{
            width: 400,
            height: 400,
            bottom: "10%",
            left: "30%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(103,232,249,0.12) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-up delay-100">
          <span className="section-badge">✦ Disponível para projetos</span>
        </div>

        <h1
          className="font-display mt-8 mb-6 leading-tight animate-fade-up delay-200"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 800 }}
        >
          Olá, eu sou{" "}
          <span className="gradient-text text-glow">Gustavo Santos</span>
        </h1>

        <div
          className="font-display text-xl md:text-2xl mb-8 animate-fade-up delay-300"
          style={{ color: "var(--text-secondary)", minHeight: "2rem" }}
        >
          {displayed}
          <span className="animate-blink ml-0.5" style={{ color: "var(--purple-glow)" }}>|</span>
        </div>

        <p
          className="text-lg max-w-xl mx-auto mb-12 leading-relaxed animate-fade-up delay-400"
          style={{ color: "var(--text-muted)" }}
        >
          Crio experiências digitais modernas e memoráveis.
          Apaixonado por código limpo, design e performance.
        </p>

        <div className="flex flex-warp justify-center gap-5 animate-fade-up delay-500">
          <a href="#projetos" className="btn-primary flex items-center gap-5">
            Ver projetos <ArrowRight size={20} />
          </a>
          <a href="#contato" className="btn-outline">
            Entrar em contato
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-5 mt-20 animate-fade-up delay-600">
          {[
            { icon: Code2, href: "https://github.com/GusAtSantos", label: "GitHub" },
            { icon: Link2, href: "https://www.linkedin.com/in/gustavo-santos-002415288/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:gustavoatanasiosantos@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--purple-glow)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: "var(--text-muted)" }}
      >
        <div
          className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="w-1 h-2 rounded-full animate-bounce"
            style={{ background: "var(--purple-bright)" }}
          />
        </div>
      </div>
    </section>
  );
}
