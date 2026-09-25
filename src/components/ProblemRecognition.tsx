const PROBLEMS = [
  "Bookings getting lost in WhatsApp?",
  "Orders being tracked manually?",
  "Spreadsheets becoming difficult to manage?",
  "Customers waiting for manual replies?",
  "Business processes that need a proper system?",
];

const ProblemRecognition = () => {
  return (
    <section
      id="problem"
      style={{
        background: "#F5F3EE",
        paddingTop: "88px",
        paddingBottom: "88px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#5F7A72",
          marginBottom: "20px",
          marginTop: 0,
        }}>
          Sound familiar?
        </p>

        <h2 style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
          lineHeight: 1.2,
          color: "#1A1F24",
          margin: 0,
          maxWidth: "640px",
        }}>
          Is your business dealing with…
        </h2>

        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: "40px 0 0",
          display: "grid",
          gap: "1px",
          background: "rgba(26,31,36,0.08)",
          border: "1px solid rgba(26,31,36,0.08)",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          {PROBLEMS.map((problem) => (
            <li
              key={problem}
              style={{
                background: "#FBFAF7",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
                fontWeight: 600,
                color: "#1A1F24",
              }}
            >
              <span style={{
                color: "#E8623D",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "14px",
                flexShrink: 0,
              }}>
                →
              </span>
              {problem}
            </li>
          ))}
        </ul>

        <p style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1rem",
          color: "#6B7178",
          lineHeight: 1.7,
          maxWidth: "560px",
          marginTop: "36px",
          marginBottom: 0,
        }}>
          If any of this sounds like your day-to-day, that's exactly what
          we build systems to fix — see how below.
        </p>
      </div>
    </section>
  );
};

export default ProblemRecognition;
