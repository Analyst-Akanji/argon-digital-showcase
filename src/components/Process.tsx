import { useEffect, useRef } from "react";

const STEPS = [
  {
    n: "01",
    lens: "PM" as const,
    title: "Define the problem",
    text: "Every engagement starts with a written brief — what the business actually needs, not just what's asked for.",
  },
  {
    n: "02",
    lens: "PM" as const,
    title: "Scope and price",
    text: "A clear proposal and quote before any code — what's built, what it costs, what happens after launch.",
  },
  {
    n: "03",
    lens: "DEV" as const,
    title: "Build in the open",
    text: "Working locally, reviewed at each stage, pushed to a live repository — nothing built blind.",
  },
  {
    n: "04",
    lens: "DEV" as const,
    title: "Ship and support",
    text: "Deployed, tested against real use, and handed over with a path for what comes next.",
  },
];

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".reveal");
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, i * 80);
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
      id="approach"
      ref={sectionRef}
      className="bg-graphite py-20 md:py-28 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-14 max-w-xl">
          <p className="font-mono-brand text-[11px] tracking-[0.12em] uppercase text-sage mb-4">
            How We Work
          </p>
          <h2 className="font-sans font-bold text-[2.2rem] text-paper">
            Strategy and build, never separated
          </h2>
        </div>

        {/* Steps grid */}
        <div
          className="grid md:grid-cols-4"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {STEPS.map((step, i) => {
            const isPM = step.lens === "PM";
            return (
              <div
                key={step.n}
                className="reveal bg-graphite px-6 py-8"
                style={{
                  borderRight:
                    i < STEPS.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                }}
              >
                {/* Top row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-brand text-[14px] text-paper/40">
                    {step.n}
                  </span>
                  <span
                    className="font-mono-brand text-[10px] tracking-[0.12em] uppercase px-2 py-1"
                    style={{
                      borderRadius: "4px",
                      background: isPM
                        ? "rgba(232,98,61,0.15)"
                        : "rgba(124,154,146,0.15)",
                      color: isPM
                        ? "rgb(232,98,61)"
                        : "rgb(124,154,146)",
                    }}
                  >
                    {step.lens}
                  </span>
                </div>

                <h3 className="font-sans font-semibold text-[18px] text-paper mb-2">
                  {step.title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed"
                  style={{ color: "rgba(245,243,238,0.55)" }}
                >
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
