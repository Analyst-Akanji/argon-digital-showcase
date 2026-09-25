export type ProjectStatus = "live" | "in-progress";

export interface Project {
  id: string;
  name: string;
  tag: string;
  status: ProjectStatus;
  url: string;
  strategy: string[];
  build: string[];
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "argon-schoolos",
    name: "Argon SchoolOS",
    tag: "A school management system built around how the school actually operates — Argon's flagship product",
    status: "live",
    url: "https://schoolos.argonindustries.com.ng",
    strategy: [
      "Nigerian private schools run admissions, results, and fees on paper or scattered spreadsheets, while dominant incumbents gate their pricing behind a sales demo.",
      "Positioned Argon's own product around published, transparent pricing and a genuinely usable free tier — the wedge no competitor in the space offers.",
      "Shipped manual bank-transfer billing first rather than delay launch for automated payment integration, then validated the whole loop with a real paying pilot school.",
    ],
    build: [
      "Multi-tenant React + Supabase architecture with org-scoped Row Level Security on every table, and client-side org ID generation to resolve the signup RLS chicken-and-egg problem.",
      "pg_net database triggers replace Supabase's broken Dashboard webhooks for every table-insert-to-email workflow — parent messages, payment confirmations, admin alerts.",
      "Free-to-Pro tier split with five usage-based pricing bands, an admin approval dashboard, and report cards generated client-side with dual school-stamp embedding, emailed straight to parents.",
    ],
    stack: ["React", "TypeScript", "Supabase", "Tailwind", "Resend"],
  },
  {
    id: "tubeyonirun",
    name: "TubeyOnirun",
    tag: "Hair Booking Platform",
    status: "live",
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
    status: "live",
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
    status: "in-progress",
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
    status: "in-progress",
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
    status: "in-progress",
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
