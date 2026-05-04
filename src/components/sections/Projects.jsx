import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import researchCoreImg from '../../assets/research-core.png';
import mattBrownImg from '../../assets/matt-brown.png';
import eekoAiImg from '../../assets/eeko-ai.png';
import rainosAppImg from '../../assets/rainos-app.png';
import rainosFrontendImg from '../../assets/rainos-frontend.png';
import hearmeAiImg from '../../assets/hearme-ai.png';
import makerspaceImg from '../../assets/makerspace.png';
import gitwitImg from '../../assets/gitwit.png';
import microservicesImg from '../../assets/microservices.png';
import earthlinkAiImg from '../../assets/earthlink-ai.png';
import ligmaImg from '../../assets/ligma.png';

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
            'Satellite-grade environmental intelligence — ask in plain language and get map-based insights (NDVI, heat, region comparisons). Built with Tambo AI, Google Gemini, Mapbox and a FastAPI backend using Sentinel-2 data.',
        tags: ['Next.js', 'Python', 'Tambo AI', 'Mapbox'],
        links: { github: 'https://github.com/abdulrehmann231/EarthLink-AI/', demo: 'https://earth-link-ai.vercel.app/' },
        image: earthlinkAiImg,
    },
    {
        title: 'LIGMA',
        description:
            'Real-time collaborative meeting whiteboard with sub-50ms Yjs sync, AI intent classification, and PDF export. Frontend (Next.js) + Fastify backend, Postgres and Groq/LLM-driven summaries.',
        tags: ['Next.js', 'Fastify', 'Yjs', 'WebSockets', 'Groq AI'],
        links: { github: 'https://github.com/mustafahk27/LIGMA', demo: 'https://hopeful-curiosity-production-1c1a.up.railway.app/' },
        image: ligmaImg,
    },
    {
        title: 'Eeko-AI',
        description:
            'AI-powered agricultural webapp using NASA data and object-detection models (YOLOv5); includes disease and insect detection and LLaMA-based analysis — Next.js frontend with ML backends.',
        tags: ['Next.js', 'Python', 'FastAPI', 'YOLO v5'],
        links: { github: 'https://github.com/saim-x/eeko-ai-webapp', demo: 'https://eeko-ai.vercel.app/' },
        image: eekoAiImg,
    },
    {
        title: 'RainOS App',
        description:
            'Dashboard for managing RainOS plugins, API keys and subscription workflows — the production admin interface for the RainOS platform.',
        tags: ['React', 'Private Repo'],
        links: { github: '#', demo: 'https://app.getrainos.com/' },
        image: rainosAppImg,
    },
    {
        title: 'RainOS Front-End',
        description: 'Public marketing and product site for RainOS — the front-facing experience that showcases features, pricing and docs.',
        tags: ['React', 'Open Source'],
        links: { github: 'https://github.com/getRainOS/Rain-OS-Front-End', demo: 'https://www.getrainos.com/' },
        image: rainosFrontendImg,
    },
    {
        title: 'ResearchCore',
        description:
            'Document QA and summarization platform — upload papers or URLs and get RAG-grounded answers and concise summaries for research workflows.',
        tags: ['Next.js', 'Firebase', 'Web Scraping', 'RAG'],
        links: { github: 'https://github.com/abdulrehmann231/Summarize-AI', demo: 'https://summarize-ai-three-blue.vercel.app/' },
        image: researchCoreImg,
    },
    {
        title: 'HearMe-AI',
        description:
            'Meeting summarization prototype — record or upload audio, transcribe with Deepgram/HuggingFace and generate concise summaries and email exports.',
        tags: ['Electron', 'Next.js', 'Groq API', 'Firebase'],
        links: { github: 'https://github.com/BurhanCantCode/HearMe-AI', demo: 'https://hear-me-ai-jvxh.vercel.app/' },
        image: hearmeAiImg,
    },
    {
        title: 'MakerSpaceApp',
        description:
            'Booking and management app for MakerSpace Delft — schedule equipment, manage projects and users. Built with Node.js, Express and MongoDB.',
        tags: ['React', 'Node.js', 'Express', 'MongoDB'],
        links: { github: 'https://github.com/abdulrehmann231/MakerSpaceApp', demo: 'https://app.makerspacedelft.nl/' },
        image: makerspaceImg,
    },
    {
        title: 'Matt Brown Fine Art',
        description:
            'Official gallery site and shop for Matt Brown Fine Art — showcases collections, prints and purchase options with a clean, visual layout.',
        tags: ['Private Repo', 'E-commerce'],
        links: { github: '#', demo: 'http://mbrownfa.com/' },
        image: mattBrownImg,
    },
    {
        title: 'MicroServices System',
        description:
            'A set of Java microservices with Eureka service registry and MySQL storage, demonstrating service discovery and inter-service communication patterns.',
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
