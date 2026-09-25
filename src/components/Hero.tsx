import { useEffect, useState } from "react";
import { PROJECTS } from "../data/projects";

const platformsShipped = PROJECTS.length;
const activeEngagements = PROJECTS.filter((p) => p.status === "in-progress").length;

const STATS = [
  { value: String(platformsShipped), label: "Platforms Shipped" },
  { value: String(activeEngagements), label: "Active Engagements" },
  { value: "PM", label: "Certified, Sept 2025" },
  { value: "Full-Stack", label: "React · Supabase · Vercel" },
];

// Drop images into /public/hero/ with these exact filenames (or edit the
// list below to match whatever you use). Any count works — the rotation
// just cycles through however many are listed here.
const HERO_IMAGES = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.jpg",
  "/hero/hero-3.jpg",
  "/hero/hero-4.jpg",
];

const HERO_INTERVAL_MS = 6000;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (HERO_IMAGES.length < 2) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, HERO_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0F1419",
        paddingTop: "108px",
        paddingBottom: "96px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {/* Full-bleed rotating background images */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === activeIndex ? 1 : 0,
              transition: "opacity 1.6s ease-in-out",
            }}
          />
        ))}
        {/* Dark overlay so the existing light text stays readable over any photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15,20,25,0.88) 0%, rgba(15,20,25,0.82) 55%, rgba(15,20,25,0.92) 100%)",
          }}
        />
      </div>

      {/* Content sits above the image/overlay layers */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#7C9A92",
          marginBottom: "24px",
          marginTop: 0,
        }}>
          Custom Business Systems — Osogbo, Nigeria
        </p>

        <h1 style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2rem, 5vw, 3.8rem)",
          lineHeight: 1.08,
          color: "#F5F3EE",
          maxWidth: "780px",
          margin: 0,
        }}>
          Your business has outgrown
          <br />
          WhatsApp, spreadsheets, and
          <br />
          manual processes.
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
          We design and build custom systems that make your operations
          easier to run and your customers easier to serve — one person,
          product strategy and full-stack engineering, every project
          shipped end to end.
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

        {/* Stats grid - 2x2 on mobile, 4 columns on desktop */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "8px",
          overflow: "hidden",
          marginTop: "64px",
          background: "rgba(15,20,25,0.4)",
          backdropFilter: "blur(6px)",
        }}>
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: "20px",
                borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
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
