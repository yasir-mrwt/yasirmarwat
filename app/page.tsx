import { About } from "@/components/sections/About";
import { CodeMoments } from "@/components/sections/CodeMoments";
import { Contact } from "@/components/sections/Contact";
import { EngineeringIdentity } from "@/components/sections/EngineeringIdentity";
import { EngineeringPrinciples } from "@/components/sections/EngineeringPrinciples";
import { Experience } from "@/components/sections/Experience";
import { Exploring } from "@/components/sections/Exploring";
import { FailureExplorer } from "@/components/sections/FailureExplorer";
import { Hero } from "@/components/sections/Hero";
import { HiringValue } from "@/components/sections/HiringValue";
import { ProductThinking } from "@/components/sections/ProductThinking";
import { RecruiterFastPath } from "@/components/sections/RecruiterFastPath";
import { ScalabilityLab } from "@/components/sections/ScalabilityLab";
import { SelectedSystems } from "@/components/sections/SelectedSystems";
import { Stack } from "@/components/sections/Stack";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <EngineeringIdentity />
        <SelectedSystems />
        <ScalabilityLab />
        <FailureExplorer />
        <EngineeringPrinciples />
        <CodeMoments />
        <Stack />
        <Experience />
        <ProductThinking />
        <HiringValue />
        <Exploring />
        <About />
        <RecruiterFastPath />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
