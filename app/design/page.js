export const metadata = {
  title: "Design System — Rishi Bajaj",
  robots: { index: false, follow: false },
};

/* The stock values this system shipped with, kept here purely so the
   before/after below is honest. These tokens no longer exist. */
const before = [
  { label: "primary", value: "#030213" },
  { label: "accent", value: "#2563eb" },
  { label: "gradient", value: "#9333ea" },
  { label: "surface", value: "#f9fafb" },
  { label: "muted", value: "#6b7280" },
  { label: "text", value: "#111827" },
];

const after = [
  { label: "primary", value: "var(--terracotta)" },
  { label: "accent", value: "var(--terracotta-text)" },
  { label: "surface", value: "var(--sand-50)" },
  { label: "band", value: "var(--sand-200)" },
  { label: "muted", value: "var(--muted)" },
  { label: "text", value: "var(--ink)" },
];

const sand = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const anchors = [
  { name: "paper", hex: "#f5f3ee", css: "var(--paper)", on: "var(--ink)", note: "ground" },
  { name: "ink", hex: "#1a1a18", css: "var(--ink)", on: "var(--paper)", note: "body text" },
  { name: "terracotta", hex: "#c84b2f", css: "var(--terracotta)", on: "var(--paper)", note: "the only accent" },
  { name: "muted", hex: "#8a8878", css: "var(--muted)", on: "var(--paper)", note: "secondary text" },
];

const semantic = [
  { name: "positive", css: "var(--positive)", ratio: "5.17:1", note: "improvement" },
  { name: "negative", css: "var(--negative)", ratio: "4.9:1", note: "regression" },
  { name: "terracotta", css: "var(--terracotta)", ratio: "4.21:1", note: "large text & rules only" },
  { name: "terracotta-text", css: "var(--terracotta-text)", ratio: "4.62:1", note: "small text — AA safe" },
];

function Section({ id, num, title, children, blurb }) {
  return (
    <section id={id} className="mt-20 scroll-mt-8">
      <div className="flex items-baseline gap-3">
        <span className="text-xs text-muted tabular-nums">{num}</span>
        <h2 className="font-serif text-display-sm text-ink">{title}</h2>
      </div>
      {blurb && <p className="text-sm text-muted mt-2 max-w-prose leading-relaxed">{blurb}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function DesignPage() {
  return (
    <article className="px-6 md:px-12 lg:px-24 max-w-container mx-auto pb-32">
      <p className="animate-fade-up delay-1 text-xs uppercase tracking-eyebrow text-terracotta-text mt-16">
        Design System · Internal
      </p>
      <h1 className="animate-fade-up delay-2 font-serif text-display-xl md:text-display-2xl text-ink mt-4">
        The bones
      </h1>
      <div className="animate-fade-up delay-3 w-16 h-[3px] bg-terracotta mt-8" />
      <p className="animate-fade-up delay-4 text-base text-ink/85 mt-8 max-w-prose leading-relaxed">
        Every value below resolves from{" "}
        <code className="text-sm text-terracotta-text">design-system/tokens/</code> — the same
        files the Claude Design project reads. Change a token there and both this page and the
        live site move together.
      </p>

      <Section
        id="changed"
        num="01"
        title="What changed"
        blurb="Top row is what the Figma template shipped with — stock shadcn neutrals and an ad-hoc blue. Bottom row is your identity. This is the whole point of the round: same structure, different skin."
      >
        <div className="space-y-3">
          <div>
            <p className="text-xs uppercase tracking-eyebrow text-muted mb-2">Before · template</p>
            <div className="flex gap-2">
              {before.map((c) => (
                <div key={c.label} className="flex-1">
                  <div className="h-16 rounded border border-ink/10" style={{ background: c.value }} />
                  <p className="text-[11px] text-muted mt-1.5">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-eyebrow text-terracotta-text mb-2">After · yours</p>
            <div className="flex gap-2">
              {after.map((c) => (
                <div key={c.label} className="flex-1">
                  <div className="h-16 rounded border border-ink/10" style={{ background: c.value }} />
                  <p className="text-[11px] text-muted mt-1.5">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-muted mt-4 max-w-prose leading-relaxed">
          The template had no serif at all — system sans only. That is the single largest
          departure, and it is why the type section below matters more than the colour.
        </p>
      </Section>

      <Section id="anchors" num="02" title="Brand anchors" blurb="The four colours already shipped on rishibajaj.space. Everything else derives from these.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {anchors.map((c) => (
            <div key={c.name}>
              <div
                className="h-28 rounded border border-ink/10 flex items-end p-3"
                style={{ background: c.css, color: c.on }}
              >
                <span className="text-xs">{c.hex}</span>
              </div>
              <p className="text-sm text-ink mt-2">{c.name}</p>
              <p className="text-xs text-muted">{c.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="ramp" num="03" title="Warm neutral ramp" blurb="sand-50 through sand-900, anchored at paper and ink. Replaces the template's cool grays, which read visibly blue against a warm ground.">
        <div className="flex gap-1">
          {sand.map((step) => (
            <div key={step} className="flex-1">
              <div
                className="h-20 rounded-sm border border-ink/10"
                style={{ background: `var(--sand-${step})` }}
              />
              <p className="text-[11px] text-muted mt-1.5 text-center">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contrast" num="04" title="Semantics & contrast" blurb="Case studies report deltas where good is sometimes a decrease — churn, time-to-value. These read as improvement and regression, not up and down.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {semantic.map((c) => (
            <div key={c.name}>
              <div className="h-20 rounded border border-ink/10" style={{ background: c.css }} />
              <p className="text-sm text-ink mt-2">{c.name}</p>
              <p className="text-xs text-muted">
                <span className="tabular-nums">{c.ratio}</span> · {c.note}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 border-l-2 border-terracotta pl-4 max-w-prose">
          <p className="text-sm text-ink/85 leading-relaxed">
            Brand terracotta measures <strong>4.21:1</strong> on paper — fine for the accent rule
            and display type, short of the 4.5:1 body-text threshold. Your home page eyebrow
            currently uses it at 12px, which fails AA. Swapping that one class to{" "}
            <code className="text-terracotta-text">text-terracotta-text</code> fixes it.
          </p>
        </div>
      </Section>

      <Section id="type" num="05" title="Type" blurb="Serif-first. DM Serif Display ships one weight, so emphasis comes from size and colour — never faux bold.">
        <div className="space-y-4">
          <div className="pb-4 border-b border-ink/10">
            <p className="font-serif text-display-2xl text-ink leading-none">Rishi Bajaj</p>
            <p className="text-xs text-muted mt-2">display-2xl · DM Serif Display · page title</p>
          </div>
          <div className="pb-4 border-b border-ink/10">
            <p className="font-serif text-display-lg text-ink">Case study title</p>
            <p className="text-xs text-muted mt-2">display-lg · section openers</p>
          </div>
          <div className="pb-4 border-b border-ink/10">
            <p className="text-xs uppercase tracking-eyebrow text-terracotta-text">
              Product Manager · Leipzig, Germany
            </p>
            <p className="text-xs text-muted mt-2">eyebrow · xs · 0.2em tracking</p>
          </div>
          <div className="pb-4 border-b border-ink/10">
            <p className="text-base text-ink/85 max-w-prose leading-relaxed">
              Body copy at base size, DM Sans 400, capped at a 65ch measure so long-form case
              studies stay readable.
            </p>
            <p className="text-xs text-muted mt-2">base · 65ch measure</p>
          </div>
        </div>
      </Section>

      <Section id="surface" num="06" title="Elevation & radius" blurb="Flat. Structure comes from hairline rules at 10% ink and from whitespace. The template's four-step shadow ramp on resting cards is gone — shadows now mean only 'floats above the page'.">
        <div className="flex flex-wrap gap-6 items-start">
          <div className="w-48 h-24 bg-sand-50 border border-ink/10 rounded flex items-center justify-center">
            <span className="text-xs text-muted">card · rule only</span>
          </div>
          <div className="w-48 h-24 bg-sand-50 rounded shadow-overlay flex items-center justify-center">
            <span className="text-xs text-muted">overlay</span>
          </div>
          <div className="w-48 h-24 bg-sand-50 rounded shadow-modal flex items-center justify-center">
            <span className="text-xs text-muted">modal</span>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-8">
          {["rounded-sm", "rounded-md", "rounded-lg", "rounded-xl", "rounded-full"].map((r) => (
            <div key={r} className={`w-14 h-14 bg-sand-200 border border-ink/10 ${r}`} />
          ))}
          <span className="text-xs text-muted ml-2">sm · md · lg · xl · full — near-square by default</span>
        </div>
      </Section>

      <Section id="motion" num="07" title="Motion" blurb="A staggered fade-up entrance — 700ms, 24px travel, 100ms between steps. Reload the page to replay it; the bars below are on the same ladder as the header above.">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className={`animate-fade-up delay-${i} flex-1 h-12 bg-terracotta rounded-sm`}
            />
          ))}
        </div>
        <p className="text-sm text-muted mt-4 max-w-prose leading-relaxed">
          Retime the whole sequence with one token — <code>--stagger-step</code>. Guarded by{" "}
          <code>prefers-reduced-motion</code>, which resolves to the finished state immediately
          rather than a slower animation.
        </p>
      </Section>

      <footer className="mt-24 pt-8 border-t border-ink/10">
        <p className="text-xs text-muted">
          Not indexed. Tokens live in <code>design-system/tokens/</code>, mirrored to the
          Claude Design project.
        </p>
      </footer>
    </article>
  );
}
