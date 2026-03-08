import { Header } from "@/components/Header";
import { Hero } from "@/components/Sections/Hero";
import { About } from "@/components/Sections/About";
import { Platforms } from "@/components/Sections/Platforms";
import { Features } from "@/components/Sections/Features";
import { LessonFormat } from "@/components/Sections/LessonFormat";
import { WhyLearn } from "@/components/Sections/WhyLearn";
import { Contact } from "@/components/Sections/Contact";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Platforms />
        <Features />
        <LessonFormat />
        <WhyLearn />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
