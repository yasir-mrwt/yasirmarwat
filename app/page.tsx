import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { EngineeringFocus } from "@/components/sections/EngineeringFocus";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Stack } from "@/components/sections/Stack";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <SelectedWork />
        <Experience />
        <EngineeringFocus />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
