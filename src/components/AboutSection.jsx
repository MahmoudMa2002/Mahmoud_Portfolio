import { Briefcase, Code, User, MapPin, GraduationCap, Globe } from "lucide-react";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { useLanguage } from '../LanguageContext';

export default function AboutSection() {
    const { t } = useLanguage();
    const a = t.about;

    return (
        <section id="about" className="py-16 px-1 sm:px-4 relative scroll-mt-3">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    {a.heading} <span className="text-primary">{a.headingHighlight}</span>
                </h2>
                <div className="w-32 h-1.5 mb-12 bg-gradient-to-r from-primary via-primary/50 to-border mx-auto rounded-full shadow-lg shadow-primary/20"></div>

                {/* Main Intro */}
                <FadeInOnScroll delay={0.2} direction="up" >
                    <div className="gradient-border rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-border/50 hover:border-primary/50 transform hover:-translate-y-2 transition-all duration-300">
                        <p className="text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto px-2 font-medium">
                            {a.intro}
                        </p>
                        <div className="w-full h-px mb-8 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                        <p className="text-base md:text-lg mb-6 max-w-3xl mx-auto px-2 leading-relaxed text-muted-foreground">
                            {a.bio1s1}
                            <a href="https://www.aladdinb2b.com/" target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-300">{a.aladdinLinkText}</a>
                            {a.bio1s2}
                            <a href="#skills" className="text-primary hover:text-primary/80 transition-colors duration-300">{a.skillsLinkText}</a>
                            {a.bio1s3}
                        </p>
                        <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto px-2 leading-relaxed text-muted-foreground">
                            {a.bio2s1}
                            <a href="https://www.just.edu.jo/Pages/Default.aspx" target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-300"> {a.justLinkText} </a>
                            {a.bio2s2}
                            <a href="#projects" className="text-primary hover:text-primary/80 transition-colors duration-300">{a.projectsLinkText}</a>
                            {a.bio2s3}
                        </p>
                        <div className="w-full h-px mb-8 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 px-2">
                            <div className="flex items-center gap-2 text-sm">
                                <GraduationCap className="h-4 w-4 text-primary" />
                                <span>{a.statGpa}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Code className="h-4 w-4 text-primary" />
                                <span>{a.statProjects}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Briefcase className="h-4 w-4 text-primary" />
                                <span>{a.statRole}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Globe className="h-4 w-4 text-primary" />
                                <span>{a.statLanguages}</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
                            <a href="#contact" className="main-button">
                                {a.getInTouch}
                            </a>
                            <a
                                href="/MahmoudResume.pdf"
                                className="px-6 py-2 rounded-md border border-primary transition-all duration-300 text-primary hover:bg-primary/10 hover:scale-105"
                                download='MahmoudResume.pdf'
                            >
                                {a.downloadCv}
                            </a>
                        </div>
                    </div>
                </FadeInOnScroll>

                {/* Skills & Experience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Technical Expertise */}
                    <FadeInOnScroll delay={0.2} direction="right" >
                        <div className="gradient-border p-7 md:p-8 shadow-lg rounded-2xl border border-border/50 hover:border-primary/50 transform hover:-translate-y-2 transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-start gap-4 h-full">
                                <div className="flex items-center gap-4 md:block">
                                    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                        <Code className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="font-semibold text-xl md:text-lg md:hidden">{a.card1Title}</h4>
                                </div>
                                <div className="text-start">
                                    <h4 className="hidden md:block font-semibold text-xl md:text-lg mb-2">{a.card1Title}</h4>
                                    <p className="text-muted-foreground text-md md:text-base leading-relaxed">{a.card1Desc}</p>
                                </div>
                            </div>
                        </div>
                    </FadeInOnScroll>

                    {/* Project Experience */}
                    <FadeInOnScroll delay={0.4} direction="left" >
                        <div className="gradient-border p-7 md:p-8 shadow-lg rounded-2xl border border-border/50 hover:border-primary/50 transform hover:-translate-y-2 transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-start gap-4 h-full">
                                <div className="flex items-center gap-4 md:block">
                                    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="font-semibold text-xl md:text-lg md:hidden">{a.card2Title}</h4>
                                </div>
                                <div className="text-start">
                                    <h4 className="hidden md:block font-semibold text-xl md:text-lg mb-2">{a.card2Title}</h4>
                                    <p className="text-muted-foreground text-md md:text-base leading-relaxed">{a.card2Desc}</p>
                                </div>
                            </div>
                        </div>
                    </FadeInOnScroll>

                    {/* Professional Experience */}
                    <FadeInOnScroll delay={0.6} direction="right" >
                        <div className="gradient-border p-7 md:p-8 shadow-lg rounded-2xl border border-border/50 hover:border-primary/50 transform hover:-translate-y-2 transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-start gap-4 h-full">
                                <div className="flex items-center gap-4 md:block">
                                    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                        <Briefcase className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="font-semibold text-xl md:text-lg md:hidden">{a.card3Title}</h4>
                                </div>
                                <div className="text-start">
                                    <h4 className="hidden md:block font-semibold text-xl md:text-lg mb-2">{a.card3Title}</h4>
                                    <p className="text-muted-foreground text-md md:text-base leading-relaxed">{a.card3Desc}</p>
                                </div>
                            </div>
                        </div>
                    </FadeInOnScroll>

                    {/* Learning & Growth */}
                    <FadeInOnScroll delay={0.8} direction="left" >
                        <div className="gradient-border p-7 md:p-8 shadow-lg rounded-2xl border border-border/50 hover:border-primary/50 transform hover:-translate-y-2 transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-start gap-4 h-full">
                                <div className="flex items-center gap-4 md:block">
                                    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                        <User className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="font-semibold text-xl md:text-lg md:hidden">{a.card4Title}</h4>
                                </div>
                                <div className="text-start">
                                    <h4 className="hidden md:block font-semibold text-xl md:text-lg mb-2">{a.card4Title}</h4>
                                    <p className="text-muted-foreground text-md md:text-base leading-relaxed">{a.card4Desc}</p>
                                </div>
                            </div>
                        </div>
                    </FadeInOnScroll>
                </div>
            </div>
        </section>
    );
}
