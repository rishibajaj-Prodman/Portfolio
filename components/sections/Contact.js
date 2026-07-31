import { personalInfo } from "@/content/portfolio";

export function Contact() {
  const links = [
    { label: "Email", href: `mailto:${personalInfo.email}`, value: personalInfo.email },
    { label: "LinkedIn", href: personalInfo.linkedin, value: "/in/rishibajaj" },
    { label: "Substack", href: personalInfo.substack, value: "@rishibajaj" },
    { label: "GitHub", href: personalInfo.github, value: "rishibajaj-Prodman" },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-sand-50 border-t border-ink/10"
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-container mx-auto py-20 md:py-24">
        <div className="max-w-prose">
          <p className="text-xs uppercase tracking-eyebrow text-terracotta-text">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-display-lg md:text-display-xl text-ink mt-3 leading-tight"
          >
            If you&rsquo;re hiring a product manager at a European scaleup,
            I&rsquo;d like to talk.
          </h2>
          <div className="w-16 h-[3px] bg-terracotta mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 mt-12">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group bg-sand-50 p-6 hover:bg-paper transition-colors"
            >
              <p className="text-xs uppercase tracking-eyebrow text-muted">
                {l.label}
              </p>
              <p className="text-sm text-ink mt-2 group-hover:text-terracotta transition-colors break-words">
                {l.value}
              </p>
            </a>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-ink/10">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {personalInfo.name} &middot;{" "}
            {personalInfo.site}
          </p>
        </footer>
      </div>
    </section>
  );
}
