import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const connections = [
  [
    "Fast response",
    "Performance is part of the interaction, not a backend-only metric.",
  ],
  [
    "Predictable states",
    "Reliable API contracts make loading, empty, success, and error states understandable.",
  ],
  [
    "Accessible interaction",
    "Keyboard paths, focus, contrast, and semantics are product requirements.",
  ],
  [
    "Graceful failure",
    "A useful error with preserved context is better than a dead end.",
  ],
  [
    "Responsive layout",
    "The product should feel designed—not compressed—on a smaller screen.",
  ],
  [
    "Less waiting",
    "Avoidable work belongs off the critical path whenever the tradeoff is sound.",
  ],
] as const;

export function ProductThinking() {
  return (
    <section
      className="section product-section"
      aria-labelledby="product-title"
    >
      <Container>
        <SectionHeader
          index="09"
          eyebrow="PRODUCT / UX THINKING"
          title="The backend is part of what the user feels."
        />
        <div className="connection-grid">
          {connections.map(([title, body], index) => (
            <Reveal key={title}>
              <article>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
