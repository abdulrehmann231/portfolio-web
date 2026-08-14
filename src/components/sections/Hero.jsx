import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import profileImg from '../../assets/profile.png';

const stats = [
    { value: '3+', label: 'Years building' },
    { value: '10+', label: 'Products shipped' },
    { value: '4', label: 'Teams worked with' },
];

const stack = ['LLMs & RAG', 'AI Agents', 'MCP', 'Vector Search', 'Python / FastAPI', 'Next.js'];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20">
            <div className="container-page w-full">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left: copy */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="lg:col-span-7"
                    >
                        <motion.div variants={item} className="badge-live mb-7">
                            <span className="dot" />
                            Available for new opportunities
                        </motion.div>

                        <motion.h1
                            variants={item}
                            className="section-title text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-7xl font-bold"
                        >
                            Abdul Rehman
                            <span className="block text-muted font-medium mt-2 text-3xl sm:text-4xl lg:text-5xl">
                                I build <span className="accent-ink">full-stack</span> &amp;{' '}
                                <span className="accent-ink">AI-driven</span> products.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={item}
                            className="mt-7 text-lg text-muted max-w-xl leading-relaxed"
                        >
                            Software engineer &amp; CS student at FAST NUCES. I ship production-ready web
                            apps and AI integrations, from RAG systems and agentic tools to SaaS platforms
                            used by real customers.
                        </motion.p>

                        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
                            <a href="#projects" className="btn btn-primary group">
                                View my work
                                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#contact" className="btn btn-ghost">
                                Get in touch
                                <Mail size={17} />
                            </a>
                            <div className="flex items-center gap-2 sm:ml-1">
                                <a href="https://github.com/abdulrehmann231/" target="_blank" rel="noreferrer" className="icon-btn">
                                    <Github size={17} />
                                </a>
                                <a href="https://www.linkedin.com/in/abdulrehman-nasir-tobaria" target="_blank" rel="noreferrer" className="icon-btn">
                                    <Linkedin size={17} />
                                </a>
                            </div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div variants={item} className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
                            {stats.map((s) => (
                                <div key={s.label} className="border-l border-line2 pl-4">
                                    <div className="font-display text-3xl font-bold text-ink">{s.value}</div>
                                    <div className="font-mono text-xs text-faint mt-1 uppercase tracking-wider">{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: portrait card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative mx-auto max-w-sm">
                            {/* Glow behind */}
                            <div
                                className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-60"
                                style={{ background: 'radial-gradient(circle at 30% 20%, var(--color-accentsoft), transparent 70%)' }}
                            />
                            <div className="card border border-line2 p-3 relative overflow-hidden">
                                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-surface2">
                                    <img
                                        src={profileImg}
                                        alt="Abdul Rehman"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Terminal-style caption */}
                                <div className="mt-3 px-2 pb-1 flex items-center justify-between font-mono text-xs">
                                    <span className="text-faint">~/abdulrehman</span>
                                    <span className="accent-ink">$ whoami</span>
                                </div>
                            </div>

                            {/* Current role - aligned below the portrait */}
                            <div className="relative mt-4 card border border-line2 px-4 py-3 flex items-center justify-between gap-3">
                                <div className="min-w-0">
                                    <div className="font-mono text-xs text-faint uppercase tracking-widest">Current role</div>
                                    <div className="font-display font-semibold text-ink text-sm truncate">Software Engineer @ Gitwit</div>
                                </div>
                                <span className="dot-live shrink-0" aria-hidden="true" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Tech marquee row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 lg:mt-20 pt-8 border-t border-line flex flex-wrap items-center gap-x-6 gap-y-3"
                >
                    <span className="font-mono text-xs text-faint uppercase tracking-widest">Specializing in</span>
                    {stack.map((tech) => (
                        <span key={tech} className="font-mono text-sm text-muted">{tech}</span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
