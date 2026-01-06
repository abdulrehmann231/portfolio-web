import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        title: "Software Engineer",
        company: "Gitwit",
        period: "Jun 2025 – Ongoing",
        type: "Remote",
        description: [
            "Developing and maintaining GitHub integrations for AI-driven code modifications.",
            "Designing and optimizing E2B templates to automate workflows.",
            "Collaborating on AI-powered developer tools connecting natural language to code."
        ]
    },
    {
        title: "Full-Stack Developer",
        company: "Softject",
        period: "Jan 2025 – Ongoing",
        type: "Onsite",
        description: [
            "Creating Responsive frontends using ReactJs with Tailwind.",
            "Building backend services with REST APIs, NodeJS, and ExpressJS."
        ]
    },
    {
        title: "Full-Stack Developer",
        company: "Head-starter AI",
        period: "July 2024 – Sept 2024",
        type: "Remote",
        description: [
            "Developed Full Stack Projects using NextJS and Firebase.",
            "Integrated different AI models and implemented RAG techniques."
        ]
    },
    {
        title: "Backend Intern",
        company: "Central Depository Company of Pakistan",
        period: "July 2024 – Sept 2024",
        type: "Onsite",
        description: [
            "Developing REST-APIS and Micro-services using Spring-boot.",
            "Implemented SQL databases and JWT auth."
        ]
    },
    {
        title: "C# .net Developer",
        company: "Fiverr.com",
        period: "Sept 2022 – Aug 2023",
        type: "Remote",
        description: [
            "Created Desktop / Windows Form Applications using C# .net.",
            "Implemented OOP and integrated diverse databases."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
             <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Work Experience</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
                    </div>

                    <div className="max-w-3xl mx-auto space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group"
                            >
                                <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                                        <div className="text-lg text-gray-400 font-medium flex items-center gap-2 mt-2">
                                            <Briefcase size={18} className="text-blue-500" />
                                            {exp.company}
                                            <span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-full text-gray-400">
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-gray-400 font-medium flex items-center gap-2 bg-white/5 self-start px-4 py-2 rounded-full border border-white/5">
                                        <Calendar size={16} className="text-blue-500" />
                                        {exp.period}
                                    </div>
                                </div>
                                
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-gray-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
