/* ---------------------------------------------------------------
   Site content.

   Real material lives here verbatim. Anything only Rishi can supply —
   chiefly metrics — is marked TBD and renders as a visible placeholder
   rather than a plausible-looking number. Nothing in this file is
   invented; see components/Placeholder.js for how gaps are displayed.
   --------------------------------------------------------------- */

export const TBD = Symbol("to-be-supplied");

export const personalInfo = {
  name: "Rishi Bajaj",
  title: "Product Manager",
  location: "Leipzig, Germany",
  positioning:
    "Six years betting on the right problems, experimenting toward the right solutions, and shipping fast enough to find out.",
  email: "hello@rishibajaj.space",
  linkedin: "https://linkedin.com/in/rishibajaj",
  substack: "https://substack.com/@rishibajaj",
  github: "https://github.com/rishibajaj-Prodman",
  site: "rishibajaj.space",
};

export const bio = [
  "Great product work happens across three dimensions at once — betting on which customers and markets are worth the company's attention, experimenting your way to the right solution before committing to build, and shipping fast enough that real users tell you if you got it right. I've spent six years doing all three.",
  "I started at a small, bootstrapped construction SaaS startup in India. Construction is not a normal software market — decisions happen on site, across owners, contractors, and project managers who all see the problem differently. 100+ visits taught me how to navigate that — and find the real problem underneath all of it.",
  "From there I joined a US based, venture-funded growth-stage startup — where, under a strong product leadership team, I learnt what great product management actually looks like and grew from Product Owner to Product Manager over three years. Each step was a harder problem: first bringing reliability to how the team shipped, then using discovery to get customers to value faster, then owning the business problem of retention end to end.",
  "I'm now at HHL Leipzig doing an MBA — adding business depth to product judgment. I'm building ventures alongside my studies, one in an EIR program at a climate tech collective and one in active incubation at HHL.",
];

/* The template's hero carries four stat tiles. Only one is currently
   knowable from published material. */
export const stats = [
  { label: "Years in product", value: "6" },
  { label: "Site visits, construction", value: "100+" },
  { label: "Users impacted", value: TBD },
  { label: "Teams led", value: TBD },
];

export const strengths = [
  {
    title: "Market & problem selection",
    description:
      "Deciding which customers and markets deserve the company's attention before a line of code is written.",
  },
  {
    title: "Discovery under ambiguity",
    description:
      "Getting to the real problem in markets where users disagree with each other — 100+ construction site visits taught this the hard way.",
  },
  {
    title: "Shipping reliability",
    description:
      "Turning an unpredictable delivery process into one a business can plan around.",
  },
  {
    title: "Retention as a business problem",
    description:
      "Owning churn end to end rather than treating it as a feature backlog.",
  },
];

export const skills = {
  "Discovery & research": [
    "Continuous discovery",
    "Customer interviews",
    "Jobs-to-be-done",
    "Assumption mapping",
  ],
  "Strategy & planning": [
    "Product strategy",
    "Roadmapping",
    "Prioritisation",
    "Opportunity solution trees",
  ],
  "Execution": ["Agile / Scrum", "Backlog ownership", "Release planning", "Stakeholder management"],
  "Data": ["Retention analysis", "A/B testing", "SQL", "Product analytics"],
};

/* Case studies follow the arc the hellopm.co guide prescribes:
   Problem -> Research & Insights -> Solution & Process -> Impact -> Reflection.
   Employer is anonymised pending a confidentiality decision. */
export const caseStudies = [
  {
    id: "ship-reliability",
    title: "Making delivery predictable",
    context: "US venture-funded growth-stage SaaS",
    role: "Product Owner",
    period: "Year 1",
    summary:
      "The team shipped, but nobody could say when. I rebuilt how work entered and left the pipeline so the business could plan around it.",
    tags: ["Process", "Delivery", "B2B SaaS"],
    metrics: [
      { label: "Predictability", value: TBD },
      { label: "Cycle time", value: TBD },
    ],
    detail: {
      problem: TBD,
      research: TBD,
      solution: TBD,
      process: [],
      results: [],
      reflection: TBD,
    },
  },
  {
    id: "time-to-value",
    title: "Getting customers to value faster",
    context: "US venture-funded growth-stage SaaS",
    role: "Product Manager",
    period: "Year 2",
    summary:
      "New customers took too long to reach the moment the product earned its keep. Discovery work reshaped onboarding around that moment rather than around our feature set.",
    tags: ["Discovery", "Onboarding", "Activation"],
    metrics: [
      { label: "Time to value", value: TBD },
      { label: "Activation rate", value: TBD },
    ],
    detail: {
      problem: TBD,
      research: TBD,
      solution: TBD,
      process: [],
      results: [],
      reflection: TBD,
    },
  },
  {
    id: "retention",
    title: "Owning retention end to end",
    context: "US venture-funded growth-stage SaaS",
    role: "Product Manager",
    period: "Year 3",
    summary:
      "Churn was treated as a backlog of requests. I reframed it as a business problem with a measurable target and worked the whole funnel behind it.",
    tags: ["Retention", "Churn", "Business impact"],
    metrics: [
      { label: "Churn reduction", value: TBD },
      { label: "Net revenue retention", value: TBD },
    ],
    detail: {
      problem: TBD,
      research: TBD,
      solution: TBD,
      process: [],
      results: [],
      reflection: TBD,
    },
  },
  {
    id: "construction-discovery",
    title: "Finding the real problem on site",
    context: "Bootstrapped construction SaaS, India",
    role: "Product Manager",
    period: "First three years",
    summary:
      "Owners, contractors and project managers each described a different problem. 100+ site visits surfaced the one underneath all of them.",
    tags: ["Field research", "Construction tech", "0→1"],
    metrics: [
      { label: "Site visits", value: "100+" },
      { label: "Adoption", value: TBD },
    ],
    detail: {
      problem: TBD,
      research: TBD,
      solution: TBD,
      process: [],
      results: [],
      reflection: TBD,
    },
  },
];

export const projects = [
  {
    title: "bim-change-engine",
    description:
      "Diffs two versions of a Speckle BIM model and produces grounded, role-tailored impact reports — one engine, a swappable lens per role, and a contract that refuses to fabricate what the data cannot support.",
    tags: ["BIM", "AI agents", "MCP", "Prototype"],
    role: "Solo build",
    period: "2026",
    href: "https://github.com/rishibajaj-Prodman/bim-change-engine",
    outcomes: [
      "One diff produces different actions for BIM coordinator, estimator and site engineer",
      "Explicit refusal contract — declines to verify what the diff does not carry",
    ],
  },
  {
    title: "The Action Gap",
    description:
      "A live interactive session app for an HHL Leipzig MBA Organizational Behavior class on climate change. Three cohorts participate from their phones while a projector shows the unfolding journey.",
    tags: ["Next.js", "Realtime", "Facilitation", "Climate"],
    role: "Solo build",
    period: "2026",
    href: "https://github.com/rishibajaj-Prodman/Action-Gap",
    outcomes: [
      "Four rounds surfacing the gap between what people believe, say and do",
      "Facilitator console, live projector poster, and per-cohort insight briefings",
    ],
  },
  {
    title: "Climate tech venture — EIR",
    description:
      "Entrepreneur-in-residence program at a climate tech collective, building alongside the MBA.",
    tags: ["Venture", "Climate", "EIR"],
    role: "Entrepreneur in Residence",
    period: "Current",
    href: null,
    outcomes: [],
  },
  {
    title: "HHL incubation venture",
    description: "A second venture in active incubation at HHL Leipzig.",
    tags: ["Venture", "Incubation"],
    role: "Founder",
    period: "Current",
    href: null,
    outcomes: [],
  },
];

export const experience = [
  {
    type: "education",
    title: "MBA Candidate",
    company: "HHL Leipzig Graduate School of Management",
    period: "Current",
    description:
      "Adding business depth to product judgment, while building two ventures alongside the program.",
    achievements: [
      "Entrepreneur-in-residence at a climate tech collective",
      "Second venture in active incubation at HHL",
    ],
  },
  {
    type: "work",
    title: "Product Manager (from Product Owner)",
    company: "US venture-funded growth-stage SaaS",
    period: "Three years",
    description:
      "Grew from Product Owner to Product Manager under a strong product leadership team. Each step was a harder problem than the last.",
    achievements: [
      "Brought reliability to how the team shipped",
      "Used discovery to get customers to value faster",
      "Owned retention end to end as a business problem",
    ],
  },
  {
    type: "work",
    title: "Product Manager",
    company: "Bootstrapped construction SaaS, India",
    period: "Three years",
    description:
      "Construction is not a normal software market — decisions happen on site, across owners, contractors and project managers who all see the problem differently.",
    achievements: [
      "100+ site visits to find the real problem underneath conflicting accounts",
      "Navigated a multi-stakeholder market with no established playbook",
    ],
  },
];

export const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
