/* Renders a visible gap for anything only Rishi can supply.
   Deliberately looks unfinished: a fake-but-plausible metric is far
   worse than an obvious blank, because it can ship by accident. */
export function Placeholder({ label = "TBD", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border border-dashed border-terracotta/50 text-terracotta-text rounded-sm px-2 py-0.5 text-xs tracking-wide ${className}`}
      title="Not yet supplied"
    >
      {label}
    </span>
  );
}
