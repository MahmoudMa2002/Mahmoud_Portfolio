import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import AnimatedBackground from "../components/AnimatedBackground";
import Footer from "../components/Footer";
import FadeInOnScroll from "@/components/FadeInOnScroll";


export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />
            <main>
                <AnimatedBackground />
                <HeroSection />
                <FadeInOnScroll delay={0.2} direction="up">
                    <AboutSection />
                </FadeInOnScroll>
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </div >
    )
};

