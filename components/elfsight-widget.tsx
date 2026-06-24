// Reusable Elfsight widget mount point. The platform loader (added once in the
// root layout) scans the DOM for these `elfsight-app-<id>` divs and hydrates them.
// Renders nothing when no appId is configured, so an unset env var is a no-op.
export function ElfsightWidget({
  appId,
  className,
}: {
  appId?: string;
  className?: string;
}) {
  if (!appId) return null;
  return (
    <div
      className={`elfsight-app-${appId}${className ? ` ${className}` : ""}`}
      data-elfsight-app-lazy
    />
  );
}
