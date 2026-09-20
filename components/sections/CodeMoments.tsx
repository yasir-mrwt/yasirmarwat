import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { SectionHeader } from "@/components/ui/SectionHeader";

const snippets = [
  {
    title: "Validate the boundary",
    language: "ts",
    why: "Reject malformed inputs before they can spread assumptions into business logic.",
    source: `const result = createUser.safeParse(req.body);\nif (!result.success) {\n  return res.status(400).json({\n    code: "INVALID_INPUT",\n    issues: result.error.flatten().fieldErrors,\n  });\n}`,
  },
  {
    title: "Test the contract",
    language: "ts",
    why: "Verify the observable API behavior rather than only isolated implementation details.",
    source: `await request(app)\n  .post("/api/users")\n  .send({ email: "not-an-email" })\n  .expect(400)\n  .expect(({ body }) => {\n    expect(body.code).toBe("INVALID_INPUT");\n  });`,
  },
  {
    title: "Gate the release",
    language: "yaml",
    why: "Make the minimum confidence checks repeatable before every deployment.",
    source: `- name: Verify\n  run: |\n    npm run lint\n    npm run typecheck\n    npm test\n    npm run build`,
  },
] as const;

export function CodeMoments() {
  return (
    <section className="section code-section" aria-labelledby="code-title">
      <Container>
        <SectionHeader
          index="06"
          eyebrow="CODE MOMENTS"
          title="Small code, specific purpose."
          intro="Each example exists to protect a boundary, behavior, or release—not to decorate the page."
        />
        <div className="code-grid">
          {snippets.map((snippet) => (
            <Reveal key={snippet.title}>
              <CodeBlock {...snippet}>{snippet.source}</CodeBlock>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
