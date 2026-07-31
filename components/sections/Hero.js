import { personalInfo, stats, TBD } from "@/content/portfolio";
import { Placeholder } from "../Placeholder";

/* Follows the Figma's two-column hero — intro left, 2x2 stat grid right.
   Two deliberate changes: the blue-to-purple gradient blob is gone (this
   system has no gradients), and the section is not min-h-screen. A full
   viewport hero hides the fact that anything follows it; leaving the next
   section peeking is what actually gets people to scroll. */
export function Hero() {
  return (
    <section id="top" className="px-6 md:px-12 lg:px-24 max-w-container mx-auto pt-16 md:pt-24 pb-20">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="animate-fade-up delay-1 text-xs uppercase tracking-eyebrow text-terracotta-text">
            {personalInfo.title} · {personalInfo.location}
          </p>

          <h1 className="animate-fade-up delay-2 font-serif text-display-xl md:text-display-2xl lg:text-display-3xl text-ink mt-4 leading-none">
            {personalInfo.name}
          </h1>

          <div className="animate-fade-up delay-3 w-16 h-[3px] bg-terracotta mt-8" />

          <p className="animate-fade-up delay-4 text-lg text-ink/85 mt-8 max-w-prose leading-relaxed">
            {personalInfo.positioning}
          </p>

          <div className="animate-fade-up delay-5 flex flex-wrap gap-3 mt-10">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-terracotta text-paper px-5 py-2.5 rounded-sm text-sm hover:bg-terracotta-text transition-colors"
            >
              View my work
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-ink/20 text-ink px-5 py-2.5 rounded-sm text-sm hover:border-terracotta hover:text-terracotta-text transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="animate-fade-up delay-6 flex flex-wrap gap-5 mt-8">
            {[
              { label: "Email", href: `mailto:${personalInfo.email}` },
              { label: "LinkedIn", href: personalInfo.linkedin },
              { label: "Substack", href: personalInfo.substack },
              { label: "GitHub", href: personalInfo.github },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm text-muted underline underline-offset-4 decoration-muted/40 hover:text-terracotta-text hover:decoration-terracotta transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="animate-fade-up delay-7 grid grid-cols-2 gap-px bg-ink/10 border border-ink/10">
          {stats.map((s) => (
            <div key={s.label} className="bg-paper p-6 md:p-8">
              {s.value === TBD ? (
                <Placeholder label="TBD" />
              ) : (
                <span className="font-serif text-display-lg md:text-display-xl text-terracotta leading-none">
                  {s.value}
                </span>
              )}
              <p className="text-xs uppercase tracking-eyebrow text-muted mt-3">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
