import { useState } from 'react';
import { motion } from 'framer-motion';
import { PiGithubLogoBold, PiArrowSquareOutBold, PiArrowUpRightBold, PiCpuBold } from 'react-icons/pi';
import researchCoreImg from '../../assets/research-core.png';
import mattBrownImg from '../../assets/matt-brown.png';
import eekoAiImg from '../../assets/eeko-ai.png';
import rainosAppImg from '../../assets/rainos-app.png';
import gitwitImg from '../../assets/gitwit.png';
import earthlinkAiImg from '../../assets/earthlink-ai.png';
import ligmaImg from '../../assets/ligma.png';

const projects = [
    {
        title: 'Gitwit',
        description: 'An open-source AI-native cloud IDE with live previews, AI code generation, and sandboxed execution.',
        tags: ['React', 'AI', 'DevTools', 'Agentic AI'],
        links: { github: 'https://github.com/jamesmurdza/gitwit/', demo: 'https://gitwit.dev/' },
        image: gitwitImg,
        featured: true,
    },
    {
        title: 'EarthLink AI',
        description: 'Environmental intelligence platform turning plain English into rich map insights using satellite data.',
        tags: ['Next.js', 'Python', 'Tambo AI', 'Mapbox', 'Agentic AI'],
        links: { github: 'https://github.com/abdulrehmann231/EarthLink-AI/', demo: 'https://earth-link-ai.vercel.app/' },
        image: earthlinkAiImg,
        featured: true,
    },
    {
        title: 'Draftly',
        description: 'Realtime collaborative whiteboard with sub 50ms sync, AI task assignment, and PDF export.',
        tags: ['Next.js', 'WebSockets', 'Groq AI', 'Agentic AI'],
        links: { github: 'https://github.com/mustafahk27/LIGMA', demo: 'https://hopeful-curiosity-production-1c1a.up.railway.app/' },
        image: ligmaImg,
    },
    {
        title: 'RainOS App',
        description: 'Production admin dashboard for plugin management and subscription workflows.',
        tags: ['React', 'Private Repo'],
        links: { github: '#', demo: 'https://app.getrainos.com/' },
        image: rainosAppImg,
    },
    {
        title: 'Eeko-AI',
        description: 'Agricultural webapp combining NASA data with YOLOv5 for crop disease detection.',
        tags: ['Next.js', 'Python', 'YOLO v5', 'Agentic AI'],
        links: { github: 'https://github.com/saim-x/eeko-ai-webapp', demo: 'https://eeko-ai.vercel.app/' },
        image: eekoAiImg,
    },
    {
        title: 'ResearchCore',
        description: 'Document QA platform with RAG-grounded answers for research workflows.',
        tags: ['Next.js', 'Firebase', 'RAG'],
        links: { github: 'https://github.com/abdulrehmann231/Summarize-AI', demo: 'https://summarize-ai-three-blue.vercel.app/' },
        image: researchCoreImg,
    },
];

const ProjectCard = ({ project, index, isFeatured }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group project-card ${isFeatured ? 'md:col-span-2 md:row-span-1' : ''}`}
        >
            {/* Image Container */}
            <div className={`project-card-image relative ${isFeatured ? 'aspect-[2/1]' : 'aspect-video'}`}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-neutral-900/70 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-2">
                        {project.links.github !== '#' && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl text-neutral-900 font-medium text-sm hover:bg-neutral-100 transition-colors"
                            >
                                <PiGithubLogoBold size={16} />
                                Code
                            </a>
                        )}
                        {project.links.demo !== '#' && (
                            <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl text-neutral-900 font-medium text-sm hover:bg-neutral-100 transition-colors"
                            >
                                <PiArrowSquareOutBold size={16} />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* AI Badge */}
                {project.tags.includes('Agentic AI') && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 rounded-full text-white text-xs font-semibold">
                        <PiCpuBold size={12} />
                        AI Powered
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                    <h3 className={`font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors ${isFeatured ? 'text-xl' : 'text-lg'}`}>
                        {project.title}
                    </h3>
                    <motion.div
                        animate={{ rotate: isHovered ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <PiArrowUpRightBold size={20} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                    </motion.div>
                </div>

                <p className={`text-neutral-600 leading-relaxed mb-4 ${isFeatured ? 'text-base' : 'text-sm line-clamp-2'}`}>
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, isFeatured ? 5 : 3).map((tag, i) => (
                        <span
                            key={i}
                            className={`tag ${tag === 'Agentic AI' ? 'tag-accent' : ''}`}
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > (isFeatured ? 5 : 3) && (
                        <span className="tag">+{project.tags.length - (isFeatured ? 5 : 3)}</span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-24 relative">
            <div className="absolute inset-0 dot-pattern opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="section-kicker mx-auto mb-4">
                        Selected Work
                    </div>
                    <h2 className="section-title text-3xl md:text-5xl font-bold mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                        A selection of projects I've built — from AI platforms to production SaaS applications.
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                            isFeatured={true}
                        />
                    ))}

                    {otherProjects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index + featuredProjects.length}
                            isFeatured={false}
                        />
                    ))}
                </div>

                {/* View More Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/abdulrehmann231/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 font-medium transition-colors group"
                    >
                        View all projects on GitHub
                        <PiArrowUpRightBold size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
