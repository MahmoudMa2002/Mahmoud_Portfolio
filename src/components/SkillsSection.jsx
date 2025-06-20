const skills = [
    { name: 'HTML', category: 'front-tend', icon: 'https://www.svgrepo.com/show/452228/html-5.svg' },
    { name: 'CSS', category: 'front-end', icon: 'https://www.svgrepo.com/show/452185/css-3.svg' },
    { name: 'JavaScript', category: 'front-end', icon: 'https://www.svgrepo.com/show/353925/javascript.svg' },
    { name: 'Bootstrap', category: 'front-end', icon: 'https://www.svgrepo.com/show/353498/bootstrap.svg' },
    { name: 'Tailwind CSS', category: 'front-end', icon: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
    { name: 'EJS', category: 'front-end', icon: 'https://www.svgrepo.com/show/373574/ejs.svg' },
    { name: 'React', category: 'front-end', icon: 'https://www.svgrepo.com/show/452092/react.svg' },

    { name: 'Node.js', category: 'back-end', icon: 'https://www.svgrepo.com/show/452075/node-js.svg' },
    { name: 'Express.js', category: 'back-end', icon: 'https://images.seeklogo.com/logo-png/33/1/express-js-logo-png_seeklogo-339850.png' },
    { name: 'MongoDB', category: 'databases', icon: 'https://www.svgrepo.com/show/331488/mongodb.svg' },
    { name: 'MySQL', category: 'databases', icon: 'https://www.svgrepo.com/show/303251/mysql-logo.svg' },
    { name: 'PL/SQL', category: 'databases', icon: 'https://www.svgrepo.com/show/373980/plsql.svg' },
    { name: 'Passport.js', category: 'back-end', icon: 'https://miro.medium.com/v2/resize:fit:300/1*MipdKsttqecPnkKF1DL-qA.png' },

    { name: 'Git & GitHub', category: 'tools', icon: 'https://www.svgrepo.com/show/452210/git.svg' },
    { name: 'Render', category: 'tools', icon: 'https://pbs.twimg.com/profile_images/1735429515541938176/zOO1N7Su_400x400.jpg' },
    { name: 'Heroku', category: 'tools', icon: 'https://www.svgrepo.com/show/303683/heroku-logo.svg' },
    { name: 'Vite', category: 'tools', icon: 'https://www.svgrepo.com/show/374167/vite.svg' },
    { name: 'VS Code', category: 'tools', icon: 'https://www.svgrepo.com/show/452129/vs-code.svg' },
    { name: 'Postman', category: 'tools', icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
    { name: 'Mapbox', category: 'tools', icon: 'https://www.svgrepo.com/show/354035/mapbox-icon.svg ' },

    { name: 'Python', category: 'languages', icon: 'https://www.svgrepo.com/show/452091/python.svg' },
    { name: 'PHP', category: 'languages', icon: 'https://www.svgrepo.com/show/452088/php.svg' },
    { name: 'Java', category: 'languages', icon: 'https://www.svgrepo.com/show/452234/java.svg' },
    { name: 'C++', category: 'languages', icon: 'https://www.svgrepo.com/show/452183/cpp.svg' },
];

import { useState } from 'react';
import { cn } from '../lib/util';

const categories = ['All', 'Front-end', 'Back-end', 'Tools', 'Languages', 'Databases'];

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState('All');
    const filteredSkills = skills.filter((skill) => {
        if (activeCategory === 'All') return true;
        return skill.category.toLowerCase() === activeCategory.toLowerCase();
    });

    return (
        <section id="skills" className="py-8 px-4 relative bg-secondary/30 scroll-mt-12">
            <div className="container mx-auto max-w-6xl">
                {/*Title*/}
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div class="w-24 h-1 mb-6 bg-gradient-to-r from-primary to-border mx-auto rounded-full"></div>
                {/*Filter */}
                <div className='flex flex-wrap justify-center all gap-4 mb-8'>
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "cursor-pointer px-5 py-2 rounded-full transition-all duration-300",
                                activeCategory === category ? 'bg-primary text-primary-foreground' : "border border-primary text-primary hover:scale-[1.05] hover:bg-primary/10")}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/*skills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
                    {filteredSkills.map((skill, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-card p-6 rounded-xl shadow-xs card-hover flex flex-col items-center justify-center group transition-all duration-300 border border-border/50 hover:border-primary/30 transform hover:-translate-y-2"
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300"
                                />
                                <h3 className="font-semibold text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                    {skill.name}
                                </h3>
                            </div>
                        );

                    })}
                </div>
            </div>
        </section >
    );
};