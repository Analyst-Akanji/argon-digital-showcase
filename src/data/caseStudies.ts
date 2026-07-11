export type ProjectStatus = "live-paid" | "live" | "in-progress";

export interface CaseStudy {
  id: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  role: string;
  problem: string;
  process: string[];
  decisions: string;
  outcome: string;
  metrics: string[];
  stack: string[];
}

/**
 * EDIT ME: This is real project detail pulled from your build history.
 * Review each entry before publishing — trim anything client-confidential
 * (exact deposit amounts, personal phone numbers, etc.) that you don't
 * want visible to a public visitor or hiring manager.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "tubeyonirun",
    name: "TubeyOnirun",
    tagline: "Booking platform for a beauty services business",
    status: "live-paid",
    role: "Product Manager & Builder",
    problem:
      "Appointments were being managed through DMs and calls, leading to missed bookings and no reliable payment record.",
    process: [
      "Scoped a booking flow with service selection, payment, and receipt upload",
      "Built on Supabase + Vercel with two-way email confirmations",
      "Diagnosed and resolved a live incident where bookings silently failed to save during a payment outage",
    ],
    decisions:
      "When the outage was discovered, prioritized a manual recovery plan (client WhatsApp outreach to affected customers) over a purely technical fix, since the business risk was losing paying customers, not just a bug.",
    outcome:
      "Platform is fully live and fully paid. Booking and payment flow has been stable since the fix, with two-way transactional email working end to end.",
    metrics: [
      "Live production incident diagnosed & resolved",
      "Two-way automated email confirmations",
      "Zero-downtime booking flow since fix",
    ],
    stack: ["React", "Supabase", "Paystack", "Resend"],
  },
  {
    id: "stylebylimmex",
    name: "StyleByLimmex",
    tagline: "E-commerce storefront for a fashion retail brand",
    status: "live-paid",
    role: "Product Manager & Builder",
    problem:
      "No online storefront existed — all orders were manual, with no automated confirmation or record-keeping.",
    process: [
      "Designed a Supabase schema for customers and orders",
      "Built database webhooks to trigger order/payment notifications automatically",
      "Weighed RLS trade-offs on public-facing insert tables and chose a pragmatic, monitored-access approach to unblock launch",
    ],
    decisions:
      "Chose to ship with a temporary access-control approach rather than delay launch for a fully hardened policy, with a clear plan to revisit once business registration (CAC) completes and Paystack is live.",
    outcome:
      "Fully live storefront with automated order and payment emails working end to end.",
    metrics: [
      "Automated order + payment webhook pipeline",
      "Two-way transactional email live",
      "Zero manual order tracking required",
    ],
    stack: ["React", "Supabase", "Resend", "Paystack (pending)"],
  },
  {
    id: "jsa",
    name: "Jehovah Shammah Academy",
    tagline: "Full digital platform for a school — as its principal",
    status: "in-progress",
    role: "Product Manager, Builder & End User (School Principal)",
    problem:
      "The school had no digital presence — admissions, student records, and report cards were entirely manual, and I was managing the school myself.",
    process: [
      "Wrote a PRD covering public site, admin dashboard, and a gated parent portal",
      "Designed a 9-table relational schema with role-based row-level security (admin vs. verified parent access)",
      "Built a report card system with class-based subject auto-population and department logic for senior students",
    ],
    decisions:
      "Being both the product owner and the end user meant every feature request came from direct operational pain — this shaped a much tighter, less speculative scope than a typical client project.",
    outcome:
      "41 students enrolled and managed through the platform across JSS1–SS1, with the admin dashboard and parent portal both live. Now being reshaped into a repeatable school-platform product for other schools.",
    metrics: [
      "41 students onboarded",
      "9-table schema with role-based access control",
      "Being productized into a repeatable offering",
    ],
    stack: ["React", "TypeScript", "Supabase", "Tailwind"],
  },
  {
    id: "mofashionforge",
    name: "Mo FashionForge",
    tagline: "Multi-category shop for a fashion brand",
    status: "in-progress",
    role: "Product Manager & Builder",
    problem:
      "The brand needed a proper storefront across multiple product categories, plus a way to take custom, made-to-order requests.",
    process: [
      "Structured the build in phases: Shop, Custom Orders, Gallery, Blog, Contact",
      "Built a custom-order intake form that writes directly to a dedicated Supabase table for the client to review",
      "Secured a deposit before starting build, tying payment milestones to delivery phases",
    ],
    decisions:
      "Split the build into independently shippable phases so the client could start taking custom orders before the full site was complete.",
    outcome: "In active build. Core shop and custom-order intake are live; admin dashboard for product management is next.",
    metrics: [
      "Phased delivery model tied to payment milestones",
      "Custom order intake live to database",
    ],
    stack: ["React", "Supabase", "Tailwind"],
  },
  {
    id: "loveofgod",
    name: "Love of God Properties",
    tagline: "E-commerce + property platform for a non-technical client",
    status: "in-progress",
    role: "Product Manager & Builder",
    problem:
      "A 67-year-old client with two distinct business lines (block manufacturing and land sales) needed a single platform, with almost no technical vocabulary to draw requirements from.",
    process: [
      "Ran requirements gathering in plain, non-technical language",
      "Split the platform into two clear wings so each business line could be navigated independently",
      "Building an admin dashboard in stages, starting with authentication and protected routes",
    ],
    decisions:
      "Prioritized simplicity of navigation over feature richness, given the client would eventually need to operate the admin dashboard independently.",
    outcome: "Site is live; admin dashboard build is in progress, starting with core order management.",
    metrics: [
      "Two independent business flows unified in one platform",
      "Admin dashboard authentication live",
    ],
    stack: ["React", "Supabase", "Vercel"],
  },
];
