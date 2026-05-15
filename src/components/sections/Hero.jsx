import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, Code2, Cpu, Rocket } from 'lucide-react';

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
            {/* Background */}
            <div className="absolute inset-0 grid-pattern opacity-50" />

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
                        className="lg:col-span-8 bento-card p-8 md:p-10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="section-kicker">
                                Software Engineer @ Gitwit
                            </div>
                            <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                Open to work
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 mb-5 leading-[1.1] tracking-tight">
                            I build software that
                            <span className="block text-neutral-500">solves real problems.</span>
                        </h1>

                        <p className="text-lg text-neutral-600 mb-8 max-w-xl leading-relaxed">
                            Full-stack engineer specializing in AI-driven products and scalable web applications.
                            I ship clean, production-ready code that delivers results.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a href="#projects" className="button-primary group">
                                <span>View Projects</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#contact" className="button-secondary">
                                <Mail size={18} />
                                <span>Contact Me</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Stats Card - Spans 4 columns */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-4 bento-card-dark p-6 flex flex-col justify-between"
                    >
                        <div>
                            <p className="text-neutral-400 text-sm font-medium mb-4 uppercase tracking-wider">Overview</p>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                    <span className="text-neutral-400 text-sm">Experience</span>
                                    <span className="text-white font-semibold">3+ Years</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                    <span className="text-neutral-400 text-sm">Projects Delivered</span>
                                    <span className="text-white font-semibold">10+</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                    <span className="text-neutral-400 text-sm">AI Integrations</span>
                                    <span className="text-white font-semibold">5+</span>
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

                    {/* Tech Focus Cards */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-4 bento-card p-5 group cursor-default"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center mb-4 group-hover:bg-neutral-200 transition-colors">
                            <Code2 className="text-neutral-700" size={24} />
                        </div>
                        <h3 className="font-bold text-neutral-900 mb-1.5">Full-Stack Development</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed">
                            React, Next.js, Node.js, Python, Spring Boot — end-to-end solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-4 bento-card p-5 group cursor-default"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center mb-4 group-hover:bg-neutral-200 transition-colors">
                            <Cpu className="text-neutral-700" size={24} />
                        </div>
                        <h3 className="font-bold text-neutral-900 mb-1.5">AI & Machine Learning</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed">
                            RAG systems, LLM integrations, computer vision, intelligent automation.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-4 bento-card-accent p-5 group cursor-default"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/15 transition-colors">
                            <Rocket className="text-white" size={24} />
                        </div>
                        <h3 className="font-bold text-white mb-1.5">Production Ready</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Shipping real products with real users. Focused on quality and reliability.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
