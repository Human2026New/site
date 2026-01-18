"use client";

import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESKTOP MENU */}
      <nav className="menu-desktop">
        <Link href="/home">HOME</Link>
        <Link href="/human">HUMAN</Link>
        <Link href="/app">APP</Link>
        <Link href="/hum">HUM</Link>
        <Link href="/fases">FASES</Link>
        <Link href="/faq">FAQ</Link>
      </nav>

      {/* MOBILE BUTTON */}
      <button
        className="menu-mobile-btn"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* MOBILE OVERLAY */}
      {open && (
        <div className="menu-overlay">
          <button
            className="menu-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          <Link href="/home" onClick={() => setOpen(false)}>HOME</Link>
          <Link href="/human" onClick={() => setOpen(false)}>HUMAN</Link>
          <Link href="/app" onClick={() => setOpen(false)}>APP</Link>
          <Link href="/hum" onClick={() => setOpen(false)}>HUM</Link>
          <Link href="/fases" onClick={() => setOpen(false)}>FASES</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
        </div>
      )}
    </>
  );
}
