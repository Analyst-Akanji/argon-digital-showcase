const STATS = [
  { value: "3", label: "Platforms Shipped" },
  { value: "2", label: "Active Engagements" },
  { value: "PM", label: "Certified, Sept 2025" },
  { value: "Full-Stack", label: "React · Supabase · Vercel" },
];

const Hero = () => {
  return (
    <section
      id="top"
      style={{
        background: "#0F1419",
        paddingTop: "108px",
        paddingBottom: "96px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#7C9A92",
          marginBottom: "24px",
          marginTop: 0,
        }}>
          Digital Product Studio — Osogbo, Nigeria
        </p>

        <h1 style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
          lineHeight: 1.08,
          color: "#F5F3EE",
          maxWidth: "780px",
          margin: 0,
        }}>
          We think like product managers.
          <br />
          We build like engineers.
        </h1>

        <p style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(1rem, 2vw, 1.1rem)",
          color: "rgba(245,243,238,0.6)",
          lineHeight: 1.7,
          maxWidth: "560px",
          marginTop: "28px",
          marginBottom: 0,
        }}>
          Argon Industries pairs structured product strategy with hands-on
          full-stack development — one person, both disciplines, every
          project shipped end to end.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "36px", alignItems: "center" }}>
          <a
            href="#work"
            style={{
              display: "inline-block",
              background: "#E8623D",
              color: "#F5F3EE",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              padding: "14px 28px",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            See the Work
          </a>
          <a
            href="#approach"
            style={{
              color: "#F5F3EE",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              textDecoration: "none",
              borderBottom: "1px solid rgba(245,243,238,0.3)",
              paddingBottom: "2px",
            }}
          >
            How we work
          </a>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "8px",
          overflow: "hidden",
          marginTop: "64px",
        }}>
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                background: "#0F1419",
                padding: "20px",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <p style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "20px",
                color: "#E8623D",
                margin: 0,
              }}>
                {stat.value}
              </p>
              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                color: "rgba(245,243,238,0.5)",
                marginTop: "4px",
                marginBottom: 0,
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
