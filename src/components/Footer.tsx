export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 px-6 text-center" style={{ borderTop: "1px solid var(--border)" }}>
      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
        © {year} Gustavo Santos — Feito com muito café ☕ e energetico 🥤
      </p>
    </footer>
  );
}
