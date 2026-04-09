import { Monitor, Code, Lightbulb } from "lucide-react";

const services = [
  { icon: Monitor, title: "Web Design", desc: "Beautiful, mobile-first websites that reflect your brand and convert visitors." },
  { icon: Code, title: "Web Development", desc: "Full-stack builds with forms, bookings, payments, and database integration." },
  { icon: Lightbulb, title: "Digital Strategy", desc: "Product thinking behind every site — we ask what it should do, not just how it should look." },
];

const Services = () => (
  <section id="services" className="bg-section-alt py-20">
    <div className="container mx-auto px-4">
      <p className="text-xs font-semibold tracking-widest text-primary text-center mb-2">WHAT WE DO</p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Built for businesses that mean business</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
