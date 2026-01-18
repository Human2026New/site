import "./home.css";

export default function HomePage() {
  const gold = "#e6c36a";

  return (
    <main className="home-root">
      {/* =========================
          HERO
      ========================= */}
      <section className="hero section reveal">
        <img
          src="/hum-symbol.png"
          alt="Human"
          className="hero-symbol"
        />

        <h1 className="hero-title">
          O dinheiro aprendeu
          <br />
          a medir tudo.
          <span>Menos o humano.</span>
        </h1>

        <p className="hero-sub">
          Nada é mais raro do que presença.
        </p>
      </section>

      {/* =========================
          MANIFESTO
      ========================= */}
      <section className="trio section reveal">
        <div className="card">
          <h3>O ERRO</h3>
          <p>Produção.</p>
          <p>Eficiência.</p>
          <p>Crescimento.</p>
          <p className="muted">
            Tudo foi medido.
            <br />
            Até o que não devia.
          </p>
        </div>

        <div className="card">
          <h3>A INVERSÃO</h3>
          <p><strong>O HUMAN nasce para inverter.</strong></p>
          <p className="muted">
            Valor não vem da pressa.
            <br />
            Vem da presença.
          </p>
        </div>

        <div className="card">
          <h3>O PRINCÍPIO</h3>
          <p>Tempo vivido.</p>
          <p>Contributo real.</p>
          <p>Presença consciente.</p>
        </div>
      </section>

      {/* =========================
          APP + HUM
      ========================= */}
      <section className="split section reveal">
        <div>
          <h2>A APP HUMAN</h2>
          <p>
            A app HUMAN não pede produtividade.
            <br />
            Não pede performance.
            <br />
            Não pede pressa.
          </p>
          <span>
            Apenas presença.
            <br />
            Apenas verdade.
          </span>
        </div>

        <div>
          <h2>A HUM</h2>
          <p>
            A HUM não é minerada.
            <br />
            Não é prometida.
            <br />
            Não é inflacionada artificialmente.
          </p>
          <span>
            Surge do tempo humano
            <br />
            reconhecido.
          </span>
        </div>
      </section>

      {/* =========================
          FUTURO — 20 ANOS
      ========================= */}
      <section className="future section reveal">
        <h3>DAQUI A 20 ANOS</h3>

        <p className="future-main">
          Se o HUMAN funcionar,
          <br />
          o mundo não será mais rápido.
        </p>

        <p className="future-muted">
          Será mais justo.
        </p>

        <p>
          Pessoas poderão trocar valor
          <br />
          sem serem exploradas.
        </p>

        <p>
          Comunidades poderão existir
          <br />
          sem depender de extração constante.
        </p>

        <p>
          O tempo vivido deixará
          <br />
          de ser invisível.
        </p>

        <p className="future-gold">
          Talvez este seja o primeiro
          <br />
          sistema económico
          <br />
          que não tem medo do humano.
        </p>
      </section>

      {/* =========================
          CTA SILENCIOSO
      ========================= */}
      <section className="cta section reveal">
        <p className="cta-main">
          Nem tudo começa grande.
          <br />
          Algumas coisas começam certas.
        </p>

        <p className="cta-gold">
          Junta-te antes de existir.
        </p>

        <p className="cta-muted">
          O HUMAN não está completo.
          <br />
          Está a nascer.
        </p>
      </section>

      {/* =========================
          FECHO
      ========================= */}
      <section className="end section reveal">
        <p>
          O HUMAN não pede pressa.
        </p>
        <span>
          Apenas presença.
        </span>
      </section>
    </main>
  );
}
