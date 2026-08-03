import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "../data/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  const isLive = project.status === "live";

  return (
    <article
      className="reveal"
      style={{
        background: "rgb(251,250,247)",
        borderRadius: "12px",
        border: "1px solid rgba(26,31,36,0.08)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-8 py-5"
        style={{ borderBottom: "1px solid rgba(26,31,36,0.08)" }}
      >
        <div>
          <h3 className="font-sans font-semibold text-[18px] text-ink">
            {project.name}
          </h3>
          <p className="text-[14px] text-muted-fg mt-0.5">{project.tag}</p>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="font-mono-brand text-[10px] tracking-[0.12em] uppercase px-2.5 py-1"
            style={{
              borderRadius: "4px",
              background: isLive
                ? "rgba(124,154,146,0.15)"
                : "rgba(232,98,61,0.15)",
              color: isLive ? "rgb(95,122,114)" : "rgb(201,79,46)",
            }}
          >
            {isLive ? "LIVE" : "IN PROGRESS"}
          </span>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.name}`}
              className="text-ink/40 hover:text-signal transition-colors"
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Split body */}
      <div className="grid md:grid-cols-2 split-divider">
        <div className="px-8 py-7">
          <p
            className="font-mono-brand text-[10px] tracking-[0.12em] uppercase mb-4"
            style={{ color: "rgb(232,98,61)" }}
          >
            The Strategy
          </p>
          <ul className="space-y-3">
            {project.strategy.map((point, i) => (
              <li
                key={i}
                className="text-[14px] leading-relaxed"
                style={{ color: "rgba(26,31,36,0.75)" }}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="px-8 py-7">
          <p
            className="font-mono-brand text-[10px] tracking-[0.12em] uppercase mb-4"
            style={{ color: "rgb(95,122,114)" }}
          >
            The Build
          </p>
          <ul className="space-y-3">
            {project.build.map((point, i) => (
              <li
                key={i}
                className="text-[14px] leading-relaxed"
                style={{ color: "rgba(26,31,36,0.75)" }}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stack footer */}
      <div
        className="px-8 py-4 flex flex-wrap gap-2"
        style={{ background: "rgba(26,31,36,0.03)" }}
      >
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono-brand text-[10px] text-muted-fg px-2.5 py-1"
            style={{
              background: "rgba(26,31,36,0.05)",
              borderRadius: "4px",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".reveal");
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="bg-paper py-20 md:py-28 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-14 max-w-xl">
          <p className="font-mono-brand text-[11px] tracking-[0.12em] uppercase text-signal mb-4">
            Selected Work
          </p>
          <h2 className="font-sans font-bold text-[2.2rem] text-ink">
            Every project, two lenses
          </h2>
          <p className="mt-4 text-[16px] text-muted-fg leading-relaxed">
            The thinking that shaped the decision, and the system that shipped
            it — side by side, because that's how the work actually happened.
          </p>
        </div>

        <div className="space-y-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
