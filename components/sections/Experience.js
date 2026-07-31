import { experience } from "@/content/portfolio";
import { SectionHeader } from "../SectionHeader";

/* Keeps the Figma's vertical timeline, restyled flat: a hairline rule
   instead of a grey bar, a small terracotta marker instead of a blue
   dot, and no card shadows. */
export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="px-6 md:px-12 lg:px-24 max-w-container mx-auto py-20 md:py-24">
        <SectionHeader
          id="experience"
          eyebrow="Experience"
          title="The path here"
        />

        <ol className="relative mt-12 max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute left-[5px] top-2 bottom-2 w-px bg-ink/10 hidden md:block"
          />

          {experience.map((exp, i) => (
            <li key={i} className="relative md:pl-10 pb-12 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 w-[11px] h-[11px] rounded-full bg-terracotta ring-4 ring-paper hidden md:block"
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-serif text-display-sm text-ink">
                  {exp.title}
                </h3>
                <p className="text-xs uppercase tracking-eyebrow text-muted">
                  {exp.period}
                </p>
              </div>

              <p className="text-sm text-terracotta-text mt-1">{exp.company}</p>

              <p className="text-base text-ink/85 mt-3 leading-relaxed max-w-prose">
                {exp.description}
              </p>

              {exp.achievements?.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {exp.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex gap-2.5 text-sm text-muted leading-relaxed"
                    >
                      <span className="text-terracotta shrink-0" aria-hidden="true">
                        —
                      </span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
