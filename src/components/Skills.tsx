"use client";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "SQL", level: 78 },
      { name: "PHP", level: 80 },
      { name: "C#", level: 75 },
    ],
  },
  {
    category: "Ferramentas",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Netlify", level: 65 },
      { name: "Figma", level: 72 },
      { name: "Vercel / CI/CD", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="divider max-w-6xl mx-auto mb-24" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-badge">✦ Habilidades</span>
          <h2
            className="font-display mt-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}
          >
            Minha{" "}
            <span className="gradient-text">stack técnica</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="glass-card p-8">
              <h3
                className="font-display font-bold text-lg mb-6"
                style={{ color: "var(--purple-glow)" }}
              >
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(139,92,246,0.12)" }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          background: "linear-gradient(to right, var(--purple-mid), var(--accent-pink))",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
