import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "tubeyonirun",
    name: "TubeyOnirun",
    tag: "Hair Booking Platform",
    status: "live" as const,
    url: "https://tubeyonirun.com",
    strategy: [
      "Client needed to replace manual WhatsApp booking with a structured flow that reduced no-shows and missed messages.",
      "Designed booking logic around service duration and stylist availability — not just a contact form.",
      "Recommended automated email confirmations to cut manual admin time to near zero.",
    ],
    build: [
      "React + Vite frontend, Supabase for auth, bookings, and Row Level Security.",
      "Edge Functions handle booking confirmation and reminder emails via Resend.",
      "Deployed on Vercel, connected to custom domain via Whogohost.",
    ],
    stack: ["React", "Supabase", "Vercel", "Resend"],
  },
  {
    id: "stylebylimmex",
    name: "StyleByLimmex",
    tag: "Bespoke Menswear E-Commerce",
    status: "live" as const,
    url: "https://stylebylimmex.com",
    strategy: [
      "Client's product was already premium — the brand's digital presence wasn't matching the quality of the tailoring.",
      "Proposed a measurement-guided catalogue so customers could order remotely with confidence.",
      "Built an admin dashboard so order management didn't require touching code or spreadsheets.",
    ],
    build: [
      "Custom product catalogue with size-guide modals.",
      "Supabase database webhooks trigger order confirmation automatically — no manual replies.",
      "Admin dashboard for managing every order from one place.",
    ],
    stack: ["React", "Supabase", "Paystack", "Vercel"],
  },
  {
    id: "mofashionforge",
    name: "Mo FashionForge",
    tag: "Couture & Tailoring Brand Storefront",
    status: "in-progress" as const,
    url: "https://mofashionforge.vercel.app/",
    strategy: [
      "Client needed a storefront across multiple product categories plus a way to capture custom, made-to-order requests without losing the brand's premium feel.",
      "Phased the build into independently shippable pieces — Shop, About, Custom Orders, Gallery, Blog, Contact — so the client could start taking custom orders before the full site was finished.",
      "Tied payment milestones to delivery phases to de-risk the build for both sides.",
    ],
    build: [
      "React + Vite frontend structured across six distinct pages, styled to the brand's black/ivory/olive/gold palette.",
      "Custom order intake form writes directly to a dedicated Supabase table for the client to review.",
      "Admin dashboard for product and collection management currently in progress.",
    ],
    stack: ["React", "Supabase", "Vercel", "Tailwind"],
  },
  {
    id: "jsa",
    name: "Jehovah Shammah Academy",
    tag: "School Platform — Admin, Parent Portal & Records",
    status: "in-progress" as const,
    url: "https://jsa-website-alpha.vercel.app/",
    strategy: [
      "The school had zero digital presence — admissions, student records, and report cards were entirely manual.",
      "Designed a 9-table relational schema with role-based row-level security, so admin access and parent access stay cleanly separated on one platform.",
      "Built a report card system with class-based subject auto-population instead of re-entering the same structure every term.",
    ],
    build: [
      "Public site, admin dashboard, and a gated parent portal, all on Supabase Auth.",
      "41 students already enrolled and actively managed through the platform across JSS1–SS1.",
      "Report card PDF generation and email notifications pending final domain and Resend setup.",
    ],
    stack: ["React", "TypeScript", "Supabase", "Tailwind"],
  },
  {
    id: "loveofgod",
    name: "Love of God Properties & Block Industry",
    tag: "Construction E-Commerce + Land Platform",
    status: "in-progress" as const,
    url: "https://loveofgod01.vercel.app/",
    strategy: [
      "Two distinct business lines needed separate buyer journeys without feeling like two different products.",
      "Moved client fully off WhatsApp ordering onto a real e-commerce checkout with delivery zones.",
      "Designed the admin dashboard around what the client needs daily: orders, stock, revenue — not a generic CMS.",
    ],
    build: [
      "Supabase schema with delivery zones, order status pipeline, and product inventory.",
      "Paystack and Flutterwave checkout integration with kobo-based pricing.",
      "Full admin dashboard: orders, products, delivery zones, customers, and land enquiries.",
    ],
    stack: ["React", "Supabase", "Paystack", "Flutterwave"],
  },
];

const ProjectCard = ({ project }: { project: (typeof PROJECTS)[0] }) => {
  const isLive = project.status === "live";

  return (
    <article
      className="reveal"
      style={{
        background: "rgb(251,250,247)",
        borderRadius: "12px",
        border: "1px solid rgba(26,31,36,0.08)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-8 py-5"
        style={{ borderBottom: "1px solid rgba(26,31,36,0.08)" }}
      >
        <div>
          <h3 className="font-sans font-semibold text-[18px] text-ink">
            {project.name}
          </h3>
          <p className="text-[14px] text-muted-fg mt-0.5">{project.tag}</p>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="font-mono-brand text-[10px] tracking-[0.12em] uppercase px-2.5 py-1"
            style={{
              borderRadius: "4px",
              background: isLive
                ? "rgba(124,154,146,0.15)"
                : "rgba(232,98,61,0.15)",
              color: isLive ? "rgb(95,122,114)" : "rgb(201,79,46)",
            }}
          >
            {isLive ? "LIVE" : "IN PROGRESS"}
          </span>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.name}`}
              className="text-ink/40 hover:text-signal transition-colors"
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Split body */}
      <div className="grid md:grid-cols-2 split-divider">
        <div className="px-8 py-7">
          <p
            className="font-mono-brand text-[10px] tracking-[0.12em] uppercase mb-4"
            style={{ color: "rgb(232,98,61)" }}
          >
            The Strategy
          </p>
          <ul className="space-y-3">
            {project.strategy.map((point, i) => (
              <li
                key={i}
                className="text-[14px] leading-relaxed"
                style={{ color: "rgba(26,31,36,0.75)" }}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="px-8 py-7">
          <p
            className="font-mono-brand text-[10px] tracking-[0.12em] uppercase mb-4"
            style={{ color: "rgb(95,122,114)" }}
          >
            The Build
          </p>
          <ul className="space-y-3">
            {project.build.map((point, i) => (
              <li
                key={i}
                className="text-[14px] leading-relaxed"
                style={{ color: "rgba(26,31,36,0.75)" }}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stack footer */}
      <div
        className="px-8 py-4 flex flex-wrap gap-2"
        style={{ background: "rgba(26,31,36,0.03)" }}
      >
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono-brand text-[10px] text-muted-fg px-2.5 py-1"
            style={{
              background: "rgba(26,31,36,0.05)",
              borderRadius: "4px",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

const Work = () => {
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
      id="work"
      ref={sectionRef}
      className="bg-paper py-20 md:py-28 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-14 max-w-xl">
          <p className="font-mono-brand text-[11px] tracking-[0.12em] uppercase text-signal mb-4">
            Selected Work
          </p>
          <h2 className="font-sans font-bold text-[2.2rem] text-ink">
            Every project, two lenses
          </h2>
          <p className="mt-4 text-[16px] text-muted-fg leading-relaxed">
            The thinking that shaped the decision, and the system that shipped
            it — side by side, because that's how the work actually happened.
          </p>
        </div>

        <div className="space-y-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
