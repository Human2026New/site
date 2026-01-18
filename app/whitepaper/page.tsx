export default function WhitepaperPage() {
  const gold = "#e6c36a";

  const sections = [
    {
      title: "Introdução",
      text: "O HUMAN nasce porque o dinheiro não consegue medir tudo. O tempo humano, a presença e o contributo real foram excluídos dos sistemas de valor."
    },
    {
      title: "O problema global",
      text: "Produção, eficiência e crescimento dominaram o conceito de valor. O progresso aconteceu, mas o humano ficou para trás."
    },
    {
      title: "O que é o HUMAN",
      text: "Um sistema de reconhecimento de valor humano. Humano antes de tecnológico. Ético antes de económico."
    },
    {
      title: "Os Ciclos do HUMAN",
      text: "O HUMAN evolui por fases de maturidade: Fundação, Presença, HUM e Comunidade. Nenhuma é apressada. Nenhuma é descartada."
    },
    {
      title: "A HUM",
      text: "A HUM é uma unidade de valor humano. Não é prometida nem minerada. Surge apenas quando existe tempo humano reconhecido."
    },
    {
      title: "Tecnologia",
      text: "Blockchain é usada como ferramenta. Transparência, integridade e auditabilidade ao serviço do humano."
    },
    {
      title: "Governança",
      text: "O HUMAN evolui para governança distribuída, com decisões humanas e sem automatismos cegos."
    },
    {
      title: "Visão",
      text: "O HUMAN não substitui o mundo. Reequilibra-o. Se novas formas de valor forem necessárias, emergirão naturalmente."
    },
    {
      title: "Nota ética",
      text: "O HUMAN não promete resultados. Promete coerência, transparência e tempo suficiente para existir."
    }
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.95)),
          url("/bg-human.jpg")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
        <h1 style={{
          fontSize: "clamp(3rem,6vw,4.5rem)",
          letterSpacing: "0.32em",
          color: gold,
          textShadow: "0 0 32px rgba(230,195,106,0.45)"
        }}>
          WHITEPAPER
        </h1>
      </section>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 140px", display: "flex", flexDirection: "column", gap: 72 }}>
        {sections.map((s, i) => (
          <div key={i} style={{ borderLeft: `2px solid ${gold}`, paddingLeft: 32 }}>
            <h2 style={{ color: gold }}>{s.title}</h2>
            <p style={{ opacity: 0.85, lineHeight: 1.7 }}>{s.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
