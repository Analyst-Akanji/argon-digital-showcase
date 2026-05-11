import { Quote } from "lucide-react";

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
  <section className="bg-transparent py-20 md:py-28">
    <div className="container-1200 px-6">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-accent">
          KIND WORDS
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
          What Our Clients Say
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="relative rounded-2xl bg-background border border-border p-7 md:p-8 shadow-md hover:shadow-xl hover:shadow-accent/10 transition-shadow"
          >
            <Quote className="w-10 h-10 text-accent/80" strokeWidth={2} />
            <blockquote className="mt-4 text-base md:text-lg text-primary/90 leading-relaxed">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {t.initial}
              </div>
              <div>
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.title}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
