import Typewriter from "@/components/Typewriter";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      {/* Background image */}
      <div className="hero-background" />
      <div className="absolute inset-0 bg-black/60 dark:bg-black/30 transition-colors duration-500" />

      {/* Content */}
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            <span className="text-glow ml-2 opacity-0 animate-fade-in-delay-1 inline-block">
              Mahmoud
            </span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2 block">
              Abu al-Hayja’a
            </span>
          </h1>

          <div className="opacity-0 animate-fade-in-delay-3">
            <Typewriter texts={["Software Engineer Graduate | JUST University", "Full-Stack Developer | React, Node.js, MongoDB", "MERN Stack Developer @ AladdinB2B" ]} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="main-button w-40 sm:w-auto">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Arrow button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <ArrowDown className="h-10 w-10" />
      </div>
    </section>
  );
};
