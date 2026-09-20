type StatusIndicatorProps = {
  label: string;
  state: "healthy" | "active" | "warning" | "offline";
};

export function StatusIndicator({ label, state }: StatusIndicatorProps) {
  return (
    <span className="status-indicator">
      <span className={`status-dot status-dot--${state}`} aria-hidden="true" />
      <span>{label}</span>
      <span className="sr-only">Status: {state}</span>
    </span>
  );
}
