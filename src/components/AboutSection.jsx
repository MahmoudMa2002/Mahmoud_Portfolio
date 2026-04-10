import { Briefcase, Code, User, MapPin, GraduationCap, Globe } from "lucide-react";
import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function AboutSection() {
    return (
        <section id="about" className="py-16 px-1 sm:px-4 relative scroll-mt-3">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="w-32 h-1.5 mb-12 bg-gradient-to-r from-primary via-primary/50 to-border mx-auto rounded-full shadow-lg shadow-primary/20"></div>
                {/* Main Intro */}
                <FadeInOnScroll delay={0.2} direction="up" >
                    <div className="gradient-border rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-left border border-border/50 hover:border-primary/50 transform hover:-translate-y-2 transition-all duration-300">
                        <p className="text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto px-2 font-medium">
                            Hi, I’m Mahmoud. Welcome to my portfolio!
                        </p>
                        <div className="w-full h-px mb-8 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                        <p className="text-base md:text-lg mb-6 max-w-3xl mx-auto px-2 leading-relaxed text-muted-foreground">
                            I’m a software engineer currently working as a front-end developer at <a href="https://www.aladdinb2b.com/" target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-300">AladdinB2B</a>,
                            where I test, fix, and scale a large B2B codebase using React and JavaScript.
                            While I spend most of my time in JavaScript, I’ve also worked with SQL, PHP, Java, and more — all listed in my
                            <a href="#skills" className="text-primary hover:text-primary/80 transition-colors duration-300"> skills section</a>.
                        </p>
                        <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto px-2 leading-relaxed text-muted-foreground">
                            I graduated from<a href="https://www.just.edu.jo/Pages/Default.aspx" target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-300"> JUST University </a>
                            with a 3.33 GPA. Since graduating, I've taken multiple courses and built over 50 projects
                            showcased in my <a href="#projects" className="text-primary hover:text-primary/80 transition-colors duration-300"> projects section </a>
                            and on GitHub. Before graduating, I worked for 5+ years in customer-facing roles, which
                            helped me improve my problem solving skills within the teams I work with.
                        </p>
                        <div className="w-full h-px mb-8 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                        {/* Quick Stats */}
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 px-2">
                            <div className="flex items-center gap-2 text-sm">
                                <GraduationCap className="h-4 w-4 text-primary" />
                                <span>GPA: 3.33</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Code className="h-4 w-4 text-primary" />
                                <span>50+ Projects Built</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Briefcase className="h-4 w-4 text-primary" />
                                <span>Full-Time Developer</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Globe className="h-4 w-4 text-primary" />
                                <span>Arabic & English</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
                            <a href="#contact" className="main-button">
                                Get In Touch
                            </a>
                            <a
                                href="/MahmoudResume.pdf"
                                className="px-6 py-2 rounded-md border border-primary transition-all duration-300 text-primary hover:bg-primary/10 hover:scale-105"
                                download='MahmoudResume.pdf'
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </FadeInOnScroll>

                {/* Skills & Experience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {/* Technical Expertise */}
                    <FadeInOnScroll delay={0.2} direction="right" >
                        <div className="gradient-border p-7 md:p-8 shadow-lg rounded-2xl border border-border/50 hover:border-primary/50 transform hover:-translate-y-2 transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-start gap-4 h-full">
                                <div className="flex items-center gap-4 md:block">
                                    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                        <Code className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="font-semibold text-xl md:text-lg md:hidden">Technical Expertise</h4>
                                </div>
                                <div className="text-left">
                                    <h4 className="hidden md:block font-semibold text-xl md:text-lg mb-2">Technical Expertise</h4>
                                    <p className="text-muted-foreground text-md md:text-base leading-relaxed">
                                        Full-stack developer currently focused on the MERN stack. Very interested in keeping up with the latest tools to build better web apps and improve my workflow.
                                    </p>
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
                                    <h4 className="font-semibold text-xl md:text-lg md:hidden">Professional Background</h4>
                                </div>
                                <div className="text-left">
                                    <h4 className="hidden md:block font-semibold text-xl md:text-lg mb-2">Professional Background</h4>
                                    <p className="text-muted-foreground text-md md:text-base leading-relaxed">
                                        I've built over 50 projects, ranging from quick frontend components to complete full-stack apps. These projects are where I practiced how to turn ideas into code.
                                    </p>
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
                                    <h4 className="font-semibold text-xl md:text-lg md:hidden">Professional Experience</h4>
                                </div>
                                <div className="text-left">
                                    <h4 className="hidden md:block font-semibold text-xl md:text-lg mb-2">Professional Experience</h4>
                                    <p className="text-muted-foreground text-md md:text-base leading-relaxed">
                                        Currently working as a Junior front-end Developer at AladdinB2B, where I focus on building, testing and improving a large B2B codebase.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeInOnScroll>

                    {/* Learning & Growth */}
                    <FadeInOnScroll delay={0.8} direction="left" >
                        <div className="gradient-border p-7 md:p-8 shadow-lg rounded-2xl border border-border/50 hover:border-primary/50 transform hover:-translate-y-2 transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-start gap-4 h-full">
                                <div className="flex items-center  gap-4 md:block">
                                    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                        <User className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="font-semibold text-xl md:text-lg md:hidden">Continuous Learning</h4>
                                </div>
                                <div className="text-left">
                                    <h4 className="hidden md:block font-semibold text-xl md:text-lg mb-2">Continuous Learning</h4>
                                    <p className="text-muted-foreground text-md md:text-base leading-relaxed">
                                        Completed multiple courses including Colt Steele's Web Developer Bootcamp and Brad Traversy’s 50 Projects in 50 Days.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeInOnScroll>
                </div>
            </div>
        </section>
    );
};
