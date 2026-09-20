import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const request = [
  "Request",
  "Validation",
  "Authentication",
  "Business logic",
  "Cache",
  "Database",
  "Response",
];
const scale = [
  "Single instance",
  "Stateless service",
  "Multiple instances",
  "Shared cache",
  "Queue / async work",
  "Observability",
];
const questions = [
  "What breaks if this dependency is unavailable?",
  "Can this endpoint remain stateless?",
  "What work can be asynchronous?",
  "What can be cached safely—and how is it invalidated?",
  "Can retries duplicate work?",
  "Where is the actual bottleneck?",
  "How would we observe and test this failure?",
  "How does this behave under higher traffic?",
] as const;

function SteppedPath({ items, label }: { items: string[]; label: string }) {
  return (
    <ol className="stepped-path" aria-label={label}>
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          {item}
        </li>
      ))}
    </ol>
  );
}

export function ScalabilityLab() {
  return (
    <section
      className="section scalability"
      aria-labelledby="scalability-title"
    >
      <Container>
        <SectionHeader
          index="03"
          eyebrow="BACKEND / SCALABILITY LAB"
          title="Thinking beyond the happy path."
          intro="This is an engineering model and an area of active growth—not a claim of operating hyperscale infrastructure."
        />
        <div className="lab-grid">
          <Reveal className="lab-panel">
            <span className="mono-label">REQUEST_LIFECYCLE</span>
            <h3>A request earns each dependency.</h3>
            <SteppedPath items={request} label="Backend request lifecycle" />
          </Reveal>
          <Reveal className="lab-panel">
            <span className="mono-label">SCALING_PROGRESSION</span>
            <h3>Complexity arrives in stages.</h3>
            <SteppedPath items={scale} label="Scaling progression" />
          </Reveal>
          <Reveal className="questions-panel">
            <span className="mono-label">QUESTIONS_I_ASK</span>
            <ol>
              {questions.map((question, index) => (
                <li key={question}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {question}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
