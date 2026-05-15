import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, Code2, Database, Cpu, Wrench } from 'lucide-react';

const skills = [
    {
        category: "Languages",
        icon: Code2,
        items: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"],
    },
    {
        category: "Frameworks",
        icon: Cpu,
        items: ["React", "Next.js", "Node.js", "Express", "Spring Boot", "FastAPI"],
    },
    {
        category: "AI & ML",
        icon: Wrench,
        items: ["RAG", "LLMs", "YOLO v5", "Groq API", "HuggingFace"],
    },
    {
        category: "Tools & DBs",
        icon: Database,
        items: ["PostgreSQL", "MongoDB", "Firebase", "Docker", "Git"],
    },
];

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="about" className="py-24 relative">
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="section-kicker mx-auto mb-4">
                        About Me
                    </div>
                    <h2 className="section-title text-3xl md:text-5xl font-extrabold mb-4">
                        Background
                    </h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                        Full-stack engineer focused on building reliable, scalable software.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-5"
                >
                    {/* Main Bio Card */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-7 bento-card p-8"
                    >
                        <div className="prose prose-neutral max-w-none">
                            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                                I'm <span className="text-neutral-900 font-semibold">Abdul Rehman</span>, a
                                full-stack engineer who builds products that ship. I focus on
                                clean architecture, practical solutions, and code that scales.
                            </p>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                Currently at <span className="font-semibold text-neutral-900">Gitwit</span> building
                                AI-powered developer tools. Previously delivered projects at startups and enterprises,
                                from real-time collaboration tools to satellite-data platforms.
                            </p>
                            <p className="text-neutral-600 leading-relaxed">
                                I enjoy working across the stack — from designing APIs and databases to building
                                responsive frontends. My focus is always on solving real problems with practical solutions.
                            </p>
                        </div>
                    </motion.div>

                    {/* Info Cards - Right Side */}
                    <div className="lg:col-span-5 space-y-5">
                        <motion.div
                            variants={itemVariants}
                            className="bento-card p-6"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center">
                                    <GraduationCap className="text-neutral-700" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-900">FAST NUCES</h3>
                                    <p className="text-neutral-500 text-sm">Computer Science</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-500 text-sm">
                                <Calendar size={14} />
                                Expected Graduation 2027
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="bento-card-dark p-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                    <MapPin className="text-white" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Karachi, Pakistan</h3>
                                    <p className="text-neutral-400 text-sm">Open to remote work</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="stat-card">
                                <div className="stat-number">3+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">10+</div>
                                <div className="stat-label">Projects Delivered</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills Grid - Full Width */}
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            variants={itemVariants}
                            className="lg:col-span-3 bento-card p-5 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center mb-4 group-hover:bg-neutral-200 transition-colors">
                                <skillGroup.icon className="text-neutral-700" size={20} />
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-3">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span key={item} className="tag text-xs">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
