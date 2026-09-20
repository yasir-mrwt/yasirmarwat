export function ProjectFlow({ stages }: { stages: readonly string[] }) {
  return (
    <div
      className="pipeline"
      aria-label={`Deployment flow: ${stages.join(" then ")}`}
    >
      {stages.map((stage, index) => (
        <div key={stage}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{stage}</strong>
        </div>
      ))}
    </div>
  );
}
