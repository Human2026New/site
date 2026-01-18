import "@/styles/cycles.css";
export default function HumanPage() {
  const gold = "#e6c36a";

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.94)),
          url("/bg-human.jpg")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      {/* =========================
    HERO
========================= */}
<section
  style={{
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 24px",
  }}
>
  <div style={{ maxWidth: 860 }}>
    <h1
      style={{
        fontSize: "clamp(3.8rem, 8vw, 6.2rem)",
        letterSpacing: "0.32em",
        color: gold,
        fontWeight: 400,
        margin: 0,
        textShadow: `
          0 0 18px rgba(230,195,106,0.45),
          0 0 42px rgba(230,195,106,0.25),
          0 0 80px rgba(230,195,106,0.15)
        `,
      }}
    >
      HUMAN
    </h1>

    <p
      style={{
        marginTop: 28,
        fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
        lineHeight: 1.6,
        opacity: 0.9,
      }}
    >
      Um sistema criado para devolver valor
      <br />
      ao tempo humano vivido.
    </p>
  </div>
</section>

      {/* =========================
          PORQUE O HUMAN EXISTE
      ========================= */}
      <section
        style={{
          padding: "96px 24px",
          maxWidth: 960,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: gold, marginBottom: 32 }}>
          Porque o HUMAN existe
        </h3>

        <p>
          O mundo aprendeu a medir tudo.
        </p>
        <p style={{ opacity: 0.85 }}>
          Produção.
          <br />
          Eficiência.
          <br />
          Crescimento.
        </p>

        <p style={{ marginTop: 32 }}>
          Mas esqueceu-se de reconhecer
        </p>
        <p style={{ opacity: 0.85 }}>
          o tempo vivido,
          <br />
          a presença,
          <br />
          o humano.
        </p>
      </section>

      {/* =========================
          A INVERSÃO
      ========================= */}
      <section
        style={{
          padding: "96px 24px",
          maxWidth: 860,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: gold, marginBottom: 28 }}>
          A inversão do HUMAN
        </h3>

        <p>
          O HUMAN não tenta acelerar o mundo.
        </p>
        <p>
          Não tenta corrigir pessoas.
        </p>
        <p style={{ opacity: 0.85 }}>
          Apenas muda o ponto de referência.
        </p>

        <p style={{ marginTop: 24 }}>
          Em vez de medir produtividade,
          <br />
          reconhece presença humana real.
        </p>
      </section>

      {/* =========================
          O QUE É O HUMAN
      ========================= */}
      <section
        style={{
          padding: "96px 24px",
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 56,
        }}
      >
        <div>
          <h3 style={{ color: gold }}>O que é o HUMAN</h3>
          <p>Um sistema humano antes de ser tecnológico.</p>
          <p>Uma nova base de valor.</p>
          <p>Uma lógica que reconhece tempo vivido.</p>
          <p>
            Um ecossistema onde pessoas,
            comunidades e tecnologia
            coexistem sem extração.
          </p>
        </div>

        <div>
          <h3 style={{ color: gold }}>Para que serve</h3>
          <p>Para devolver dignidade ao tempo humano.</p>
          <p>Para permitir trocas justas.</p>
          <p>Para criar economias mais lentas e conscientes.</p>
          <p>
            Para sustentar a HUM
            como unidade de valor humano.
          </p>
        </div>

        <div>
          <h3 style={{ color: gold }}>O que não é</h3>
          <p>Não é produtividade.</p>
          <p>Não é vigilância.</p>
          <p>Não é promessa financeira.</p>
          <p>Não é extração de atenção ou dados.</p>
        </div>
      </section>

      {/* =========================
          O QUE O HUMAN MUDA
      ========================= */}
      <section
        style={{
          padding: "96px 24px",
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: gold, marginBottom: 28 }}>
          O que o HUMAN vem mudar
        </h3>

        <p>
          Muda a forma como o valor é criado.
        </p>
        <p>
          Muda a forma como o tempo é respeitado.
        </p>
        <p>
          Muda a relação entre pessoas e sistemas.
        </p>

        <p style={{ marginTop: 28, opacity: 0.85 }}>
          Não substitui o mundo.
          <br />
          Reequilibra-o.
        </p>
      </section>
      {/* =========================
    LIGAÇÃO HUMAN ↔ HUM ↔ APP
========================= */}
<section
  style={{
    padding: "120px 24px",
    maxWidth: 1100,
    margin: "0 auto",
    textAlign: "center",
  }}
>
  <h3 style={{ color: gold, marginBottom: 56 }}>
    Como tudo se liga
  </h3>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 48,
      alignItems: "stretch",
    }}
  >
    {/* HUMAN */}
    <div>
      <h4 style={{ color: gold, letterSpacing: "0.18em" }}>
        HUMAN
      </h4>
      <p style={{ opacity: 0.85, marginTop: 16 }}>
        O sistema.
      </p>
      <p style={{ opacity: 0.85 }}>
        A visão.
      </p>
      <p style={{ opacity: 0.85 }}>
        O reconhecimento do tempo humano.
      </p>
      <p style={{ marginTop: 20 }}>
        Define <strong>o porquê</strong>.
      </p>
    </div>

    {/* HUM */}
    <div>
      <h4 style={{ color: gold, letterSpacing: "0.18em" }}>
        HUM
      </h4>
      <p style={{ opacity: 0.85, marginTop: 16 }}>
        A unidade de valor humano.
      </p>
      <p style={{ opacity: 0.85 }}>
        Tempo vivido reconhecido.
      </p>
      <p style={{ opacity: 0.85 }}>
        Valor que nasce da presença.
      </p>
      <p style={{ marginTop: 20 }}>
        Define <strong>o valor</strong>.
      </p>
    </div>

    {/* APP */}
    <div>
      <h4 style={{ color: gold, letterSpacing: "0.18em" }}>
        APP
      </h4>
      <p style={{ opacity: 0.85, marginTop: 16 }}>
        A interface.
      </p>
      <p style={{ opacity: 0.85 }}>
        O espaço de reconhecimento.
      </p>
      <p style={{ opacity: 0.85 }}>
        Onde a presença é validada.
      </p>
      <p style={{ marginTop: 20 }}>
        Define <strong>o como</strong>.
      </p>
    </div>
  </div>

  <p
    style={{
      marginTop: 72,
      opacity: 0.9,
      fontSize: "1.05rem",
    }}
  >
    O HUMAN cria o sentido.
    <br />
    A HUM transporta o valor.
    <br />
    A APP torna tudo possível.
  </p>
</section>

{/* =========================
    LIGAÇÃO HUMAN ↔ HUM ↔ APP
========================= */}
<section className="human-link">
  <h3 className="human-link-title">
    Como tudo se liga
  </h3>

  <div className="human-link-grid">

    {/* HUMAN */}
    <a href="/human" className="human-link-card fade-up">
      <h4>HUMAN</h4>
      <p>O sistema.</p>
      <p>A visão.</p>
      <p>O reconhecimento do tempo humano.</p>
      <span>Define o porquê</span>
    </a>

    {/* HUM */}
    <a href="/hum" className="human-link-card fade-up delay-1">
      <h4>HUM</h4>
      <p>A unidade de valor humano.</p>
      <p>Tempo vivido reconhecido.</p>
      <p>Valor que nasce da presença.</p>
      <span>Define o valor</span>
    </a>

    {/* APP */}
    <a href="/app" className="human-link-card fade-up delay-2">
      <h4>APP</h4>
      <p>A interface.</p>
      <p>O espaço de reconhecimento.</p>
      <p>Onde a presença é validada.</p>
      <span>Define o como</span>
    </a>

  </div>

  <p className="human-link-summary fade-up delay-3">
    O HUMAN cria o sentido.  
    A HUM transporta o valor.  
    A APP torna tudo possível.
  </p>
</section>

      {/* =========================
          FECHO
      ========================= */}
      <section
        style={{
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1.25rem" }}>
          O HUMAN não pede pressa.
        </p>
        <p style={{ color: gold, marginTop: 14, fontSize: "1.3rem" }}>
          Apenas presença.
        </p>
      </section>
    </main>
  );

}


