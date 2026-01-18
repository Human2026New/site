"use client";

import { useEffect, useState } from "react";

const phrases = [
  "O tempo é a moeda mais valiosa.",
  "Nada é mais raro do que presença.",
  "O futuro constrói-se com tempo.",
  "Human não corre. Observa.",
  "Valor nasce da presença humana.",
];

export default function Gate({
  onAscend,
}: {
  onAscend: () => void;
}) {
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  }, []);

  return (
    <div className="gate">
      <div className="dust layer1" />
      <div className="dust layer2" />
      <div className="dust layer3" />

      <div className="gate-center">
        <img
          src="/hum-symbol.png"
          alt="Human"
          className="symbol"
        />

        <h1 className="title">Human</h1>

        <p className="phrase">{phrase}</p>

        <button className="ascend" onClick={onAscend}>
          ASCENDER
        </button>
      </div>
    </div>
  );
}
