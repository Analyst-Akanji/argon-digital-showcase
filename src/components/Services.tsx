import { Check } from "lucide-react";

type Tier = {
  code: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  lens: "PM" | "BUILD";
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    code: "01",
    title: "Starter",
    description:
      "For personal brands and small businesses ready to establish a real online presence.",
    features: [
      "Landing page",
      "Mobile responsive",
      "Contact + WhatsApp",
      "Fast delivery",
      "Vercel hosting setup",
    ],
    price: "From ₦180,000",
    lens: "BUILD",
  },
  {
    code: "02",
    title: "Business",
    description:
      "For growing businesses that need e-commerce, booking, or multi-page sites that drive revenue.",
    features: [
      "E-commerce or booking platform",
      "Product / service listings",
      "Payment integration",
      "Admin dashboard",
      "Mobile responsive",
    ],
    price: "From ₦280,000",
    lens: "PM",
    popular: true,
  },
  {
    code: "03",
    title: "Enterprise",
    description:
      "For institutions and platforms that need powerful, scalable digital infrastructure.",
    features: [
      "Custom platform development",
      "User authentication",
      "Database integration",
      "Multi-role dashboards",
      "Ongoing support",
    ],
    price: "From ₦800,000",
    lens: "PM",
  },
];

const ServiceCard = ({ tier }: { tier: Tier }) => {
  return (
    <div
      className={`group relative flex flex-col rounded-md border transition-colors ${
        tier.popular
          ? "border-signal bg-surface"
          : "border-white/10 bg-surface hover:border-white/20"
      }`}
    >
      {tier.popular && (
        <span className="absolute -top-2.5 left-6 px-2 py-0.5 bg-signal text-white font-mono text-[10px] tracking-widest uppercase rounded-sm">
          Most Picked
        </span>
      )}

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-[11px] tracking-widest text-foreground/40">
            /{tier.code}
          </span>
          <span
            className={`font-mono text-[10px] tracking-widest px-2 py-0.5 rounded-sm ${
              tier.lens === "PM"
                ? "bg-signal/10 text-signal"
                : "bg-sage/15 text-sage"
            }`}
          >
            {tier.lens} lens
          </span>
        </div>

        <h3 className="text-2xl font-bold text-foreground">{tier.title}</h3>
        <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
          {tier.description}
        </p>

        <ul className="mt-6 space-y-2.5 flex-1">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
              <Check className="w-4 h-4 text-signal mt-0.5 shrink-0" strokeWidth={2.5} />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 pt-6 border-t border-white/10">
          <div className="font-mono text-xs tracking-wider text-foreground/40 mb-2">
            starting_at
          </div>
          <div className="text-lg font-mono font-semibold text-foreground mb-5">
            {tier.price}
          </div>
          <a
            href="#quote"
            className={`block text-center rounded-md font-mono text-sm tracking-wide py-3 transition-colors ${
              tier.popular
                ? "bg-signal hover:bg-signal/90 text-white"
                : "border border-white/15 text-foreground hover:bg-white/5"
            }`}
          >
            request_quote →
          </a>
        </div>
      </div>
    </div>
  );
};

const Services = () => (
  <section id="services" className="bg-graphite py-24 md:py-32 border-t border-white/5">
    <div className="container-1200 px-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="mono-label text-signal mb-4">// services</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight max-w-xl">
            Three tiers. Real scope. No mystery pricing.
          </h2>
        </div>
        <p className="text-foreground/60 max-w-md text-sm md:text-base leading-relaxed">
          We scope from the product outcome, not from the page count. Pick the
          tier that matches your ambition — we'll confirm scope in the quote.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {tiers.map((t) => (
          <ServiceCard key={t.title} tier={t} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
