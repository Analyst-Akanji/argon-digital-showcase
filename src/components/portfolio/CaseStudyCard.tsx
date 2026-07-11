import type { CaseStudy } from "../../data/caseStudies";
import StatusStamp from "./StatusStamp";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <article className="pm-case">
      <div className="pm-case__stampzone">
        <StatusStamp status={study.status} />
      </div>

      <div className="pm-case__head">
        <span className="pm-case__index">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3 className="pm-case__name">{study.name}</h3>
          <p className="pm-case__tagline">{study.tagline}</p>
        </div>
      </div>

      <div className="pm-case__role">{study.role}</div>

      <div className="pm-case__grid">
        <div>
          <h4>Problem</h4>
          <p>{study.problem}</p>
        </div>
        <div>
          <h4>Process</h4>
          <ul>
            {study.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Key decision</h4>
          <p>{study.decisions}</p>
        </div>
        <div>
          <h4>Outcome</h4>
          <p>{study.outcome}</p>
        </div>
      </div>

      <div className="pm-case__footer">
        <ul className="pm-case__metrics">
          {study.metrics.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        <ul className="pm-case__stack">
          {study.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
