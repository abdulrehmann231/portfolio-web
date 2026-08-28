import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Target, Sparkles, Lock, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import BrowserFrame from '../ui/BrowserFrame';
import { projects } from '../../data/projects';

const prettyUrl = (url) => {
    if (!url || url === '#') return '';
    try {
        const u = new URL(url);
        return u.host.replace(/^www\./, '') + (u.pathname !== '/' ? u.pathname.replace(/\/$/, '') : '');
    } catch {
        return url;
    }
};

const ProjectRow = ({ project, index }) => {
    const flipped = index % 2 === 1;
    const href = `#/project/${project.slug}`;

    return (
        <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className="card card-hover group overflow-hidden"
        >
            <a href={href} className="grid lg:grid-cols-2 gap-0 items-stretch">
                {/* Media */}
                <div className={`relative p-5 sm:p-7 flex items-center bg-surface2/40 ${flipped ? 'lg:order-2' : ''}`}>
                    <span className="absolute top-5 left-5 z-10 font-mono text-xs px-2 py-1 rounded-md bg-black/55 text-white/90 backdrop-blur-sm">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <BrowserFrame
                        src={project.image}
                        alt={project.title}
                        url={prettyUrl(project.links.demo)}
                        className="w-full transition-transform duration-500 group-hover:-translate-y-1"
                        imgClassName="aspect-[16/10]"
                    />
                </div>

                {/* Content */}
                <div className={`p-6 sm:p-8 flex flex-col justify-center ${flipped ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="kicker !text-faint before:!bg-faint before:!shadow-none">{project.year}</span>
                        <span className="text-faint">·</span>
                        <span className="font-mono text-xs text-faint">{project.role}</span>
                        {project.isPrivate && (
                            <span className="inline-flex items-center gap-1 chip !py-0.5 ml-1">
                                <Lock size={11} /> Private
                            </span>
                        )}
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink group-hover:text-accentink transition-colors">
                        {project.title}
                    </h3>
                    <p className="mt-1.5 text-muted">{project.tagline}</p>

                    <div className="mt-5 space-y-3.5">
                        <div className="flex gap-3">
                            <span className="mt-0.5 shrink-0 grid place-items-center w-7 h-7 rounded-lg bg-accentsoft text-accentink">
                                <Target size={14} />
                            </span>
                            <div>
                                <div className="font-mono text-[11px] uppercase tracking-widest text-faint">Goal</div>
                                <p className="text-sm text-muted leading-relaxed">{project.goal}</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <span className="mt-0.5 shrink-0 grid place-items-center w-7 h-7 rounded-lg bg-accentsoft text-accentink">
                                <Sparkles size={14} />
                            </span>
                            <div>
                                <div className="font-mono text-[11px] uppercase tracking-widest text-faint">Impact</div>
                                <p className="text-sm text-muted leading-relaxed">{project.impact}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span key={tag} className="chip">{tag}</span>
                        ))}
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                        <span className="inline-flex items-center gap-1.5 font-mono text-sm text-ink group-hover:text-accentink transition-colors">
                            View project
                            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        {project.links.github !== '#' && (
                            <span
                                role="link"
                                tabIndex={0}
                                onClick={(e) => { e.preventDefault(); window.open(project.links.github, '_blank', 'noopener'); }}
                                className="inline-flex items-center gap-1.5 font-mono text-sm text-faint hover:text-ink transition-colors cursor-pointer"
                            >
                                <Github size={15} /> Code
                            </span>
                        )}
                        {project.links.demo !== '#' && (
                            <span
                                role="link"
                                tabIndex={0}
                                onClick={(e) => { e.preventDefault(); window.open(project.links.demo, '_blank', 'noopener'); }}
                                className="inline-flex items-center gap-1.5 font-mono text-sm text-faint hover:text-ink transition-colors cursor-pointer"
                            >
                                <ArrowUpRight size={15} /> Live
                            </span>
                        )}
                    </div>
                </div>
            </a>
        </motion.article>
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
                        description="Each one framed by its goal and the impact it shipped. Click through for details, screens and a live demo."
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

                <div className="mt-12 flex flex-col gap-6">
                    {projects.map((project, index) => (
                        <ProjectRow key={project.slug} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
