import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const topics = [
  ["System design", "practiced"],
  ["Caching strategies", "practiced"],
  ["Horizontal scaling", "exploring"],
  ["Queues", "exploring"],
  ["Observability", "exploring"],
  ["Load testing", "next"],
  ["Database performance", "next"],
  ["Distributed systems fundamentals", "exploring"],
] as const;

export function Exploring() {
  return (
    <section
      className="section exploring-section"
      aria-labelledby="exploring-title"
    >
      <Container>
        <SectionHeader
          index="11"
          eyebrow="CURRENTLY EXPLORING"
          title="Growth, stated precisely."
          intro="These labels describe learning status, not production-scale claims."
        />
        <ul className="topic-list">
          {topics.map(([topic, state]) => (
            <li key={topic}>
              <span>{topic}</span>
              <span data-state={state}>{state}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
