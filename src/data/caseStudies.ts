export type ProjectStatus = "live-paid" | "live" | "in-progress";

export interface CaseStudy {
  id: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  role: string;
  problem: string;
  whyItMattered: string;
  process: string[];
  decisions: string;
  outcome: string;
  metrics: string[];
  stack: string[];
  url?: string;
}

/**
 * EDIT ME: This is real project detail pulled from your build history.
 * Review each entry before publishing — trim anything client-confidential
 * (exact deposit amounts, personal phone numbers, etc.) that you don't
 * want visible to a public visitor or hiring manager.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "argon-schoolos",
    name: "Argon SchoolOS",
    tagline: "Multi-tenant school management SaaS — Argon's flagship product",
    status: "live",
    role: "Founder, Product Manager & Builder",
    problem:
      "Nigerian private schools run admissions, attendance, results, and fees on paper or fragmented spreadsheets.",
    whyItMattered:
      "The dominant incumbents gate pricing behind a sales demo and are moving up-market, leaving smaller schools with no simple, transparently priced option.",
    process: [
      "Designed a multi-tenant architecture where signup auto-creates an organization and owner membership, generating the org ID client-side to resolve an RLS chicken-and-egg problem on insert",
      "Replaced Supabase's broken Dashboard webhooks with direct pg_net database triggers as the reliable pattern for every table-insert-to-email workflow",
      "Built a free-to-Pro tier split (Student Records, Admissions, Attendance free; Examinations, Report Cards, Fee Tracking, Parent Communication paid) with five usage-based pricing bands and admin-side band-mismatch enforcement",
      "Shipped a full billing loop: band selection, bank transfer receipt upload, admin approval dashboard, and automatic confirmation email to the school",
    ],
    decisions:
      "Chose published, transparent pricing and a genuinely usable free tier as the wedge against demo-gated incumbents, and shipped with manual bank-transfer billing rather than delaying launch for automated Paystack/Flutterwave integration.",
    outcome:
      "First pilot school (Jehovah Shammah Academy) is live on the Pro plan with the full pipeline verified end to end — signup, billing, admin approval, and report card generation with dual school-stamp embedding delivered straight to parent inboxes.",
    metrics: [
      "First paying pilot school live end-to-end",
      "5-band usage-based pricing model shipped and enforced",
      "36 schools expressed pilot interest in the original outreach survey",
    ],
    stack: ["React", "TypeScript", "Supabase", "Tailwind", "Vercel", "Resend"],
    url: "https://schoolos.argonindustries.com.ng",
  },
  {
    id: "tubeyonirun",
    name: "TubeyOnirun",
    tagline: "Booking platform for a beauty services business",
    status: "live-paid",
    role: "Product Manager & Builder",
    problem: "Appointments were being managed through DMs and calls.",
    whyItMattered:
      "That led to missed bookings and no reliable payment record — lost business with no way to track it.",
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
    problem: "No online storefront existed.",
    whyItMattered:
      "All orders were manual, with no automated confirmation or record-keeping.",
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
    problem: "The school had no digital presence.",
    whyItMattered:
      "Admissions, student records, and report cards were entirely manual, and I was managing the school myself.",
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
    whyItMattered:
      "Without one, there was no organized way to sell across categories or capture custom orders.",
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
    whyItMattered:
      "Orders for both business lines were being taken informally over WhatsApp, with no shared view of orders, stock, or revenue.",
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
