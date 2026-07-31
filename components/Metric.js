import { TBD } from "@/content/portfolio";
import { Placeholder } from "./Placeholder";

/* The quantified-outcome callout. The hellopm.co guide names vague,
   unquantified claims as the single most common portfolio mistake, so
   the metric is the largest thing in any card that has one. */
export function Metric({ label, value, size = "md" }) {
  const sizes = {
    md: "text-display-sm",
    lg: "text-display-lg",
  };

  return (
    <div>
      <p className="text-xs uppercase tracking-eyebrow text-muted">{label}</p>
      <div className="mt-1.5">
        {value === TBD ? (
          <Placeholder label="metric TBD" />
        ) : (
          <span className={`font-serif ${sizes[size]} text-terracotta leading-none`}>
            {value}
          </span>
        )}
      </div>
    </div>
  );
}
