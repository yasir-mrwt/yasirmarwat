type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function SectionHeader({ eyebrow, title, intro }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <span className="section-kicker">{eyebrow}</span>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </header>
  );
}
