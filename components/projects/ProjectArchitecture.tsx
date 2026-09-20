import { SystemFlow } from "@/components/architecture/SystemFlow";
import type { ArchitectureNode } from "@/data/projects";

export function ProjectArchitecture({
  nodes,
}: {
  nodes: readonly ArchitectureNode[];
}) {
  return (
    <div className="project-architecture">
      <div className="panel-heading">
        <span>SYSTEM_MAP / PLACEHOLDER</span>
        <span>TAP TO INSPECT</span>
      </div>
      <SystemFlow items={nodes} label="Demo project architecture" />
    </div>
  );
}
