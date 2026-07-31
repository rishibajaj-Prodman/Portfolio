export function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-ink/10 bg-sand-50 px-2.5 py-1 text-xs text-muted">
      {children}
    </span>
  );
}
