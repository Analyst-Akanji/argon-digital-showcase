const steps = [
  {
    title: "Discovery",
    description:
      "We learn your business, goals, and audience before touching any code.",
  },
  {
    title: "Design",
    description:
      "We craft the look, feel, and structure of your site with your brand at the center.",
  },
  {
    title: "Build",
    description:
      "We develop your site with clean code, fast performance, and mobile responsiveness.",
  },
  {
    title: "Launch",
    description:
      "We deploy, test, and hand over your site fully set up and ready to grow.",
  },
];

const Process = () => (
  <section id="process" className="bg-secondary py-20 md:py-28">
    <div className="container-1200 px-6">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-accent">
          HOW WE WORK
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
          From Idea to Launch in 4 Steps
        </h2>
      </div>

      <div className="mt-14 relative">
        {/* Desktop connecting line */}
        <div
          aria-hidden
          className="hidden md:block absolute top-7 left-0 right-0 h-0.5 bg-border"
          style={{ marginLeft: "12.5%", marginRight: "12.5%" }}
        />

        <ol className="grid gap-10 md:gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex md:flex-col items-start md:items-center gap-4 md:text-center">
              <div className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg shadow-lg shadow-accent/30 ring-8 ring-secondary">
                {i + 1}
              </div>
              <div className="md:mt-5">
                <h3 className="text-lg font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed md:px-2">
                  {s.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Process;
