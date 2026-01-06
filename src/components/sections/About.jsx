import { motion } from 'framer-motion';

const skills = [
  { category: "Languages", items: ["JavaScript", "C#", "Java", "C++", "C"] },
  { category: "Frameworks", items: ["NodeJS", "ExpressJS", "ReactJS", "NextJS", ".NET", "SpringBoot"] },
  { category: "Tools", items: ["Git", "GitHub", "SQL Databases", "MongoDB"] },
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
                    <div className="space-y-6">
                        <p className="text-gray-300 leading-relaxed text-lg">
                            I am a passionate Computer Science student at <span className="text-blue-400 font-semibold">FAST NUCES</span> (Expected Grad. 2027) with a CGPA of 3.58. 
                            My journey is defined by a strong foundation in Data Structures, OOP, and Full Stack Development.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Currently working as a <span className="text-cyan-400 font-semibold">Software Engineer at Gitwit</span>, I specialize in building AI-driven integrations 
                            and optimizing developer workflows. I love solving complex problems and turning ideas into 
                            functional, scalable software.
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
