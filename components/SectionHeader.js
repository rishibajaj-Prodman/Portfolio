/* The site's signature opening, lifted from the home page and reused on
   every section: eyebrow -> serif title -> terracotta rule.

   Deliberate departure from the Figma, which centres every section
   heading. Seven centred headings in a row reads as a template; the
   left-aligned rule gives the page rhythm and matches the brand. */
export function SectionHeader({ eyebrow, title, blurb, id }) {
  return (
    <header className="max-w-prose">
      {eyebrow && (
        <p className="text-xs uppercase tracking-eyebrow text-terracotta-text">
          {eyebrow}
        </p>
      )}
      <h2
        id={id ? `${id}-heading` : undefined}
        className="font-serif text-display-lg md:text-display-xl text-ink mt-3 leading-tight"
      >
        {title}
      </h2>
      <div className="w-16 h-[3px] bg-terracotta mt-6" />
      {blurb && (
        <p className="text-base text-ink/85 mt-6 leading-relaxed">{blurb}</p>
      )}
    </header>
  );
}
