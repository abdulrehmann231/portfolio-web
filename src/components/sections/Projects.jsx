import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
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
        blurb: 'Open-source AI-native cloud IDE with live previews, AI code generation and sandboxed execution.',
        tags: ['React', 'AI', 'DevTools', 'Agentic'],
        links: { github: 'https://github.com/jamesmurdza/gitwit/', demo: 'https://gitwit.dev/' },
        image: gitwitImg,
        featured: true,
    },
    {
        title: 'EarthLink AI',
        blurb: 'Turns plain-English questions into rich map insights on vegetation and heat zones using Gemini, Mapbox and Sentinel-2 data.',
        tags: ['Next.js', 'Python', 'Tambo AI', 'Mapbox'],
        links: { github: 'https://github.com/abdulrehmann231/EarthLink-AI/', demo: 'https://earth-link-ai.vercel.app/' },
        image: earthlinkAiImg,
        featured: true,
    },
    {
        title: 'Draftly',
        blurb: 'Realtime collaborative whiteboard with sub-50ms Yjs sync, AI intent classification and PDF export.',
        tags: ['Next.js', 'Fastify', 'Yjs', 'Groq AI'],
        links: { github: 'https://github.com/mustafahk27/LIGMA', demo: 'https://hopeful-curiosity-production-1c1a.up.railway.app/' },
        image: ligmaImg,
    },
    {
        title: 'RainOS App',
        blurb: 'Production admin dashboard where teams manage plugins, API keys and subscriptions. Live with paying customers.',
        tags: ['React', 'SaaS', 'Private'],
        links: { github: '#', demo: 'https://app.getrainos.com/' },
        image: rainosAppImg,
    },
    {
        title: 'Eeko-AI',
        blurb: 'Agri webapp pairing NASA satellite data with YOLOv5 detection and LLaMA analysis for crop disease ID.',
        tags: ['Next.js', 'FastAPI', 'YOLO v5'],
        links: { github: 'https://github.com/saim-x/eeko-ai-webapp', demo: 'https://eeko-ai.vercel.app/' },
        image: eekoAiImg,
    },
    {
        title: 'Matt Brown Fine Art',
        blurb: 'Official gallery & shop presenting collections, prints and purchase options. Live client site.',
        tags: ['E-commerce', 'Private'],
        links: { github: '#', demo: 'http://mbrownfa.com/' },
        image: mattBrownImg,
    },
    {
        title: 'ResearchCore',
        blurb: 'Document QA & summarization — upload papers or URLs and get RAG-grounded answers with summaries.',
        tags: ['Next.js', 'Firebase', 'RAG'],
        links: { github: 'https://github.com/abdulrehmann231/Summarize-AI', demo: 'https://summarize-ai-three-blue.vercel.app/' },
        image: researchCoreImg,
    },
];

const ProjectCard = ({ project, index }) => {
    const primary = project.links.demo !== '#' ? project.links.demo : project.links.github;
    return (
        <motion.a
            href={primary}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            viewport={{ once: true, margin: '-40px' }}
            className="card card-hover group flex flex-col overflow-hidden"
        >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden bg-surface2 rounded-t-[1.25rem]">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3 font-mono text-xs px-2 py-1 rounded-md bg-black/45 text-white/90 backdrop-blur-sm">
                    {String(index + 1).padStart(2, '0')}
                </div>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-ink group-hover:text-accentink transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0 text-faint">
                        {project.links.github !== '#' && (
                            <span
                                onClick={(e) => { e.preventDefault(); window.open(project.links.github, '_blank', 'noopener'); }}
                                className="hover:text-ink transition-colors cursor-pointer"
                                aria-label="GitHub"
                            >
                                <Github size={17} />
                            </span>
                        )}
                        <ArrowUpRight size={17} className="group-hover:text-accentink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                </div>

                <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{project.blurb}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span key={tag} className="chip">{tag}</span>
                    ))}
                </div>
            </div>
        </motion.a>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-32 relative">
            <div className="container-page">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <SectionHeading
                        kicker="02 / Work"
                        title="Selected projects."
                        description="A mix of open source, client work, and AI experiments — most are live."
                    />
                    <a
                        href="https://github.com/abdulrehmann231/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost self-start md:self-auto whitespace-nowrap"
                    >
                        <Github size={16} />
                        All on GitHub
                    </a>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
