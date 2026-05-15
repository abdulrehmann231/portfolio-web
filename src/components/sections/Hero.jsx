import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, Sparkles, Code2, Zap, Globe } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div className="glow top-20 -left-20 opacity-60" />
            <div className="glow glow-purple bottom-20 -right-20 opacity-40" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5"
                >
                    {/* Main Hero Card - Spans 8 columns */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-8 bento-card p-8 md:p-10 relative"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="section-kicker">
                                <Sparkles size={14} />
                                Software Engineer @ Gitwit
                            </div>
                            <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                Available for work
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-5 leading-[1.1] tracking-tight">
                            Building software that
                            <span className="block gradient-text-color">feels like magic.</span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                            Full-stack engineer crafting AI-driven products with precision.
                            I turn complex problems into elegant, production-ready solutions.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a href="#projects" className="button-primary group">
                                <span>View Projects</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#contact" className="button-secondary">
                                <Mail size={18} />
                                <span>Get in Touch</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Stats Card - Spans 4 columns */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-4 bento-card-dark p-6 flex flex-col justify-between"
                    >
                        <div>
                            <p className="text-slate-400 text-sm font-medium mb-4 uppercase tracking-wider">Quick Stats</p>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                    <span className="text-slate-300 text-sm">Experience</span>
                                    <span className="text-white font-bold text-lg">3+ Years</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                    <span className="text-slate-300 text-sm">Projects Shipped</span>
                                    <span className="text-white font-bold text-lg">10+</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                    <span className="text-slate-300 text-sm">AI Integrations</span>
                                    <span className="text-white font-bold text-lg">5+</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <a
                                href="https://github.com/abdulrehmann231/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                            >
                                <Github size={18} />
                                <span className="text-sm font-medium">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/abdulrehman-nasir-a86a87273"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                            >
                                <Linkedin size={18} />
                                <span className="text-sm font-medium">LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Tech Focus Cards - 3 cards spanning full width */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-4 bento-card p-5 group cursor-default"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Code2 className="text-indigo-600" size={24} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-1.5">Full-Stack Development</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            React, Next.js, Node.js, Python, Spring Boot — end-to-end product development.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-4 bento-card p-5 group cursor-default"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Sparkles className="text-violet-600" size={24} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-1.5">AI & Machine Learning</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            RAG systems, LLM integrations, YOLO, Agentic AI — intelligent solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-4 bento-card-accent p-5 group cursor-default"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Zap className="text-white" size={24} />
                        </div>
                        <h3 className="font-bold text-white mb-1.5">Production Ready</h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Shipping real products used by real customers. Quality over quantity.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
