import { Mail } from "lucide-react";

const WHATSAPP_NUMBER_DISPLAY = "0808 682 5973";
const WHATSAPP_URL = "https://wa.me/2348086825973";
const EMAIL_ADDRESS = "ibitowaemmanuel@gmail.com";
const EMAIL_URL = "mailto:ibitowaemmanuel@gmail.com";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" style={{ color: "#25D366", flexShrink: 0 }}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const Contact = () => (
  <section id="contact" style={{ background: "#0F1419", padding: "80px 24px" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Stack on mobile, 2 columns on desktop */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "40px",
      }}
        className="md:grid-cols-2-contact"
      >
        <div>
          <p style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            color: "#E8623D",
            marginBottom: "16px",
            marginTop: 0,
          }}>
            Start a Project
          </p>
          <h2 style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            lineHeight: 1.2,
            color: "#F5F3EE",
            margin: 0,
          }}>
            Tell us what you are building.
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            color: "rgba(245,243,238,0.55)",
            lineHeight: 1.7,
            maxWidth: "100%",
            marginTop: "20px",
            marginBottom: 0,
          }}>
            Share a few details about your business and what you need. A proposal and quote typically follow within 24 hours.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "16px" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "6px",
              padding: "16px 20px",
              color: "#F5F3EE",
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            <WhatsAppIcon />
            Chat on WhatsApp — {WHATSAPP_NUMBER_DISPLAY}
          </a>
          <a
            href={EMAIL_URL}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "6px",
              padding: "16px 20px",
              color: "#F5F3EE",
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            <Mail size={18} style={{ flexShrink: 0 }} />
            {EMAIL_ADDRESS}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textAlign: "center" as const,
              background: "#E8623D",
              color: "#F5F3EE",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              padding: "14px 28px",
              borderRadius: "6px",
              textDecoration: "none",
              marginTop: "8px",
            }}
          >
            Start a Project
          </a>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            color: "rgba(245,243,238,0.4)",
            margin: 0,
            textAlign: "center" as const,
          }}>
            Based in Osogbo, Nigeria. Serving clients nationwide.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
