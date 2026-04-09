import { Monitor, Code, Lightbulb } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  { icon: Monitor, title: "Web Design", desc: "Beautiful, mobile-first websites that reflect your brand and convert visitors." },
  { icon: Code, title: "Web Development", desc: "Full-stack builds with forms, bookings, payments, and database integration." },
  { icon: Lightbulb, title: "Digital Strategy", desc: "Product thinking behind every site — we ask what it should do, not just how it should look." },
];

const Services = () => (
  <section id="services" className="bg-card py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-xs font-bold tracking-[0.2em] text-primary text-center mb-3 uppercase">What We Do</p>
        <h2 className="text-3xl md:text-5xl font-black text-foreground text-center mb-14">Built for businesses that mean business</h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <ScrollReveal key={s.title}>
            <div className="bg-background rounded-xl p-8 border-l-[3px] border-l-primary border border-border hover:glow-blue transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-5">
                <s.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
