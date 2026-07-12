import { useEffect } from "react";
import { caseStudies } from "../data/caseStudies";
import CaseStudyCard from "../components/portfolio/CaseStudyCard";
import Navbar from "../components/Navbar";
import "../styles/portfolio.css";

const FRAUNCES_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&display=swap";

export default function Portfolio() {
  const liveCount = caseStudies.filter((s) => s.status !== "in-progress").length;

  // Load Fraunces only when someone actually visits this page — it's
  // not used anywhere else on the site, so no reason to ship it on
  // every homepage/demos page load.
  useEffect(() => {
    if (document.querySelector(`link[href="${FRAUNCES_URL}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FRAUNCES_URL;
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pm-portfolio">
      <header className="pm-hero">
        <p className="pm-hero__eyebrow">Product Manager</p>
        <h1 className="pm-hero__name">Emmanuel Ibitowa</h1>
        <p className="pm-hero__statement">
          I ship products end to end — from requirements to a paying customer. This is a working
          ledger of what's been built, why, and what happened after launch.
        </p>
        <div className="pm-hero__meta">
          <span>{liveCount} products live</span>
          <span aria-hidden="true">·</span>
          <span>Techy Jaunt PM Certified</span>
          <span aria-hidden="true">·</span>
          <span>Product Manager &amp; Builder</span>
        </div>
      </header>

      <main className="pm-cases">
        {caseStudies.map((study, i) => (
          <CaseStudyCard study={study} index={i} key={study.id} />
        ))}
      </main>

      <footer className="pm-footer">
        <p>Interested in working together?</p>
        <a href="mailto:ibitowaemmanuel@gmail.com" className="pm-footer__cta">
          ibitowaemmanuel@gmail.com
        </a>
      </footer>
      </div>
    </>
  );
}
