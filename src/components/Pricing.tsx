import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const tiers = [
  {
    name: "Presence",
    price: "₦120,000 – ₦180,000",
    features: ["3–5 page website", "Mobile responsive", "WhatsApp & contact form", "Delivered in 7–10 days"],
    highlighted: false,
  },
  {
    name: "Platform",
    price: "₦250,000 – ₦500,000",
    features: ["Up to 10 pages", "Blog or portfolio section", "Booking & payment integration", "Delivered in 14–21 days"],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Product",
    price: "₦600,000+",
    features: ["Full web application", "Auth, dashboards & database", "Custom scoped timeline", "Ongoing support option"],
    highlighted: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="bg-card py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-xs font-bold tracking-[0.2em] text-primary text-center mb-3 uppercase">Pricing</p>
        <h2 className="text-3xl md:text-5xl font-black text-foreground text-center mb-14">Simple, honest pricing</h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((t) => (
          <ScrollReveal key={t.name}>
            <div
              className={`relative bg-background rounded-xl p-8 border transition-all duration-300 hover:glow-blue ${
                t.highlighted ? "border-primary glow-blue bg-primary/5" : "border-border"
              }`}
            >
              {t.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  {t.badge}
                </span>
              )}
              <h3 className="text-lg font-bold text-foreground mb-1">{t.name}</h3>
              <p className="text-2xl font-black text-primary mb-6">{t.price}</p>
              <ul className="space-y-3 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={t.highlighted ? "default" : "outline"} className={`w-full ${t.highlighted ? "glow-blue" : "border-primary/50 text-foreground hover:bg-primary/10"}`}>
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
