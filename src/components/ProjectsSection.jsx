import { ArrowRight, ExternalLink, Github } from "lucide-react";

const project = [
    {
        id: 1,
        title: 'Bus Reservation System',
        description: 'Early project, served as a learning foundation for building dynamic websites and applying MVC architecture principles.',
        image: '/projects/project3.png',
        tags: ['JSP', 'MySQL', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/laithshabbar/proj2/tree/main/proj2'
    },
    {
        id: 2,
        title: '50 Projects in 50 Days',
        description: 'Built 50 mini projects using HTML, CSS, and JavaScript with improved structure and style for each project.',
        image: '/projects/project2.png',
        tags: ['CSS', 'JavaScript', 'HTML'],
        demoUrl: 'https://codepen.io/collection/YwEpgk?grid_type=GRID',
        githubUrl: 'https://github.com/MahmoudMa2002/50projects50days'
    },
    {
        id: 3,
        title: 'MapRoam',
        description: 'A full-stack location discovery app built using the MERN stack. Full list of features on Github.',
        image: '/projects/project1.png',
        tags: ['MERN Stack', 'Mapbox', 'Passport.js', 'Render',],
        demoUrl: 'https://jomap.onrender.com/',
        githubUrl: 'https://github.com/MahmoudMa2002/MapRoam'
    }
]

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                {/*Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A selection of my recent projects, showcasing my experience with full-stack development, front-end design, and early learning foundations.
                </p>
                {/*Projects */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-8">
                    {project.map((project, key) => (
                        <div
                            key={key}
                            className={`group bg-card rounded-lg overflow-hidden shadow-xs card-hover ${key === 2 ? "md:col-span-2 mx-auto  max-w-2xl" : ""
                                }`}
                        >
                            {/*Project Image */}
                            <div className="lg:h-60 md:h-50 h-50 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                />
                            </div>
                            {/*Project tools */}
                            <div className="p-6">
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 text-xs font-medium border rounded-full border border-primary text-primary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {/*Project Description */}
                                <hr className="border-primary" />
                                <h3 className="text-xl mb-2 mt-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <hr className="border-primary" />
                                <div className="flex justify-center mt-2">
                                    <div className="flex space-x-4">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={18} />
                                                <span className="text-sm font-medium">Live Demo</span>
                                            </a>
                                        )}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={18} />
                                            <span className="text-sm font-medium">Source</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="main-button w-fit flex items-center mx-auto gap-2"
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