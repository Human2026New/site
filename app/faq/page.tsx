export default function FaqPage() {
  const gold = "#e6c36a";

  const faqs = [
    {
      q: "Isto é um investimento financeiro?",
      a: `
Não.

O HUMAN não foi criado para gerar retornos financeiros,
não promete lucros
e não funciona como produto de investimento.

A HUM não é vendida como ativo especulativo.
Surge apenas como reconhecimento de tempo humano vivido.
      `,
    },
    {
      q: "Então porque razão isto tem uma unidade de valor (HUM)?",
      a: `
Porque todo o sistema de trocas precisa de uma linguagem comum.

A HUM não representa dinheiro.
Representa tempo humano reconhecido.

É uma unidade de valor humano,
não um instrumento financeiro.
      `,
    },
    {
      q: "Isto substitui o dinheiro tradicional?",
      a: `
Não hoje.

O dinheiro financeiro nasceu para resolver problemas
de troca numa era específica da humanidade.

O HUMAN não nasce para competir com esse sistema,
mas para criar algo que hoje não existe:
valor baseado em tempo humano vivido.

Se, no futuro, esse valor se tornar suficiente
para sustentar trocas reais,
a transição acontecerá de forma natural —
não por imposição,
mas por escolha.
      `,
    },
    {
      q: "Isto é uma criptomoeda?",
      a: `
Tecnicamente, a HUM pode utilizar tecnologia blockchain.
Conceptualmente, não é uma criptomoeda tradicional.

Não existe mineração.
Não existe promessa de valorização.
Não existe extração.

A tecnologia serve o humano —
não o contrário.
      `,
    },
    {
      q: "Quem controla o HUMAN?",
      a: `
O HUMAN não pertence a bancos,
não pertence a governos,
não pertence a investidores.

O sistema evolui com base em decisões humanas conscientes.
A governança é pensada para ser distribuída,
gradual
e transparente.

Ninguém pode acelerar o HUMAN sozinho.
      `,
    },
    {
      q: "Porque devo esperar por algo que ainda está a ser construído?",
      a: `
Porque sistemas que mudam tudo
não nascem prontos.

O HUMAN está a construir uma base de valor
que não depende de dívida,
de escassez artificial
nem de exploração do tempo humano.

Esperar aqui não é passividade.
É maturação.
      `,
    },
    {
      q: "O que acontece se isto falhar?",
      a: `
Nada é retirado às pessoas.

Não existe capital capturado.
Não existe promessa quebrada.
Não existe perda imposta.

O HUMAN não pede fé cega.
Pede presença consciente.
      `,
    },
    {
      q: "Porque isto existe, afinal?",
      a: `
Porque o mundo aprendeu a medir tudo —
produção,
eficiência,
crescimento.

Mas esqueceu-se de reconhecer
o tempo vivido,
a presença
e o humano.

O HUMAN existe para reequilibrar essa equação.
      `,
    },
  ];

  return (
    <main
      style={{
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
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <div style={{ maxWidth: 760 }}>
          <h1
            style={{
              fontSize: "clamp(2.8rem, 6vw, 4.2rem)",
              letterSpacing: "0.32em",
              color: gold,
              fontWeight: 400,
              textShadow: `
                0 0 18px rgba(230,195,106,0.45),
                0 0 42px rgba(230,195,106,0.25)
              `,
            }}
          >
            PERGUNTAS FREQUENTES
          </h1>

          <p
            style={{
              marginTop: 28,
              fontSize: "1.05rem",
              opacity: 0.85,
              lineHeight: 1.6,
            }}
          >
            Dúvidas são naturais.  
            <br />
            Clareza também faz parte do HUMAN.
          </p>
        </div>
      </section>

      {/* =========================
          FAQ CONTEÚDO
      ========================= */}
      <section
        style={{
          padding: "80px 24px 140px",
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 56,
        }}
      >
        {faqs.map((item, i) => (
          <div
            key={i}
            style={{
              borderLeft: `2px solid ${gold}`,
              paddingLeft: 32,
            }}
          >
            <h3
              style={{
                color: gold,
                fontSize: "1.05rem",
                marginBottom: 14,
              }}
            >
              {item.q}
            </h3>

            <p
              style={{
                opacity: 0.85,
                lineHeight: 1.7,
                whiteSpace: "pre-line",
                maxWidth: 720,
              }}
            >
              {item.a}
            </p>
          </div>
        ))}
      </section>

      {/* =========================
          FECHO
      ========================= */}
      <section
        style={{
          padding: "80px 24px 140px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1.2rem" }}>
          O HUMAN não promete atalhos.
        </p>
        <p style={{ color: gold, marginTop: 14 }}>
          Promete coerência.
          <br />
          E tempo suficiente para existir.
        </p>
      </section>
      <p style={{ marginTop: 48, textAlign: "center" }}>
  Para uma explicação completa e estruturada,  
  consulta o <a href="/whitepaper" style={{ color: gold }}>Whitepaper do HUMAN</a>.
</p>

    </main>
  );
}
