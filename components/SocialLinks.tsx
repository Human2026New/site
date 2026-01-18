"use client";

import {
  Twitter,
  Send,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const gold = "#e6c36a";

export default function SocialLinks() {
  return (
    <div
      style={{
        position: "fixed",
        top: 18,
        right: 24,
        display: "flex",
        gap: 16,
        alignItems: "center",
        zIndex: 50,
      }}
    >
      <Icon href="https://x.com">
        <Twitter size={18} strokeWidth={1.2} />
      </Icon>

      <Icon href="https://t.me">
        <Send size={18} strokeWidth={1.2} />
      </Icon>

      <Icon href="https://github.com">
        <Github size={18} strokeWidth={1.2} />
      </Icon>

      <Icon href="https://linkedin.com">
        <Linkedin size={18} strokeWidth={1.2} />
      </Icon>

      <Icon href="https://instagram.com">
        <Instagram size={18} strokeWidth={1.2} />
      </Icon>
    </div>
  );
}

function Icon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
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
