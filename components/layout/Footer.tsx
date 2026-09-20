import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <p>Interface → API → production</p>
        <p>
          Built with Next.js, TypeScript, and a bias toward clear failure
          states.
        </p>
        <a href="#home">Back to top ↑</a>
      </Container>
    </footer>
  );
}
