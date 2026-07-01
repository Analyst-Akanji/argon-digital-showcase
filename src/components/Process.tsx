const steps = [
  {
    code: "01",
    lens: "PM",
    title: "Discovery",
    description:
      "We learn your business, goals, and audience. We map the product before touching any code.",
  },
  {
    code: "02",
    lens: "PM",
    title: "Design",
    description:
      "We craft the look, feel, and structure of your site with your brand at the centre.",
  },
  {
    code: "03",
    lens: "BUILD",
    title: "Build",
    description:
      "We develop with clean code, fast performance, and mobile-first responsiveness.",
  },
  {
    code: "04",
    lens: "BUILD",
    title: "Launch",
    description:
      "We deploy, test, and hand over your product fully set up and ready to grow.",
  },
];

const Process = () => (
  <section id="process" className="bg-graphite py-24 md:py-32 border-t border-white/5">
    <div className="container-1200 px-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <p className="mono-label text-signal mb-4">// process</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight max-w-xl">
            Idea → Launch, in four disciplined steps.
          </h2>
        </div>
      </div>

      <ol className="grid gap-4 md:grid-cols-4">
        {steps.map((s) => (
          <li
            key={s.title}
            className="group relative rounded-md border border-white/10 bg-surface p-6 hover:border-signal/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-3xl font-semibold text-signal">
                {s.code}
              </span>
              <span
                className={`font-mono text-[10px] tracking-widest px-2 py-0.5 rounded-sm ${
                  s.lens === "PM"
                    ? "bg-signal/10 text-signal"
                    : "bg-sage/15 text-sage"
                }`}
              >
                {s.lens}
              </span>
            </div>
            <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
              {s.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
