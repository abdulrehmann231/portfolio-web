import { motion } from 'framer-motion';

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "C++", "C#", "SQL"] },
  { category: "Frameworks", items: ["React", "Next.js", "Node.js", "Express", "Spring Boot", ".NET", "Electron", "FastAPI", "TailwindCSS"] },
  { category: "AI & Databases", items: ["RAG", "YOLO v5", "Firebase", "MongoDB", "PostgreSQL", "MySQL", "Groq API", "HuggingFace"] },
  { category: "Tools", items: ["Git", "GitHub", "Docker", "Linux", "Postman", "Eureka"] },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            Hi, I’m <span className="text-white font-semibold">Abdulrehman</span> 👋
                            <br />
                            A full-stack developer who loves building smart, scalable, and user-focused applications. 
                            I am currently a third-year Computer Science student at <span className="text-blue-400 font-semibold">FAST NUCES</span> (Expected Grad. 2027).
                        </p>
                        <p>
                            I specialize in web development and AI-driven solutions, working with technologies like Next.js, React, Node.js, Python, Spring Boot, and modern databases. Recently, I’ve been deeply involved in Generative AI, building RAG-based applications, AI chat systems, and SaaS products with Stripe-powered subscriptions.
                        </p>
                        <p>
                            I enjoy working across the full stack — from designing APIs and databases to creating smooth frontend experiences. My projects focus on solving real problems, whether it’s automating workflows, enhancing search with AI, or building production-ready SaaS platforms.
                        </p>
                        <p>
                            I’m always exploring new tools, improving my skills, and pushing ideas from concept to deployment.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {skills.map((skillGroup, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-l-4 border-l-blue-500"
                            >
                                <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item) => (
                                        <span key={item} className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-300 border border-blue-500/20">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default About;
