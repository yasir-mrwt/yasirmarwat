type CodeBlockProps = {
  language: string;
  title?: string;
  why: string;
  children: string;
};

export function CodeBlock({
  language,
  title = "Code moment",
  why,
  children,
}: CodeBlockProps) {
  return (
    <figure className="code-card">
      <figcaption>
        <span>{title}</span>
        <span>{language}</span>
      </figcaption>
      <pre tabIndex={0} aria-label={`${title}, ${language}`}>
        <code>{children}</code>
      </pre>
      <p>
        <strong>Why it exists:</strong> {why}
      </p>
    </figure>
  );
}
