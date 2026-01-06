import { motion } from 'framer-motion';
import profileImg from '../../assets/profile.png';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
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
                            className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium mb-6"
                        >
                            Software Engineer
                        </motion.div>
                        
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Building the <br />
                            <span className="text-gradient">Future with AI</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed border-l-2 border-white/10 pl-6">
                            I craft seamless AI-driven integrations and scalable full-stack applications. 
                            Passionate about connecting natural language with real-world coding tasks.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a 
                                href="#projects"
                                className="group px-8 py-4 bg-white text-primary hover:bg-gray-100 rounded-full font-bold transition-all duration-300 flex items-center gap-2"
                            >
                                View Work
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a 
                                href="#contact"
                                className="px-8 py-4 glass text-white hover:bg-white/5 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
                            >
                                Contact Me
                                <Mail size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center md:justify-end"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Rotating Ring */}
                            <div className="absolute inset-0 border-2 border-dashed border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                            
                            {/* Glowing Backdrops */}
                            <div className="absolute inset-4 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full opacity-20 blur-2xl animate-pulse" />
                            
                            {/* Image Container */}
                            <div className="absolute inset-2 glass rounded-full overflow-hidden border-2 border-white/10 z-10 p-2">
                                <div className="w-full h-full rounded-full overflow-hidden bg-secondary">
                                    <img 
                                        src={profileImg} 
                                        alt="Abdul Rehman" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Floating Tech Badges (Decorative) */}
                            <motion.div 
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl text-sm font-bold text-cyan-400 z-20"
                            >
                                React
                            </motion.div>
                            <motion.div 
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 -left-8 glass px-4 py-2 rounded-xl text-sm font-bold text-blue-400 z-20"
                            >
                                AI Integration
                            </motion.div>
                            <motion.div 
                                animate={{ y: [-15, 5, -15], x: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute top-1/2 -right-12 glass px-4 py-2 rounded-xl text-sm font-bold text-purple-400 z-20"
                            >
                                RAG
                            </motion.div>
                            <motion.div 
                                animate={{ y: [5, -15, 5], x: [0, -5, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                className="absolute -top-8 left-0 glass px-4 py-2 rounded-xl text-sm font-bold text-blue-300 z-20"
                            >
                                TypeScript
                            </motion.div>
                            <motion.div 
                                animate={{ y: [-5, 10, -5] }}
                                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                className="absolute -bottom-6 right-8 glass px-4 py-2 rounded-xl text-sm font-bold text-white z-20"
                            >
                                Next.js
                            </motion.div>
                            <motion.div 
                                animate={{ y: [10, -5, 10], x: [-5, 5, -5] }}
                                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                                className="absolute top-20 -left-12 glass px-4 py-2 rounded-xl text-sm font-bold text-green-400 z-20"
                            >
                                Node.js
                            </motion.div>
                            <motion.div 
                                animate={{ y: [-8, 8, -8], x: [5, -5, 5] }}
                                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                                className="absolute -bottom-4 left-12 glass px-4 py-2 rounded-xl text-sm font-bold text-blue-500 z-20"
                            >
                                PostgreSQL
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
