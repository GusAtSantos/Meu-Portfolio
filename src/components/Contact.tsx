"use client";

import { useState } from "react";
import { Send, Mail, Code2, Link as Link2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: integrar com seu backend / formspree / resend
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputStyle = {
    background: "rgba(139,92,246,0.08)",
    border: "1px solid var(--border)",
    borderRadius: 10,
    color: "var(--text-primary)",
    padding: "12px 16px",
    width: "100%",
    outline: "none",
    fontSize: "0.95rem",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contato" className="py-32 px-6">
      <div className="divider max-w-6xl mx-auto mb-24" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-badge">✦ Contato</span>
          <h2
            className="font-display mt-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}
          >
            Vamos{" "}
            <span className="gradient-text">trabalhar juntos?</span>
          </h2>
          <p className="mt-4 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            Aberto a projetos freelance, oportunidades de emprego e colaborações.
            Me manda uma mensagem!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="glass-card p-8 space-y-5">
            <div>
              <label className="text-sm mb-2 block" style={{ color: "var(--text-secondary)" }}>
                Nome
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Seu nome"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--purple-bright)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>
            <div>
              <label className="text-sm mb-2 block" style={{ color: "var(--text-secondary)" }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--purple-bright)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>
            <div>
              <label className="text-sm mb-2 block" style={{ color: "var(--text-secondary)" }}>
                Mensagem
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Conte sobre seu projeto..."
                rows={5}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--purple-bright)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "sending" || status === "sent"}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === "idle" && (<><Send size={16} />Favor enviar por fora do forms, estou consertando um bug ⚒️</>)}
              {status === "sending" && "Enviando..."}
              {status === "sent" && "✓ Mensagem enviada!"}
            </button>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="glass-card p-6 flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)" }}
              >
                <Mail size={20} style={{ color: "var(--purple-glow)" }} />
              </div>
              <div>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>Email</p>
                <a
                  href="mailto:gustavoatanasiosantos@gmail.com"
                  className="font-medium transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  gustavoatanasiosantos@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)" }}
              >
                <Code2 size={20} style={{ color: "var(--purple-glow)" }} />
              </div>
              <div>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>GitHub</p>
                <a
                  href="https://github.com/GusAtSantos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  github.com/GustavoSantos
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)" }}
              >
                <Link2 size={20} style={{ color: "var(--purple-glow)" }} />
              </div>
              <div>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/gustavo-santos-002415288/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  linkedin.com/in/GustavoSantos
                </a>
              </div>
            </div>

            <p
              className="text-sm text-center px-4"
              style={{ color: "var(--text-muted)" }}
            >
              Geralmente respondo em menos de 24 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
