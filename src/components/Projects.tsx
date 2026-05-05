"use client";

import {ExternalLink, Code2} from "lucide-react";

const projects = [
    {
        title: "Counter Strike 2 API",
        description:
            " Site interativo que consome duas APIs diferentes relacionadas ao jogo Counter Strike 2, apresentando estatísticas e informações em tempo real.",
        tags: ["React", "CSS", "JavaScript", "API Integration"],
        github: "https://github.com/GusAtSantos/frameapigames",
        live: "https://frameapics2.vercel.app/",
        gradient: "from-purple-600 to-pink-500",
        featured: true,
    },
    {
        title: "Replica Site Empresarial",
        description:
            "Réplica responsiva de um site empresarial moderno com foco em design limpo e experiência do usuário otimizada.",
        tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        github: "https://github.com/GusAtSantos/chimperfront",
        live:  "https://chimperfront.vercel.app/",
        gradient: "from-violet-500 to-cyan-400",
        featured: true,
    },
    {
        title: "Pedra, Papel e Tesoura",
        description:
            "Jogo interativo contra o computador com interface intuitiva e animações suaves para uma experiência divertida.",
        tags: ["HTML", "CSS", "JavaScript", "Game Development"],
        github: "https://github.com/GusAtSantos/pedra-papel-tesoura-react",
        live: "https://pedra-papel-tesoura-react-orcin.vercel.app/",
        gradient: "from-fuchsia-500 to-purple-600",
        featured: false,
    },
    {
        title: "Site de Fotografia Profissional",
        description:
            "Portfólio elegante para fotógrafos profissionais com galeria visualmente impressionante e design minimalista.",
        tags: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
        github: "https://github.com/GusAtSantos/Photsenfront",
        live: "https://photsenfront.vercel.app/",
        gradient: "from-purple-400 to-pink-400",
        featured: false,
    },
];

export default function Projects() {
    return (
        <section id="projetos" className="py-32 px-6">
            {/* Divider */}
            <div className="divider max-w-6xl mx-auto mb-24"/>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="section-badge">✦ Portfólio</span>
                    <h2
                        className="font-display mt-6"
                        style={{fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800}}
                    >
                        Projetos em{" "}
                        <span className="gradient-text">destaque</span>
                    </h2>
                    <p className="mt-4 max-w-lg mx-auto" style={{color: "var(--text-muted)"}}>
                        Uma seleção dos trabalhos que mais me orgulho. Cada um com seu desafio único.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="glass-card overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                            style={{boxShadow: "0 0 0 1px transparent"}}
                        >
                            {/* Thumbnail */}
                            <div
                                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                            >
                                <div
                                    className="absolute inset-0 opacity-20"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 30% 50%, white 1px, transparent 1px)`,
                                        backgroundSize: "30px 30px",
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                      className="font-display text-3xl font-black text-white opacity-30 select-none"
                      style={{letterSpacing: "0.1em"}}
                  >
                    {project.title.split(" ")[1]}
                  </span>
                                </div>
                                {project.featured && (
                                    <div className="absolute top-4 left-4">
                    <span className="section-badge text-xs" style={{background: "rgba(0,0,0,0.4)"}}>
                      ★ Destaque
                    </span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3
                                    className="font-display font-bold text-xl mb-2"
                                    style={{color: "var(--text-primary)"}}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed mb-4"
                                    style={{color: "var(--text-muted)"}}
                                >
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-outline text-sm flex items-center gap-2 py-2 px-4"
                                    >
                                        <Code2 size={14}/> Código
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary text-sm flex items-center gap-2 py-2 px-4"
                                        >
                                            <ExternalLink size={14}/> Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/GusAtSantos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline inline-flex items-center gap-2"
                    >
                        <Code2 size={16}/> Ver todos no GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
