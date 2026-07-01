import Logo from "./Logo";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#0F1419",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "40px 24px",
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
      }}>
        <Logo />

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a
            href="https://www.linkedin.com/in/emmanuel-ibitowa-120026300"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            style={{ color: "rgba(245,243,238,0.5)", textDecoration: "none" }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          <a
            href="https://github.com/Analyst-Akanji"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            style={{ color: "rgba(245,243,238,0.5)", textDecoration: "none" }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>

          <a
            href="mailto:ibitowaemmanuel@gmail.com"
            aria-label="Email"
            style={{ color: "rgba(245,243,238,0.5)", textDecoration: "none" }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>

        <p style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "11px",
          color: "rgba(245,243,238,0.4)",
          margin: 0,
        }}>
          Osogbo, Nigeria — © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
