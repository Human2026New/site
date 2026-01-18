"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PHRASES = [
  "O tempo é a moeda mais valiosa.",
  "Nada é mais raro do que presença.",
  "O futuro constrói-se com tempo.",
  "Valor nasce do humano.",
];

export default function GatePage() {
  const router = useRouter();
  const [phrase, setPhrase] = useState("");
  const [fade, setFade] = useState(false);

  // 🔥 IMPORTANTE: frase só no CLIENT (evita hydration error)
  useEffect(() => {
    const random = PHRASES[Math.floor(Math.random() * PHRASES.length)];
    setPhrase(random);
  }, []);

  function ascend() {
    setFade(true);
    setTimeout(() => {
      router.push("/home");
    }, 1200);
  }

  return (
    <div className={`gate ${fade ? "fade-out" : ""}`}>
      {/* Poeira */}
      <div className="dust layer1" />
      <div className="dust layer2" />
      <div className="dust layer3" />

      {/* Centro */}
      <div className="gate-center">
        <img
          src="/hum-symbol.png"
          alt="Human Symbol"
          className="symbol"
        />

        <h1 className="title">Human</h1>

        {phrase && <p className="phrase">{phrase}</p>}

        <button className="ascend" onClick={ascend}>
          ASCENDER
        </button>
      </div>
    </div>
  );
}
