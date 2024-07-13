import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import Header from "@/components/Header";
import HeroSection from "@/components/heroSection/HeroSection";

export default async function Index() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
    </main>
  );
}
