import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Layers } from 'lucide-react';

const projects = [
    {
        title: "Gitwit",
        description: "AI-powered developer tool connecting natural language to code. Accelerating software development workflows.",
        tags: ["React", "AI", "DevTools"],
        links: { github: "https://github.com/jamesmurdza/gitwit/", demo: "https://gitwit.dev/" }
    },
    {
        title: "RainOS App",
        description: "The core application for RainOS. A private repository focused on the main platform functionality.",
        tags: ["React", "Private Repo"],
        links: { github: "#", demo: "https://app.getrainos.com/" }
    },
    {
        title: "RainOS Front-End",
        description: "The public-facing frontend for RainOS. Showcase website and user interface.",
        tags: ["React", "Open Source"],
        links: { github: "https://github.com/getRainOS/Rain-OS-Front-End", demo: "https://www.getrainos.com/" }
    },
    {
        title: "Matt Brown Fine Art",
        description: "Official website for Matt Brown Fine Art. Features an online gallery shop for woodblock prints and local craftsmanship.",
        tags: ["Private Repo", "E-commerce"],
        links: { github: "#", demo: "http://mbrownfa.com/" }
    },
    {
        title: "MakerSpaceApp",
        description: "Official web app for MakerSpace Delft. Facilitates equipment booking, project management, and community collaboration.",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        links: { github: "https://github.com/abdulrehmann231/MakerSpaceApp", demo: "https://app.makerspacedelft.nl/" }
    },
    {
        title: "Eeko-AI",
        description: "AI-based agricultural website using NASA data. Features LLaMA 3.2 for disease detection and YOLO v5 for weed detection.",
        tags: ["Next.js", "Python", "FastAPI", "YOLO v5"],
        links: { github: "https://github.com/saim-x/eeko-ai-webapp", demo: "https://eeko-ai.vercel.app/" }
    },

    {
        title: "Summarize-AI",
        description: "RAG-based web app that summarizes PDFs and websites. Includes chatbot functionality. Backend Repo available on GitHub.",
        tags: ["Next.js", "Firebase", "Web Scraping", "RAG"],
        links: { github: "https://github.com/abdulrehmann231/Summarize-AI", demo: "https://summarize-ai-three-blue.vercel.app/" }
    },
    {
        title: "HearMe-AI",
        description: "Desktop application for recording and transcribing audio. Provides summaries of meetings and long conversations.",
        tags: ["Electron", "Next.js", "Groq API", "Firebase"],
        links: { github: "https://github.com/BurhanCantCode/HearMe-AI", demo: "https://hear-me-ai-jvxh.vercel.app/" }
    },
    {
        title: "MicroServices System",
        description: "Multiple microservices interconnected via Eureka Service Registry with MySQL data storage.",
        tags: ["Spring Boot", "Java", "MySQL", "Eureka", "Private Repo"],
        links: { github: "#", demo: "#" }
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2"
                            >
                                <div className="p-8 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:text-blue-300 transition-colors">
                                            <Layers size={24} />
                                        </div>
                                        <div className="flex gap-3">
                                            <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                            <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs font-medium px-2 py-1 bg-white/5 text-gray-300 rounded hover:bg-white/10 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
