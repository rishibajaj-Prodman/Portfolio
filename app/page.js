import Link from "next/link";

const bio = [
  "Great product work happens across three dimensions at once — betting on which customers and markets are worth the company\u2019s attention, experimenting your way to the right solution before committing to build, and shipping fast enough that real users tell you if you got it right. I\u2019ve spent six years doing all three.",
  "I started at a small, bootstrapped construction SaaS startup in India. Construction is not a normal software market — decisions happen on site, across owners, contractors, and project managers who all see the problem differently. 100+ visits taught me how to navigate that — and find the real problem underneath all of it.",
  "From there I joined a US based, venture-funded growth-stage startup — where, under a strong product leadership team, I learnt what great product management actually looks like and grew from Product Owner to Product Manager over three years. Each step was a harder problem: first bringing reliability to how the team shipped, then using discovery to get customers to value faster, then owning the business problem of retention end to end.",
  "I\u2019m now at HHL Leipzig doing an MBA — adding business depth to product judgment. I\u2019m building ventures alongside my studies, one in an EIR program at a climate tech collective and one in active incubation at HHL.",
  "This site is where it all lives — the work, the ventures, the writing, and the thinking behind all of it. I update it as I go. If you\u2019re looking for a product manager at a European scaleup, I\u2019d like to talk.",
];

const externalLinks = [
  { label: "CV", href: "/cv" },
  { label: "LinkedIn", href: "https://linkedin.com/in/rishibajaj" },
  { label: "Substack", href: "https://substack.com/@rishibajaj" },
  { label: "Email", href: "mailto:hello@rishibajaj.space" },
];

const sections = [
  { title: "Work", href: "/work", desc: "Six years of product management across two startups." },
  { title: "Projects", href: "/projects", desc: "Ventures and builds from MBA and beyond." },
  { title: "Writing", href: "/writing", desc: "Essays on product, strategy, and building." },
  { title: "Now", href: "/now", desc: "What I\u2019m focused on right now." },
];

export default function AboutPage() {
  return (
    <article className="px-6 md:px-12 lg:px-24 max-w-3xl mx-auto pb-24">
      {/* Eyebrow */}
      <p className="animate-fade-up delay-1 text-xs uppercase tracking-[0.2em] text-terracotta font-sans mt-16 md:mt-24">
        Product Manager &middot; Leipzig, Germany
      </p>

      {/* Name */}
      <h1 className="animate-fade-up delay-2 font-serif text-5xl md:text-6xl lg:text-7xl text-ink mt-4 leading-tight">
        Rishi Bajaj
      </h1>

      {/* Accent divider */}
      <div className="animate-fade-up delay-3 w-16 h-[3px] bg-terracotta mt-8" />

      {/* Bio */}
      <div className="mt-10 space-y-5">
        {bio.map((paragraph, i) => (
          <p
            key={i}
            className={`animate-fade-up delay-${i + 4} text-base md:text-lg leading-relaxed text-ink/85`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Links row */}
      <div className="animate-fade-up delay-9 flex flex-wrap gap-6 mt-12">
        {externalLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-sm text-ink underline underline-offset-4 decoration-muted/40 hover:text-terracotta hover:decoration-terracotta transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Section previews */}
      <section className="animate-fade-up delay-10 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group"
            >
              <h3 className="font-serif text-xl text-ink group-hover:text-terracotta transition-colors">
                {section.title}
              </h3>
              <p className="text-sm text-muted mt-1 leading-snug">
                {section.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-ink/10">
        <p className="text-xs text-muted">
          &copy; 2026 Rishi Bajaj &middot; rishibajaj.space
        </p>
      </footer>
    </article>
  );
}
