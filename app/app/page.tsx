"use client";

export default function AppPage() {
  return (
    <main className="app-page">
      {/* =========================
          HERO
      ========================= */}
      <section className="app-hero">
        <h1 className="app-title">A App HUMAN</h1>
        <p className="app-subtitle">O portal do tempo humano.</p>
        <p className="app-tagline">
          Onde a presença é reconhecida.<br />
          Onde o tempo deixa de ser invisível.
        </p>
      </section>

      {/* =========================
          BLOCO 1 — PRESENÇA
      ========================= */}
      <section className="app-block">
        <div className="app-text">
          <h2>Presença</h2>
          <p>
            A app HUMAN não mede cliques.<br />
            Não mede atenção dispersa.
          </p>
          <p>
            Reconhece quando estás presente.<br />
            Quando escolhes estar.
          </p>
        </div>

        <div className="app-image">
          <img src="/mockups/app-1.png" alt="Presença humana" />
        </div>
      </section>

      {/* =========================
          BLOCO 2 — TEMPO
      ========================= */}
      <section className="app-block reverse">
        <div className="app-text">
          <h2>Tempo vivido</h2>
          <p>
            O tempo humano não é infinito.<br />
            E não deve ser tratado como tal.
          </p>
          <p>
            A app HUMAN regista tempo vivido<br />
            com intenção e consciência.
          </p>
        </div>

        <div className="app-image">
          <img src="/mockups/app-2.png" alt="Tempo humano" />
        </div>
      </section>

      {/* =========================
          BLOCO 3 — CONTRIBUTO
      ========================= */}
      <section className="app-block">
        <div className="app-text">
          <h2>Contributo real</h2>
          <p>
            Não tarefas vazias.<br />
            Não gamificação agressiva.
          </p>
          <p>
            Apenas contributo humano real,<br />
            reconhecido com respeito.
          </p>
        </div>

        <div className="app-image">
          <img src="/mockups/app-3.png" alt="Contributo humano" />
        </div>
      </section>

      {/* =========================
          BLOCO 4 — LIGAÇÃO À HUM
      ========================= */}
      <section className="app-block app-center">
        <h2>Ligação à HUM</h2>
        <p className="app-highlight">
          A app é o ponto de ligação<br />
          entre o humano e a HUM.
        </p>
        <p>
          Sem app, não há reconhecimento.<br />
          Sem reconhecimento, não há HUM.
        </p>
      </section>
      
      {/* =========================
          BLOCO FINAL
      ========================= */}
      <section className="app-block app-center app-end">
        <p className="app-final">
          Simples.<br />
          Humana.<br />
          Presente.
        </p>
      </section>
    </main>
  );
}
