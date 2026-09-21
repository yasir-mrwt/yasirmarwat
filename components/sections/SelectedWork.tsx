import { Container } from "@/components/layout/Container";
import { ProjectCollection } from "@/components/projects/ProjectCollection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SelectedWork() {
  return (
    <section
      className="section work-section"
      id="work"
      aria-labelledby="work-title"
    >
      <Container>
        <SectionHeader eyebrow="SELECTED WORK" title="Evidence belongs here." />
        <ProjectCollection />
      </Container>
    </section>
  );
}
