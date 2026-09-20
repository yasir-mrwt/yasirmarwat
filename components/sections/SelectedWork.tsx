import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectSystem } from "@/components/projects/ProjectSystem";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section
      className="section work-section"
      id="work"
      aria-labelledby="work-title"
    >
      <Container>
        <SectionHeader
          eyebrow="SELECTED WORK"
          title="Evidence belongs here."
          intro="Each case study will show the problem, my contribution, implementation decisions, quality work, and real links. No invented outcomes."
        />
        <Reveal>
          <ProjectSystem project={projects[0]} />
        </Reveal>
      </Container>
    </section>
  );
}
