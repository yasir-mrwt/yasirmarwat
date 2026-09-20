import { Container } from "@/components/layout/Container";
import { ProjectSystem } from "@/components/projects/ProjectSystem";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

export function SelectedSystems() {
  return (
    <section
      className="section selected-systems"
      id="work"
      aria-labelledby="work-title"
    >
      <Container>
        <SectionHeader
          index="02"
          eyebrow="SELECTED SYSTEMS"
          title="Explain the system, not just the screenshot."
          intro="One transparent demo proves the component language now. Factual project data can replace it later without rebuilding the experience."
        />
        <Reveal>
          <ProjectSystem project={projects[0]} />
        </Reveal>
      </Container>
    </section>
  );
}
