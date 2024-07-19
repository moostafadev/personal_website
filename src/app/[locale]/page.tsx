import { getAllProjectsAction } from "@/actions/project.action";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import Header from "@/components/Header";
import HeroSection from "@/components/heroSection/HeroSection";
import SkillsSection from "@/components/SkillsSection";

export default async function Index() {
  const projects = await getAllProjectsAction();
  console.log(projects);
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
    </main>
  );
}
