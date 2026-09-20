export const principles = [
  {
    title: "Protect the critical path",
    body: "Secondary systems should not unnecessarily break the user’s main task.",
  },
  {
    title: "Validate boundaries",
    body: "Inputs, configuration, and external responses need explicit contracts.",
  },
  {
    title: "Automate confidence",
    body: "Tests, types, linting, and CI catch preventable failures before release.",
  },
  {
    title: "Measure before optimizing",
    body: "Find the actual bottleneck, choose a target, then verify the result.",
  },
  {
    title: "Keep deployment boring",
    body: "Repeatable builds and explicit environments reduce production surprises.",
  },
  {
    title: "UX is system quality",
    body: "Fast feedback, clear errors, and graceful failure are part of engineering quality.",
  },
] as const;
