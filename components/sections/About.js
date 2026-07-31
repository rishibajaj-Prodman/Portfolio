import { bio, strengths, skills } from "@/content/portfolio";
import { SectionHeader } from "../SectionHeader";
import { Tag } from "../Tag";

/* The Figma's About is a centred blurb, four strength cards, then a
   centred cloud of skill badges. Two changes: the real bio replaces the
   template's generic blurb, and skills are grouped by discipline rather
   than dumped as one undifferentiated cloud — a flat list of twelve tags
   tells a reader nothing about depth. */
export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-sand-50 border-y border-ink/10"
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-container mx-auto py-20 md:py-24">
        <SectionHeader
          id="about"
          eyebrow="About"
          title="How I think about product"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-12">
          <div className="space-y-5">
            {bio.map((paragraph, i) => (
              <p key={i} className="text-base text-ink/85 leading-relaxed max-w-prose">
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <div className="grid sm:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
              {strengths.map((s) => (
                <div key={s.title} className="bg-sand-50 p-6">
                  <h3 className="font-serif text-display-sm text-ink leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-xs uppercase tracking-eyebrow text-muted">
                Skills
              </h3>
              <dl className="mt-4 space-y-4">
                {Object.entries(skills).map(([group, items]) => (
                  <div key={group}>
                    <dt className="text-sm text-ink">{group}</dt>
                    <dd className="flex flex-wrap gap-2 mt-2">
                      {items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
