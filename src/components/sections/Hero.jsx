import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="section-kicker mb-6"
                        >
                            Software Engineer
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-950 dark:text-white mb-6 leading-[0.95] tracking-tight">
                            Designing software that feels
                            <span className="block text-slate-600 dark:text-slate-400">clear, fast, and human.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl leading-relaxed">
                            I build full-stack products and AI-driven integrations with a restrained visual language, consistent typography, and production-ready detail.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="button-primary group"
                            >
                                View Work
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="button-secondary"
                            >
                                Contact Me
                                <Mail size={20} />
                            </a>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-6 text-sm uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                            {[
                                '3+ years building',
                                '10+ launches shipped',
                                'AI workflows integrated',
                            ].map((item) => (
                                <div key={item} className="border-t border-slate-300 dark:border-slate-600 pt-3">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
