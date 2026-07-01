const testimonials = [
  {
    quote:
      "Argon Industries understood exactly what I wanted. The site looks professional and my customers love it.",
    name: "Limmex",
    title: "Founder, StyleByLimmex",
    initial: "L",
  },
  {
    quote:
      "Working with Argon was seamless. They delivered fast and the booking platform is exactly what my business needed.",
    name: "Tubey",
    title: "Founder, TubeyOnirun",
    initial: "T",
  },
];

const Testimonials = () => (
  <section className="section-paper py-24 md:py-32">
    <div className="container-1200 px-6">
      <div className="mb-14">
        <p className="mono-label text-signal mb-4">// clients_talking</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-ink tracking-tight max-w-2xl">
          Kind words from the founders we've shipped for.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="relative rounded-md bg-card-light border p-8"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            <div className="font-mono text-signal text-3xl leading-none mb-4">
              "
            </div>
            <blockquote className="text-lg text-ink/85 leading-relaxed font-medium">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <div className="w-10 h-10 rounded-md bg-ink text-paper flex items-center justify-center font-mono font-semibold">
                {t.initial}
              </div>
              <div>
                <div className="font-semibold text-ink">{t.name}</div>
                <div className="font-mono text-xs text-ink/50 mt-0.5">{t.title}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
