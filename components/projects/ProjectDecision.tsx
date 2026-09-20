import type { ProjectDecision as Decision } from "@/data/projects";

export function ProjectDecision({ decision }: { decision: Decision }) {
  return (
    <article className="decision-card">
      <div className="decision-label">ENGINEERING DECISION / DEMO</div>
      <h3>{decision.title}</h3>
      <dl>
        <div>
          <dt>Problem</dt>
          <dd>{decision.problem}</dd>
        </div>
        <div>
          <dt>Decision</dt>
          <dd>{decision.decision}</dd>
        </div>
        <div>
          <dt>Why</dt>
          <dd>{decision.why}</dd>
        </div>
        <div>
          <dt>Tradeoff</dt>
          <dd>
            <ul>
              {decision.tradeoffs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt>Failure</dt>
          <dd>{decision.failureConsideration}</dd>
        </div>
      </dl>
    </article>
  );
}
