import { Briefcase, Code, User, MapPin, GraduationCap, Globe } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="py-16 px-4 relative scroll-mt-3">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                {/* Main Intro */}
                <div className="gradient-border p-8 mb-8 text-center">
                    <h3 className="text-2xl md:text-4xl lg:text-3xl font-semibold mb-4">
                        Software Engineer & Full-Stack Developer
                    </h3>
                    <hr className="border-primary mb-4" />
                    <p className="text-muted-foreground text-md md:text-lg lg:text-lg mb-4 max-w-3xl mx-auto">
                        I'm a recent Software Engineering graduate from Jordan University of Science and Technology, with hands-on experience building full-stack applications using the MERN stack. I've a passion for writing clean, efficient, and scalable code.
                    </p>
                    <p className="text-muted-foreground text-md md:text-lg lg:text-lg mb-4 max-w-3xl mx-auto">
                        With over 5 years in customer-facing roles, I'm confident in communicating clearly, offering tech support, and explaining ideas in simple terms. I enjoy building things that people find useful.
                    </p>
                    <hr className="border-primary mb-4" />
                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
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
                            <span>5+ Years Experience</span>
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
                            className="px-6 py-2 rounded-md border border-primary transition-all duration-300 text-primary hover:scale-[1.05] hover:bg-primary/10"
                            download='MahmoudResume.pdf'
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Skills & Experience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Technical Expertise */}
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg mb-2">Technical Expertise</h4>
                                <p className="text-muted-foreground mb-3">
                                    Proficient in the MERN stack with experience in building responsive frontend pages and efficient backend systems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Project Experience */}
                    <div className="gradient-border p-6 card-hover">
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
                    <div className="gradient-border p-6 card-hover">
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
                    <div className="gradient-border p-6 card-hover">
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