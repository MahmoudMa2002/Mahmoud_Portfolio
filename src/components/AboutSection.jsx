import { Briefcase, Code, User, MapPin, GraduationCap, Globe } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="py-16 px-4 relative scroll-mt-3">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-3  text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="w-24 h-1 mb-12 bg-gradient-to-r from-primary to-border mx-auto rounded-full "></div>
                {/* Main Intro */}
                <div className="gradient-border p-8 mb-8 text-center border border-border/50  hover:border-primary/30 transform hover:-translate-y-2  transition-all duration-400 ">
                    <h3 className="text-2xl md:text-4xl lg:text-3xl font-semibold mb-4">
                        Software Engineer & Full-Stack Developer
                    </h3>
                    <div className="w-full h-px mb-4 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    <p className="text-muted-foreground text-md md:text-lg lg:text-lg mb-4 max-w-3xl mx-auto">
                        I’m a recent Software Engineering graduate from Jordan University of Science and Technology with strong experience in full-stack web development, user interface design, and problem-solving. I’ve built user-focused applications using the MERN stack, and continuously expand my skill set through practical projects and online training.
                    </p>
                    <p className="text-muted-foreground text-md md:text-lg lg:text-lg mb-4 max-w-3xl mx-auto">
                        I've over 5 years of customer-facing experience, bringing excellent communication, tech support, and multitasking skills to every team I join. Fluent in Arabic and English and passionate about clean code, thoughtful UX, and continuous learning. 
                    </p>
                    <div className="w-full h-px mb-4 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-6 mb-8 ">
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
                            <span>5+ Years in Customer-Facing Roles</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Globe className="h-4 w-4 text-primary" />
                            <span>Arabic & English</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

                {/* Skills & Experience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {/* Technical Expertise */}
                    <div className="gradient-border p-6  duration-500 border border-border/50 hover:border-primary/30 transform hover:-translate-y-2">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg mb-2">Technical Expertise</h4>
                                <p className="text-muted-foreground mb-3">
                                    Experienced in React, Node.js, and MongoDB, with a continuous interest in learning new technologies and best practices in web development.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Project Experience */}
                    <div className="gradient-border p-6  duration-400 border border-border/50 hover:border-primary/30 transform hover:-translate-y-2">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg mb-2">Notable Projects</h4>
                                <p className="text-muted-foreground mb-3">
                                    Built 50+ frontend projects and full-stack applications using modern technologies such as React and Tailwind CSS.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Professional Experience */}
                    <div className="gradient-border p-6  duration-400 border border-border/50 hover:border-primary/30 transform hover:-translate-y-2">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg mb-2">Professional Background</h4>
                                <p className="text-muted-foreground mb-3">
                                    Over 5 years of experience in customer-facing roles, improving my problem-solving and teamwork skills.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Learning & Growth */}
                    <div className="gradient-border p-6  duration-400 border border-border/50 hover:border-primary/30 transform hover:-translate-y-2">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg mb-2">Continuous Learning</h4>
                                <p className="text-muted-foreground mb-3">
                                    Completed Colt Steele's Web Developer Bootcamp and Brad Traversy’s 50 Projects in 50 Days course to sharpen my front-end and full-stack skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
