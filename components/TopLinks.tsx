"use client";

import {
  Blocks,
  Twitter,
  Send,
  Github,
  Linkedin,
  Instagram,
  FileText,
} from "lucide-react";

const gold = "#e6c36a";

export default function TopLinks() {
  return (
    <div
      style={{
        position: "fixed",
        top: 18,
        left: 24,
        display: "flex",
        gap: 16,
        alignItems: "center",
        zIndex: 50,
      }}
    >
      <Icon href="#" label="Block Explorer">
        <Blocks size={18} strokeWidth={1.2} />
      </Icon>

      <Icon href="/whitepaper" label="Whitepaper">
        <FileText size={18} strokeWidth={1.2} />
      </Icon>
    </div>
  );
}

function Icon({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      title={label}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noreferrer"
      style={{
        color: gold,
        opacity: 0.7,
        transition: "opacity 0.25s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
    >
      {children}
    </a>
  );
}
