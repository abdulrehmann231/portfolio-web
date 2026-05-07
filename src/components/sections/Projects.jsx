import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import researchCoreImg from '../../assets/research-core.png';
import mattBrownImg from '../../assets/matt-brown.png';
import eekoAiImg from '../../assets/eeko-ai.png';
import rainosAppImg from '../../assets/rainos-app.png';
import hearmeAiImg from '../../assets/hearme-ai.png';
import makerspaceImg from '../../assets/makerspace.png';
import gitwitImg from '../../assets/gitwit.png';
import microservicesImg from '../../assets/microservices.png';
import earthlinkAiImg from '../../assets/earthlink-ai.png';
import ligmaImg from '../../assets/ligma.png';

const projects = [
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
        title: 'Gitwit',
        description:
            'Open source AI native cloud IDE with live previews, AI code generation and sandboxed execution. Monorepo built around a Next.js frontend and realtime backend services.',
        tags: ['React', 'AI', 'DevTools'],
        links: { github: 'https://github.com/jamesmurdza/gitwit/', demo: 'https://gitwit.dev/' },
        image: gitwitImg,
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
        title: 'Matt Brown Fine Art',
        description:
            'Official gallery and shop for Matt Brown Fine Art presenting collections, prints and purchase options through a clean visual layout. Live site serving the artist and his customers.',
        tags: ['Private Repo', 'E-commerce'],
        links: { github: '#', demo: 'http://mbrownfa.com/' },
        image: mattBrownImg,
    },
    {
        title: 'MakerSpaceApp',
        description:
            'Booking and management platform for MakerSpace Delft where members schedule equipment and run projects. Built on Node.js, Express and MongoDB and currently in production with an active member base.',
        tags: ['React', 'Node.js', 'Express', 'MongoDB'],
        links: { github: 'https://github.com/abdulrehmann231/MakerSpaceApp', demo: 'https://app.makerspacedelft.nl/' },
        image: makerspaceImg,
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
    {
        title: 'HearMe-AI',
        description:
            'Meeting summarization tool that records or accepts audio uploads, transcribes through Deepgram and HuggingFace and generates concise summaries with email exports.',
        tags: ['Electron', 'Next.js', 'Groq API', 'Firebase'],
        links: { github: 'https://github.com/BurhanCantCode/HearMe-AI', demo: 'https://hear-me-ai-jvxh.vercel.app/' },
        image: hearmeAiImg,
    },
    {
        title: 'MicroServices System',
        description:
            'Java microservices project showcasing service discovery and inter service communication using Spring Boot with a Eureka registry and MySQL storage.',
        tags: ['Spring Boot', 'Java', 'MySQL', 'Eureka', 'Private Repo'],
        links: { github: '#', demo: '#' },
        image: microservicesImg,
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

                    <div className="max-w-5xl mx-auto divide-y divide-slate-200 border-y border-slate-200">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="py-8 group"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                                    {project.image && (
                                        <div className="w-full lg:w-48 h-36 overflow-hidden rounded-md flex-shrink-0 mb-4 lg:mb-0">
                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                        </div>
                                    )}

                                    <div className="flex-1 max-w-3xl">
                                        <div className="flex items-center gap-3 mb-3">
                                            <h3 className="text-xl font-bold text-slate-950 group-hover:text-slate-600 transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="flex gap-3 lg:hidden">
                                                <a href={project.links.github} className="text-slate-400 hover:text-slate-900 transition-colors">
                                                    <Github size={18} />
                                                </a>
                                                <a href={project.links.demo} className="text-slate-400 hover:text-slate-900 transition-colors">
                                                    <ExternalLink size={18} />
                                                </a>
                                            </div>
                                        </div>

                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">{project.description}</p>
                                    </div>

                                    <div className="flex flex-col items-start gap-4 lg:items-end">
                                        <div className="hidden lg:flex gap-3">
                                            <a href={project.links.github} className="text-slate-400 hover:text-slate-900 transition-colors">
                                                <Github size={20} />
                                            </a>
                                            <a href={project.links.demo} className="text-slate-400 hover:text-slate-900 transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="text-xs font-medium px-2 py-1 bg-slate-50 text-slate-700 rounded-full border border-slate-200">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
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
