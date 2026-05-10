import { Rocket, Briefcase, Building2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/2348086825973";

type Tier = {
  icon: typeof Rocket;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    icon: Rocket,
    title: "Starter",
    description:
      "Perfect for personal brands, professionals, and small businesses ready to establish their online presence.",
    features: [
      "Landing page",
      "Mobile responsive",
      "Contact form",
      "Fast delivery",
      "Vercel hosting setup",
    ],
    price: "From ₦150,000",
  },
  {
    icon: Briefcase,
    title: "Business",
    description:
      "For growing businesses that need e-commerce, booking systems, or multi-page websites that drive revenue.",
    features: [
      "E-commerce or booking platform",
      "Product/service listings",
      "Payment integration",
      "Admin dashboard",
      "Mobile responsive",
    ],
    price: "From ₦280,000",
    popular: true,
  },
  {
    icon: Building2,
    title: "Enterprise",
    description:
      "For institutions, platforms, and organizations that need powerful, scalable digital infrastructure.",
    features: [
      "Custom platform development",
      "User authentication",
      "Database integration",
      "Multi-role dashboards",
      "Ongoing support",
    ],
    price: "From ₦780,000",
  },
];

const ServiceCard = ({ tier }: { tier: Tier }) => {
  const Icon = tier.icon;
  return (
    <div
      className={`group relative flex flex-col rounded-2xl bg-background border transition-all duration-300 hover:-translate-y-1.5 ${
        tier.popular
          ? "border-accent shadow-lg shadow-accent/10"
          : "border-border hover:shadow-xl hover:shadow-accent/15"
      }`}
    >
      {/* Top accent bar */}
      <div
        className={`h-1.5 rounded-t-2xl ${
          tier.popular ? "bg-accent" : "bg-primary"
        }`}
      />

      {tier.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wide shadow-md">
          Most Popular
        </span>
      )}

      <div className="p-7 flex flex-col flex-1">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
          <Icon className="w-6 h-6 text-accent" strokeWidth={2} />
        </div>

        <h3 className="text-2xl font-bold text-primary">{tier.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {tier.description}
        </p>

        <ul className="mt-6 space-y-3 flex-1">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-primary/85">
              <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={2.5} />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 pt-6 border-t border-border">
          <div className="text-lg font-bold text-primary mb-4">{tier.price}</div>
          <Button
            asChild
            className={`w-full ${
              tier.popular
                ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                : "bg-primary hover:bg-primary/90 text-primary-foreground"
            }`}
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Services = () => (
  <section id="services" className="bg-secondary py-20 md:py-28">
    <div className="container-1200 px-6">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-accent">
          WHAT WE OFFER
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
          Solutions Built For Your Goals
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
          Every project is built with precision, purpose, and your audience in mind.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:gap-8 md:grid-cols-3">
        {tiers.map((t) => (
          <ServiceCard key={t.title} tier={t} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
