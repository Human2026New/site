export default function FasesPage() {
  const gold = "#e6c36a";

  const fases = [
    {
      phase: "Fase I",
      title: "Fundação",
      text: `
Antes de qualquer sistema existir,
existe uma decisão humana.

Nesta fase, o HUMAN nasce como intenção,
não como produto.

É aqui que se recusa a lógica da pressa,
da extração e da promessa vazia.

O HUMAN afirma algo simples e radical:
o tempo humano tem valor
antes de gerar lucro,
antes de gerar dados,
antes de gerar crescimento.

Esta fase não cria utilizadores.
Cria sentido.
Cria direção.
Cria confiança silenciosa.
      `,
    },
    {
      phase: "Fase II",
      title: "Presença",
      text: `
O humano entra no sistema —
não para produzir mais,
mas para existir com consciência.

A app HUMAN nasce como espaço de reconhecimento,
não de vigilância.

Aqui, o tempo vivido deixa de ser invisível.
A presença conta.
O contributo real conta.
A constância conta.

Não há gamificação agressiva.
Não há metas artificiais.
Há apenas espaço para estar,
contribuir,
e ser reconhecido.

Nesta fase, as pessoas começam a sentir:
“o meu tempo aqui não é desperdiçado.”
      `,
    },
    {
      phase: "Fase III",
      title: "HUM",
      text: `
Quando a presença é reconhecida,
o valor emerge naturalmente.

A HUM não é lançada.
Não é promovida.
Não é prometida.

Ela surge como consequência inevitável
do tempo humano vivido com intenção.

Cada HUM representa algo raro:
tempo real,
presença consciente,
vida não acelerada.

Não existe pré-mineração.
Não existe vantagem inicial.
Não existe extração.

Aqui nasce um novo desejo:
não acumular,
mas participar.
Não especular,
mas trocar.
Não correr,
mas sustentar.
      `,
    },
    {
      phase: "Fase IV",
      title: "Comunidade",
      text: `
O HUMAN deixa de ser um projeto.
Torna-se um ecossistema vivo.

As decisões deixam de ser técnicas
e passam a ser humanas.

A comunidade define ritmos,
limites,
prioridades.

O sistema já não pertence
a quem o criou,
mas a quem o vive.

É aqui que surge algo raro:
confiança coletiva.
Responsabilidade partilhada.
Continuidade sem pressão.

Nesta fase, o HUMAN prova
que pode existir no tempo —
sem pressa,
sem colapso,
sem trair a sua origem.
      `,
    },
  ];

  return (
    <main
      style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.95)),
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
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <div style={{ maxWidth: 820 }}>
          <h1
            style={{
              fontSize: "clamp(3.6rem, 8vw, 5.8rem)",
              letterSpacing: "0.34em",
              color: gold,
              fontWeight: 400,
              marginBottom: 28,
              textShadow: `
                0 0 18px rgba(230,195,106,0.55),
                0 0 42px rgba(230,195,106,0.35),
                0 0 90px rgba(230,195,106,0.18)
              `,
            }}
          >
            O HUMAN
          </h1>

          <p
            style={{
              fontSize: "clamp(1.2rem, 2.4vw, 1.6rem)",
              lineHeight: 1.7,
              opacity: 0.9,
            }}
          >
            Não cresce em linha reta.
            <br />
            Evolui ao ritmo da consciência humana.
          </p>
        </div>
      </section>

      {/* =========================
          INTRO
      ========================= */}
      <section
        style={{
          maxWidth: 880,
          margin: "0 auto",
          padding: "0 24px 120px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1.15rem", opacity: 0.85 }}>
          As fases do HUMAN não são marcos técnicos.
          São ciclos de maturidade.
        </p>
        <p style={{ marginTop: 18, opacity: 0.7 }}>
          Cada fase prepara a seguinte.
          Nenhuma é apressada.
          Nenhuma é descartada.
        </p>
      </section>

      {/* =========================
          FASES — LINHA VIVA
      ========================= */}
      <section
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "0 24px 160px",
          display: "flex",
          flexDirection: "column",
          gap: 140,
        }}
      >
        {fases.map((item, i) => (
          <div
            key={i}
            style={{
              borderLeft: `2px solid ${gold}`,
              paddingLeft: 36,
            }}
          >
            <span
              style={{
                color: gold,
                letterSpacing: "0.28em",
                fontSize: "0.75rem",
              }}
            >
              {item.phase}
            </span>

            <h3
              style={{
                fontSize: "1.6rem",
                marginTop: 14,
                marginBottom: 22,
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                opacity: 0.85,
                maxWidth: 620,
                lineHeight: 1.8,
                whiteSpace: "pre-line",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* =========================
          FECHO
      ========================= */}
      <section
        style={{
          padding: "120px 24px 180px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1.3rem" }}>
          O HUMAN não promete resultados rápidos.
        </p>
        <p
          style={{
            color: gold,
            marginTop: 16,
            fontSize: "1.35rem",
          }}
        >
          Promete sentido.
          <br />
          E tempo suficiente para valer a pena.
        </p>
      </section>
    </main>
  );
}
