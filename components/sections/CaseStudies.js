import { caseStudies } from "@/content/portfolio";
import { SectionHeader } from "../SectionHeader";
import { Tag } from "../Tag";
import { Metric } from "../Metric";

/* The Figma's case-study cards lead with a 16:9 stock photograph. There
   is no photography here, and for a PM portfolio the outcome is the
   thing worth looking at — the guide's stated top mistake is focusing on
   design instead of process and impact. So these cards are typographic
   and metric-led, with the numbers as the visual anchor. */
export function CaseStudies() {
  return (
    <section id="work" aria-labelledby="work-heading">
      <div className="px-6 md:px-12 lg:px-24 max-w-container mx-auto py-20 md:py-24">
        <SectionHeader
          id="work"
          eyebrow="Work"
          title="Case studies"
          blurb="Four problems, each harder than the last. Every study follows the same arc: the problem, what research changed, what I built, what it moved, and what I'd do differently."
        />

        <div className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10 mt-12">
          {caseStudies.map((cs) => (
            <article
              key={cs.id}
              className="group bg-paper p-6 md:p-8 hover:bg-sand-50 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-xs uppercase tracking-eyebrow text-muted">
                  {cs.context}
                </p>
                <p className="text-xs text-muted whitespace-nowrap">{cs.period}</p>
              </div>

              <h3 className="font-serif text-display-md text-ink mt-3 leading-snug group-hover:text-terracotta transition-colors">
                {cs.title}
              </h3>

              <p className="text-sm text-muted mt-1">{cs.role}</p>

              <p className="text-base text-ink/85 mt-4 leading-relaxed">
                {cs.summary}
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-ink/10">
                {cs.metrics.map((m) => (
                  <Metric key={m.label} label={m.label} value={m.value} />
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {cs.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="text-sm text-muted mt-6">
          Full write-ups are the next piece of work — the structure above is
          ready for them.
        </p>
      </div>
    </section>
  );
}
