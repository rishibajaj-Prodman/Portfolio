import { projects } from "@/content/portfolio";
import { SectionHeader } from "../SectionHeader";
import { Tag } from "../Tag";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-sand-50 border-y border-ink/10"
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-container mx-auto py-20 md:py-24">
        <SectionHeader
          id="projects"
          eyebrow="Projects"
          title="Ventures and builds"
          blurb="What I'm making alongside the MBA — two ventures in progress, and prototypes where I wanted to understand a problem by building it."
        />

        <div className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10 mt-12">
          {projects.map((p) => {
            const Wrapper = p.href ? "a" : "div";
            const linkProps = p.href
              ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Wrapper
                key={p.title}
                {...linkProps}
                className={`group block bg-sand-50 p-6 md:p-8 transition-colors ${
                  p.href ? "hover:bg-paper" : ""
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-display-sm text-ink group-hover:text-terracotta transition-colors">
                    {p.title}
                  </h3>
                  {p.href && (
                    <span
                      aria-hidden="true"
                      className="text-muted group-hover:text-terracotta transition-colors shrink-0"
                    >
                      ↗
                    </span>
                  )}
                </div>

                <p className="text-sm text-ink/85 mt-3 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-1 mt-5 pt-4 border-t border-ink/10 text-xs text-muted">
                  <span>{p.role}</span>
                  <span>{p.period}</span>
                </div>

                {p.outcomes.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex gap-2 text-sm text-muted leading-relaxed">
                        <span className="text-terracotta shrink-0" aria-hidden="true">
                          —
                        </span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
