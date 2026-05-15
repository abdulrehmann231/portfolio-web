import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import researchCoreImg from '../../assets/research-core.png';
import eekoAiImg from '../../assets/eeko-ai.png';
import rainosAppImg from '../../assets/rainos-app.png';
import gitwitImg from '../../assets/gitwit.png';
import earthlinkAiImg from '../../assets/earthlink-ai.png';
import ligmaImg from '../../assets/ligma.png';

// Projects ordered by importance - Top 6 featured projects
// Duplicates removed, prioritized by impact and technical complexity
const projects = [
    {
        title: 'Gitwit',
        description:
            'An open-source AI-native cloud IDE and code platform with live previews, AI code generation, and sandboxed execution. Monorepo with Next.js frontend and realtime backend components.',
        tags: ['React', 'AI', 'DevTools'],
        links: { github: 'https://github.com/jamesmurdza/gitwit/', demo: 'https://gitwit.dev/' },
        image: gitwitImg,
    },
    {
        title: 'EarthLink AI',
        description:
            'Environmental intelligence platform that turns plain English questions into rich map insights covering vegetation, heat zones and regional comparisons. Built with Tambo AI, Google Gemini, Mapbox and a FastAPI backend running on Sentinel 2 satellite data.',
        tags: ['Next.js', 'Python', 'Tambo AI', 'Mapbox'],
        links: { github: 'https://github.com/abdulrehmann231/EarthLink-AI/', demo: 'https://earth-link-ai.vercel.app/' },
        image: earthlinkAiImg,
    },
    {
        title: 'LIGMA',
        description:
            'Realtime collaborative meeting whiteboard with sub 50ms Yjs sync that turns brainstormed ideas into assignable tasks for team members along with AI intent classification and PDF export. Built on a Next.js frontend with a Fastify backend, Postgres and Groq powered summaries.',
        tags: ['Next.js', 'Fastify', 'Yjs', 'WebSockets', 'Groq AI'],
        links: { github: 'https://github.com/mustafahk27/LIGMA', demo: 'https://hopeful-curiosity-production-1c1a.up.railway.app/' },
        image: ligmaImg,
    },
    {
        title: 'RainOS App',
        description:
            'Production admin dashboard for the RainOS platform where teams manage plugins, API keys and subscription workflows. Live and in active use by paying customers.',
        tags: ['React', 'Private Repo'],
        links: { github: '#', demo: 'https://app.getrainos.com/' },
        image: rainosAppImg,
    },
    {
        title: 'Eeko-AI',
        description:
            'Agricultural webapp combining NASA satellite data with YOLOv5 detection for crop disease and insect identification along with LLaMA driven analysis. Next.js frontend wired to Python ML services.',
        tags: ['Next.js', 'Python', 'FastAPI', 'YOLO v5'],
        links: { github: 'https://github.com/saim-x/eeko-ai-webapp', demo: 'https://eeko-ai.vercel.app/' },
        image: eekoAiImg,
    },
    {
        title: 'ResearchCore',
        description:
            'Document QA and summarization platform where users upload papers or URLs and receive RAG grounded answers with concise summaries built for research workflows.',
        tags: ['Next.js', 'Firebase', 'Web Scraping', 'RAG'],
        links: { github: 'https://github.com/abdulrehmann231/Summarize-AI', demo: 'https://summarize-ai-three-blue.vercel.app/' },
        image: researchCoreImg,
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
                        <div className="section-kicker mx-auto mb-4">Selected Work</div>
                        <h2 className="section-title text-3xl md:text-5xl font-extrabold mb-4">Featured Projects</h2>
                        <div className="section-rule mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
                            >
                                {/* Screenshot */}
                                {project.image && (
                                    <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Overlay with links on hover */}
                                        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                            {project.links.github !== '#' && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-3 bg-white rounded-full text-slate-900 hover:bg-slate-100 transition-colors"
                                                >
                                                    <Github size={20} />
                                                </a>
                                            )}
                                            {project.links.demo !== '#' && (
                                                <a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-3 bg-white rounded-full text-slate-900 hover:bg-slate-100 transition-colors"
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Content below screenshot */}
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-2">
                                            {project.links.github !== '#' && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-400 hover:text-slate-900 transition-colors"
                                                >
                                                    <Github size={18} />
                                                </a>
                                            )}
                                            {project.links.demo !== '#' && (
                                                <a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-400 hover:text-slate-900 transition-colors"
                                                >
                                                    <ExternalLink size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium px-2.5 py-1 bg-slate-50 text-slate-600 rounded-full border border-slate-200"
                                            >
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
