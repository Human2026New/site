import "@/styles/hum.css";

export default function HumPage() {
  return (
    <main className="hum-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="hum-hero fade-up">
        <h1>HUM</h1>
        <p>Unidade de valor humano · Tempo vivido · Presença reconhecida</p>
      </section>

      {/* =========================
          BLOCOS PRINCIPAIS
      ========================= */}
      <section className="hum-block fade-up delay-1">
        <div className="hum-image">
          <img src="/images/hum-symbol.png" alt="Símbolo HUM" />
        </div>
        <div className="hum-text">
          <h3>O que é a HUM</h3>
          <p>
            A HUM é uma unidade de valor humano baseada em tempo vivido e
            presença consciente.
          </p>
          <p>
            Não é dinheiro tradicional, não é ativo financeiro e não foi criada
            para substituir moedas existentes.
          </p>
          <p>
            Não pertence a bancos, empresas ou governos.
            Não tem donos.
            Não pode ser manipulada por decisões centralizadas.
          </p>
        </div>
      </section>

      <section className="hum-block reverse fade-up delay-2">
        <div className="hum-image">
          <img src="/images/hum-birth.png" alt="Criação da HUM" />
        </div>
        <div className="hum-text">
          <h3>Supply & Criação</h3>
          <p>Supply inicial: zero.</p>
          <p>Nenhuma HUM existe antes de ser reconhecida.</p>
          <p>
            Cada HUM nasce exclusivamente através de Prova de Presença
            (PoL — Proof of Living).
          </p>
          <p>
            Sem pré-mineração.
            Sem distribuição a equipas.
            Sem investidores iniciais.
          </p>
        </div>
      </section>

      <section className="hum-block fade-up delay-3">
        <div className="hum-image">
          <img src="/images/hum-usage.png" alt="Uso da HUM" />
        </div>
        <div className="hum-text">
          <h3>Como funciona</h3>
          <p>
            A Prova de Presença não mede cliques,
            não mede atenção artificial
            nem produtividade forçada.
          </p>
          <p>
            O reconhecimento é gradual,
            transparente
            e auditável.
          </p>
          <p>
            A HUM pode ser adquirida por:
            <br />— Presença reconhecida na app HUMAN
            <br />— Troca voluntária entre pessoas
            <br />— Contextos aceites pela comunidade
          </p>
        </div>
      </section>

      {/* =========================
          ESPECIFICAÇÃO COMPLETA
      ========================= */}
      <section className="hum-spec fade-up delay-3">
        <h3 className="hum-spec-title">
          HUM · Especificação completa
        </h3>

        <div className="hum-spec-grid">

          <div className="hum-spec-card">
            <h4>Utilidade</h4>
            <p>Reconhecer valor humano real.</p>
            <p>Troca entre pessoas, comunidades e serviços conscientes.</p>
            <p>Existe para circular, não para acumular.</p>
          </div>

          <div className="hum-spec-card">
            <h4>Supply</h4>
            <p>Variável e orgânico.</p>
            <p>Cresce apenas com tempo humano válido.</p>
            <p>Sem limite máximo artificial.</p>
          </div>

          <div className="hum-spec-card">
            <h4>Governança</h4>
            <p>Não controlada por bancos, empresas ou governos.</p>
            <p>Sem entidade central.</p>
            <p>O valor emerge do uso real e da confiança coletiva.</p>
          </div>

          <div className="hum-spec-card">
            <h4>Valor</h4>
            <p>Valor inicial de referência: €0,10.</p>
            <p>Não fixo. Não garantido.</p>
            <p>Evolui com adoção real e uso contínuo.</p>
          </div>

          <div className="hum-spec-card">
            <h4>Evolução</h4>
            <p>
              À medida que mais HUM são criadas através de presença humana real,
              o ecossistema ganha utilidade.
            </p>
            <p>Valorização nunca forçada.</p>
            <p>Nunca baseada em escassez artificial.</p>
          </div>

        </div>

        <p className="hum-spec-footer">
          A HUM não promete lucros.
          Não pede pressa.
          Não garante ganhos.
          Reconhece apenas presença humana real.
        </p>
      </section>

    </main>
  );
}
