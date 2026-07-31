"use client";

import { useEffect, useState } from "react";
import { personalInfo, sections } from "@/content/portfolio";

/* Scroll-spy nav. The Figma's nav is plain anchor links with no
   indication of where you are — on a single-page site that is the one
   piece of orientation the user actually needs, so it is added here. */
export function Nav() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActive(visible[0].target.id);
      },
      /* Bias the band toward the upper third so a section registers as
         "current" once its heading is comfortably in view. */
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 bg-paper/85 backdrop-blur border-b border-ink/10"
    >
      <div className="flex items-center justify-between gap-4 py-4 px-6 md:px-12 lg:px-24 max-w-container mx-auto w-full">
        <a
          href="#top"
          className="font-serif text-lg text-ink hover:text-terracotta transition-colors shrink-0"
        >
          {personalInfo.name}
        </a>
        {/* Scrolls rather than wraps on narrow screens, with the scrollbar
            suppressed — a visible track under five short links is noise. */}
        <ul className="flex gap-3.5 md:gap-7 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-xs md:text-sm whitespace-nowrap transition-colors border-b-2 pb-0.5 ${
                    isActive
                      ? "text-terracotta-text border-terracotta"
                      : "text-muted border-transparent hover:text-terracotta-text"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
