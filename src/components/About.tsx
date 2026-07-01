import { useEffect, useRef } from "react";

const SKILLS = [
  "Product Management",
  "React / Vite",
  "Supabase",
  "Vercel",
  "Payment Integration",
];

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="bg-paper py-20 md:py-28 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-start">
        {/* Left */}
        <div className="md:col-span-5 reveal">
          <p className="font-mono-brand text-[11px] tracking-[0.12em] uppercase text-signal mb-4">
            About
          </p>
          <h2
            className="font-sans font-bold text-ink leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)" }}
          >
            One person.
            <br />
            Two disciplines.
          </h2>
        </div>

        {/* Right */}
        <div className="md:col-span-7 reveal">
          <p
            className="text-[16px] leading-[1.75]"
            style={{ color: "rgba(26,31,36,0.75)" }}
          >
            Argon Industries is led by Emmanuel Ibitowa — a certified Product
            Manager and full-stack developer based in Osogbo, Nigeria. Most
            studios hand a client off between a strategist and a developer.
            Argon doesn't, because the gap between those two roles is usually
            where projects go wrong: scope decided without technical context, or
            code shipped without a clear business reason behind it.
          </p>
          <p
            className="mt-5 text-[16px] leading-[1.75]"
            style={{ color: "rgba(26,31,36,0.75)" }}
          >
            Every Argon project is scoped like a product manager would scope
            it, and built like an engineer would build it. Same person, both
            lenses, start to finish.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="font-mono-brand text-[11px] px-3 py-1.5"
                style={{
                  color: "rgba(26,31,36,0.6)",
                  border: "1px solid rgba(26,31,36,0.1)",
                  borderRadius: "4px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
