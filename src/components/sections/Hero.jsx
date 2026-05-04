import { motion } from 'framer-motion';
import profileImg from '../../assets/profile.png';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid md:grid-cols-2 gap-14 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left max-w-2xl"
                    >
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="section-kicker mb-6"
                        >
                            Software Engineer
                        </motion.div>
                        
                        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-[0.95] tracking-tight">
                            Designing software that feels
                            <span className="block text-teal-700">clear, fast, and human.</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                            I craft full-stack products and AI-driven integrations with a calmer visual language, sharper interaction design, and production-ready detail.
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

                        <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
                            {[
                                ['3+', 'Years building'],
                                ['10+', 'Launches shipped'],
                                ['AI', 'Workflows integrated'],
                            ].map(([value, label]) => (
                                <div key={label} className="surface rounded-3xl px-4 py-4 text-left">
                                    <div className="text-2xl font-bold text-slate-900">{value}</div>
                                    <div className="text-sm text-slate-500 mt-1">{label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center md:justify-end"
                    >
                        <div className="relative w-80 h-[26rem] md:w-[28rem] md:h-[36rem]">
                            <div className="absolute inset-0 -translate-x-5 translate-y-5 rounded-[2rem] bg-teal-200/45 blur-2xl" />
                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/85 to-white/55 border border-white/70 shadow-[0_30px_80px_rgba(15,23,42,0.14)]" />
                            <div className="absolute inset-0 p-4">
                                <div className="h-full w-full overflow-hidden rounded-[1.7rem] bg-slate-100">
                                    <img 
                                        src={profileImg} 
                                        alt="Abdul Rehman" 
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-5 -left-5 surface rounded-3xl px-5 py-4 max-w-56">
                                <div className="text-xs uppercase tracking-[0.22em] text-teal-700 font-bold">Available for</div>
                                <div className="mt-1 text-sm text-slate-600">Freelance, part-time, full-time, and product collaborations.</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
