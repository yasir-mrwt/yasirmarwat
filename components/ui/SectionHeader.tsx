type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
};

export function SectionHeader({
  index,
  eyebrow,
  title,
  intro,
  light,
}: SectionHeaderProps) {
  return (
    <header
      className={`section-header ${light ? "section-header--light" : ""}`}
    >
      <div className="section-kicker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </header>
  );
}
