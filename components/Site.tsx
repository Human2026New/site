export default function Site({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0b0b0b",
      color: "white"
    }}>
      <header style={{
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}>
        <span style={{
          letterSpacing: "0.35em",
          fontSize: "0.75rem",
          opacity: 0.7
        }}>
          HUMAN
        </span>

        <nav style={{
          display: "flex",
          gap: 36,
          fontSize: "0.7rem",
          letterSpacing: "0.25em",
          opacity: 0.6
        }}>
          <a href="/human">HUMAN</a>
          <a href="/hum">HUM</a>
          <a href="/fases">FASES</a>
          <a href="/faq">FAQ</a>
        </nav>
      </header>

      <main style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "120px 32px 160px"
      }}>
        {children}
      </main>
    </div>
  );
}
