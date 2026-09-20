import { Container } from "./Container";
import { profileData } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <p>
          © {new Date().getFullYear()} {profileData.fullName}
        </p>
        <p>
          {profileData.displayTitle} · {profileData.location}
        </p>
        <a href="#home">Back to top ↑</a>
      </Container>
    </footer>
  );
}
