"use client";

import {Code2, Rocket, Heart} from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Código limpo",
        desc: "Escrevo código legível, modular e fácil de manter. Boas práticas são inegociáveis.",
    },
    {
        icon: Rocket,
        title: "Performance",
        desc: "Sites rápidos não são opcional. Otimizo cada detalhe para a melhor experiência.",
    },
    {
        icon: Heart,
        title: "Paixão",
        desc: "Amo o que faço. Cada projeto é uma oportunidade de criar algo incrível.",
    },
];

export default function About() {
    return (
        <section id="sobre" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Text */}
                    <div>
                        <span className="section-badge">✦ Sobre mim</span>

                        <h2
                            className="font-display mt-6 mb-6 leading-tight"
                            style={{fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800}}
                        >
                            Quem está{" "}
                            <span className="gradient-text">por trás do código</span>
                        </h2>

                        <div
                            className="space-y-4 leading-relaxed"
                            style={{color: "var(--text-muted)", fontSize: "1.05rem"}}
                        >
                            <p>
                                Sou um desenvolvedor apaixonado por criar interfaces que combinam
                                estética e funcionalidade. Com <strong style={{ color: "var(--text-secondary)" }}>poucos anos de experiência</strong>, quero me
                                ingressar no mercado de tecnologia onde eu possa aplicar e desenvolver os conhecimentos
                                adquiridos no<strong style={{color: "var(--purple-glow)"}}>Colégio Cotemig</strong>,  — uma das escolas técnicas mais prestigiadas — e futuramente na <strong style={{color: "var(--purple-glow)" }}>Dom Helder </strong> uma das faculdades mais prestigiadas - contribuindo com soluções inovadoras e eficientes.

                            </p>
                            <p>
                                Minha stack favorita gira em torno de{" "}
                                <strong style={{color: "var(--purple-glow)"}}>React, Next.js e TypeScript</strong>,
                                mas não tenho medo de explorar novas tecnologias quando o projeto exige.
                            </p>
                            <p>
                                Quando não estou codando, provavelmente estou jogando, assistindo séries ou
                                explorando novas ideias de design.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-5">
                            {["Next.js", "TypeScript", "React", "Node.js", "Tailwind"].map((tag) => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="space-y-4">
                        {highlights.map(({icon: Icon, title, desc}) => (
                            <div
                                key={title}
                                className="glass-card p-6 flex gap-5 items-start transition-all duration-300 group hover:scale-[1.02]"
                                style={{cursor: "default"}}
                            >
                                <div
                                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                                    style={{
                                        background: "rgba(139,92,246,0.15)",
                                        border: "1px solid rgba(139,92,246,0.25)",
                                    }}
                                >
                                    <Icon size={20} style={{color: "var(--purple-glow)"}}/>
                                </div>
                                <div>
                                    <h3
                                        className="font-display font-700 mb-1"
                                        style={{color: "var(--text-primary)", fontWeight: 700}}
                                    >
                                        {title}
                                    </h3>
                                    <p style={{color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6}}>
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
