"use client";

import Link from "next/link";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaBook,
  FaCubes,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #e6c36a, #f5d98c)",
        color: "#000",
        padding: "10px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 20px rgba(230,195,106,0.45)",
      }}
    >
      {/* ================= LEFT — EXPLORER / WHITEPAPER / SOCIALS ================= */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <a href="https://explorer.example.com" target="_blank">
          <FaCubes />
        </a>

        <Link href="/whitepaper">
          <FaBook />
        </Link>

        <a href="https://t.me/human" target="_blank">
          <FaTelegramPlane />
        </a>

        <a href="https://github.com/human" target="_blank">
          <FaGithub />
        </a>

        <a href="https://twitter.com/human" target="_blank">
          <FaTwitter />
        </a>

        <a href="https://instagram.com/human" target="_blank">
          <FaInstagram />
        </a>

        <a href="https://linkedin.com/company/human" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>

      {/* ================= RIGHT — SITE NAV ================= */}
      <nav style={{ display: "flex", gap: 20, fontWeight: 600 }}>
        <Link href="/home">Home</Link>
        <Link href="/human">Human</Link>
        <Link href="/app">App</Link>
        <Link href="/hum">HUM</Link>
        <Link href="/fases">Fases</Link>
        <Link href="/faq">FAQ</Link>
      </nav>
    </div>
  );
}
