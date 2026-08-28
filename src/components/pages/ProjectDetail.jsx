import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ArrowUpRight, Target, Sparkles, Lock, Layers, Calendar, Briefcase } from 'lucide-react';
import BrowserFrame from '../ui/BrowserFrame';
import { getProject, projects } from '../../data/projects';

const prettyUrl = (url) => {
    if (!url || url === '#') return '';
    try {
        const u = new URL(url);
        return u.host.replace(/^www\./, '') + (u.pathname !== '/' ? u.pathname.replace(/\/$/, '') : '');
    } catch {
        return url;
    }
};

const NotFound = () => (
    <section className="min-h-screen grid place-items-center container-page py-32 text-center">
        <div>
            <div className="kicker justify-center mb-4">404 / Not found</div>
            <h1 className="section-title text-4xl md:text-5xl">This project doesn’t exist.</h1>
            <a href="#projects" className="btn btn-primary mt-8 inline-flex">
                <ArrowLeft size={16} /> Back to projects
            </a>
        </div>
    </section>
);

const MetaItem = ({ icon: Icon, label, value }) => (
    <div className="card p-4">
        <div className="flex items-center gap-2 text-faint mb-1.5">
            <Icon size={14} />
            <span className="font-mono text-[11px] uppercase tracking-widest">{label}</span>
        </div>
        <div className="text-ink font-medium text-sm">{value}</div>
    </div>
);

const ProjectDetail = ({ slug }) => {
    const project = getProject(slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) return <NotFound />;

    const hasGithub = project.links.github && project.links.github !== '#';
    const hasDemo = project.links.demo && project.links.demo !== '#';
    const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

    return (
        <section className="pt-28 md:pt-32 pb-24 relative">
            <div className="container-page max-w-5xl">
                <a
                    href="#projects"
                    className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-ink transition-colors"
                >
                    <ArrowLeft size={16} /> All projects
                </a>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="kicker">{project.tagline}</span>
                        {project.isPrivate && (
                            <span className="inline-flex items-center gap-1 chip"><Lock size={11} /> Private</span>
                        )}
                    </div>
                    <h1 className="section-title text-4xl md:text-6xl">{project.title}</h1>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        {hasDemo && (
                            <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn btn-primary group">
                                Visit live demo
                                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        )}
                        {hasGithub && (
                            <a href={project.links.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                                <Github size={16} /> View code
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* Hero screenshot */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-10"
                >
                    <BrowserFrame
                        src={project.gallery?.[0] || project.image}
                        alt={`${project.title} screenshot`}
                        url={prettyUrl(project.links.demo)}
                        priority
                    />
                </motion.div>

                {/* Meta strip */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <MetaItem icon={Calendar} label="Year" value={project.year} />
                    <MetaItem icon={Briefcase} label="Role" value={project.role} />
                    <MetaItem icon={Layers} label="Stack" value={`${project.stack.length} technologies`} />
                </div>

                {/* Goal & impact */}
                <div className="mt-10 grid md:grid-cols-2 gap-5">
                    <div className="card p-6 md:p-7">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="grid place-items-center w-8 h-8 rounded-lg bg-accentsoft text-accentink">
                                <Target size={15} />
                            </span>
                            <span className="font-mono text-xs uppercase tracking-widest text-faint">The goal</span>
                        </div>
                        <p className="text-muted leading-relaxed">{project.goal}</p>
                    </div>
                    <div className="card p-6 md:p-7">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="grid place-items-center w-8 h-8 rounded-lg bg-accentsoft text-accentink">
                                <Sparkles size={15} />
                            </span>
                            <span className="font-mono text-xs uppercase tracking-widest text-faint">The impact</span>
                        </div>
                        <p className="text-muted leading-relaxed">{project.impact}</p>
                    </div>
                </div>

                {/* Tech stack */}
                <div className="mt-10">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="font-mono text-xs uppercase tracking-widest text-faint">Built with</span>
                        <div className="flex-1 h-px bg-line" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <span key={tech} className="chip chip-accent">{tech}</span>
                        ))}
                    </div>
                </div>

                {/* Gallery (extra shots) */}
                {project.gallery && project.gallery.length > 1 && (
                    <div className="mt-12">
                        <div className="flex items-center gap-2 mb-5">
                            <span className="font-mono text-xs uppercase tracking-widest text-faint">Screens</span>
                            <div className="flex-1 h-px bg-line" />
                        </div>
                        <div className="grid gap-5">
                            {project.gallery.slice(1).map((img, i) => (
                                <BrowserFrame key={i} src={img} alt={`${project.title} screen ${i + 2}`} url={prettyUrl(project.links.demo)} />
                            ))}
                        </div>
                    </div>
                )}

                {/* More projects */}
                <div className="mt-16 pt-10 border-t border-line">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-display text-xl font-semibold text-ink">More projects</h2>
                        <a href="#projects" className="font-mono text-sm text-muted hover:text-ink transition-colors">View all</a>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {others.map((p) => (
                            <a key={p.slug} href={`#/project/${p.slug}`} className="card card-hover group overflow-hidden">
                                <div className="aspect-video overflow-hidden bg-surface2">
                                    <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-display font-semibold text-ink group-hover:text-accentink transition-colors">{p.title}</h3>
                                    <p className="mt-1 text-xs text-muted line-clamp-2">{p.tagline}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;
