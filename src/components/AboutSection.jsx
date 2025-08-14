import { Briefcase, Code, User, MapPin, GraduationCap, Globe } from "lucide-react";
import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function AboutSection() {
    return (
        <section id="about" className="py-16 px-4 relative scroll-mt-3">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-3  text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="w-24 h-1 mb-12 bg-gradient-to-r from-primary to-border mx-auto rounded-full "></div>
                {/* Main Intro */}
                <FadeInOnScroll delay={0.2} direction="up" >
                    <div className="gradient-border rounded-2xl p-8 mb-8 text-center  border border-border/50  hover:border-primary/30 transform hover:-translate-y-2  transition-all duration-400 ">
                        <h3 className="text-2xl md:text-4xl lg:text-3xl font-semibold mb-4">
                            Software Engineer | Full-Stack Developer
                        </h3>
                        <div className="w-full h-px mb-4 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                        <p className="text-sm md:text-base lg:text-lg mb-4 max-w-3xl mx-auto px-2">
                            I’m a software engineer working at Aladdinb2b, where I build and maintain web apps using React, Node.js, and MongoDB. Most of my day-to-day is MERN, but I’ve also worked with SQL, PHP, Java, and other tools — I enjoy picking up whatever fits the project needs.
                        </p>
                        <p className="text-sm md:text-base lg:text-lg mb-4 max-w-3xl mx-auto px-2">
                            I graduated from Jordan University of Science and Technology with a GPA of 3.33. Outside of work, I’ve built 50+ frontend and full-stack projects, which really helped me sharpen my skills. Before graduating, I spent over 5 years in customer-facing roles, bringing strong communication and problem-solving skills to the teams I work with.
                        </p>
                        <div className="w-full h-px mb-4 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
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
                                <span>Full-Time Developer @ Aladdinb2b</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Globe className="h-4 w-4 text-primary" />
                                <span>Arabic & English</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                            <a href="#contact" className="main-button">
                                Get In Touch
                            </a>
                            <a
                                href="/MahmoudResume.pdf"
                                className="px-6 py-2 rounded-md border border-primary transition-all duration-400 text-primary hover:scale-[1.05] hover:bg-primary/10"
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
                    <FadeInOnScroll delay={0.2} direction="up" >
                        <div className="gradient-border p-4 md:p-6 duration-400 rounded-2xl p-6 border border-border/50 hover:border-primary/30 transform hover:-translate-y-2">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-base md:text-lg mb-2">Technical Expertise</h4>
                                    <p className="text-muted-foreground text-sm md:text-base mb-3 leading-relaxed">
                                        Experienced in React, Node.js, and MongoDB, with a continuous interest in learning new technologies and best practices in web development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeInOnScroll>

                    {/* Project Experience */}
                    <FadeInOnScroll delay={0.2} direction="up" >
                        <div className="gradient-border p-4 md:p-6 duration-400 rounded-2xl p-6 border border-border/50 hover:border-primary/30 transform hover:-translate-y-2">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-base md:text-lg mb-2">Notable Projects</h4>
                                    <p className="text-muted-foreground text-sm md:text-base mb-3 leading-relaxed">
                                        Built 50+ frontend projects and full-stack applications using modern technologies such as React, Tailwind CSS, Bootstrap and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeInOnScroll>

                    {/* Professional Experience */}
                    <FadeInOnScroll delay={0.3} direction="up" >
                        <div className="gradient-border p-4 md:p-6 duration-400 rounded-2xl p-6 border border-border/50 hover:border-primary/30 transform hover:-translate-y-2">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-base md:text-lg mb-2">Professional Background</h4>
                                    <p className="text-muted-foreground text-sm md:text-base mb-3 leading-relaxed">
                                        Currently working as a Junior MERN Stack Developer at AladdinB2B, where I focus on building, testing and improving web applications. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeInOnScroll>

                    {/* Learning & Growth */}
                    <FadeInOnScroll delay={0.3} direction="up" >
                        <div className="gradient-border p-4 md:p-6 duration-400 rounded-2xl p-6 border border-border/50 hover:border-primary/30 transform hover:-translate-y-2">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-base md:text-lg mb-2">Continuous Learning</h4>
                                    <p className="text-muted-foreground text-sm md:text-base mb-3 leading-relaxed">
                                        Completed Colt Steele's Web Developer Bootcamp and Brad Traversy’s 50 Projects in 50 Days course to sharpen my front-end and full-stack skills.
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
