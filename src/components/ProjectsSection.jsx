import { ArrowRight, ExternalLink, Github } from "lucide-react";

const project = [
    {
        id: 1,
        title: 'Bus Reservation System',
        description: 'Early graduation project, served as a learning foundation for building dynamic websites and applying MVC architecture principles.',
        image: '/projects/project3.png',
        tags: ['JSP', 'MySQL', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/laithshabbar/proj2/tree/main/proj2'
    },
    {
        id: 2,
        title: '50 Projects in 50 Days',
        description: 'Built 50 mini frontend projects as part of Brad Traversy’s 50 Projects in 50 Days course. Each project was enhanced with improved structure and styling. Live demos and improvements are available on GitHub.',
        image: '/projects/project2.png',
        tags: ['CSS', 'JavaScript', 'HTML'],
        demoUrl: 'https://github.com/MahmoudMa2002/50projects50days?tab=readme-ov-file#project-list',
        githubUrl: 'https://github.com/MahmoudMa2002/50projects50days'
    },
    {
        id: 3,
        title: 'MapRoam',
        description: 'A full-stack web application for discovering and sharing locations, built independently while following Colt Steele’s The Web Developer Bootcamp. Full list of features and code available on GitHub.',
        image: '/projects/project1.png',
        tags: ['Node.js','Express.js', 'Mapbox', 'Passport.js', 'MongoDB'],
        demoUrl: 'https://jomap.onrender.com/',
        githubUrl: 'https://github.com/MahmoudMa2002/MapRoam'
    }
]

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-4 relative bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto max-w-6xl">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <div className="w-24 h-1 mb-6 bg-gradient-to-r from-primary to-border mx-auto rounded-full"></div>
                    <p className="text-muted-foreground mb-4 max-w-2xl mx-auto text-lg leading-relaxed">
                        A selection of my recent projects, showcasing my experience with full-stack development, front-end design, and early learning foundations.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                    {project.map((project, key) => (
                        <div
                            key={key}
                            className={`group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/30 transform hover:-translate-y-2 ${key === 2 ? "md:col-span-2 mx-auto max-w-2xl" : ""
                                }`}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <div className="h-48 md:h-56 lg:h-60 overflow-hidden bg-muted/20">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 space-y-4">
                                {/* Tags */}
                                <div className="flex flex-wrap justify-center gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs font-medium rounded-full border border-primary/30 text-primary bg-primary/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                                {/* Project Info */}
                                <div className="text-center space-y-3">
                                    <h3 className="text-xl font-semibold text-foreground">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Bottom Divider */}
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                                {/* Action Links */}
                                <div className="flex justify-center">
                                    <div className="flex items-center gap-6">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-all duration-300 group/link"
                                            >
                                                <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform duration-300" />
                                                <span className="text-sm font-medium">Live Demo</span>
                                            </a>
                                        )}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-all duration-300 group/link"
                                        >
                                            <Github size={16} className="group-hover/link:scale-110 transition-transform duration-300" />
                                            <span className="text-sm font-medium">Source</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <a
                        className="main-button w-fit flex items-center mx-auto p-3"
                        href="https://github.com/MahmoudMa2002"
                        target="_blank"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}
