import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL, LAST_UPDATED, WHATSAPP_DISPLAY, WHATSAPP_URL } from "./legalConfig";

const CREAM = "#F5F3EE";
const ORANGE = "#E8623D";
const MUTED = "rgba(245,243,238,0.72)";

export function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div style={{ minHeight: "100vh", background: "#0F1419", color: CREAM, display: "flex", flexDirection: "column" }}>
      <header style={{ padding: "24px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <Link to="/" aria-label="Argon Industries home" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
          <Link
            to="/"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "12px",
              color: "rgba(245,243,238,0.6)",
              textDecoration: "none",
            }}
          >
            &larr; Back to home
          </Link>
        </div>
      </header>

      <main style={{ flex: 1, padding: "56px 24px 72px" }}>
        <article style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              lineHeight: 1.2,
              margin: "0 0 8px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(245,243,238,0.45)",
              margin: "0 0 28px",
            }}
          >
            Last updated: {LAST_UPDATED}
          </p>
          {intro && <P>{intro}</P>}
          <div style={{ marginTop: "36px" }}>{children}</div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ marginBottom: "32px" }}>
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "18px",
          color: CREAM,
          margin: "0 0 12px",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "15px",
        lineHeight: 1.75,
        color: MUTED,
        margin: "0 0 12px",
      }}
    >
      {children}
    </p>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "15px",
        lineHeight: 1.75,
        color: MUTED,
        margin: "0 0 12px",
        paddingLeft: "22px",
      }}
    >
      {items.map((item) => (
        <li key={item} style={{ marginBottom: "6px" }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function RouterTextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} style={{ color: ORANGE, textDecoration: "underline" }}>
      {children}
    </Link>
  );
}

export function ContactDetails() {
  const linkStyle = { color: ORANGE, textDecoration: "underline" };
  return (
    <ul
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "15px",
        lineHeight: 1.75,
        color: MUTED,
        margin: 0,
        paddingLeft: "22px",
      }}
    >
      <li>
        WhatsApp:{" "}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          {WHATSAPP_DISPLAY}
        </a>
      </li>
      <li>
        Email:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>
          {CONTACT_EMAIL}
        </a>
      </li>
    </ul>
  );
}
