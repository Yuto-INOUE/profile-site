import { Header } from "@/components/Header";
import { GeometricBackground } from "@/components/GeometricBackground";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <GeometricBackground />
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />

      </main>
      <Footer />
    </>
  );
}
