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
            "Creating Responsive frontends using Next.js, React.js and TailwindCSS.",
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


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <div className="section-kicker mx-auto mb-4">Timeline</div>
                        <h2 className="section-title text-3xl md:text-5xl font-extrabold mb-4">Work Experience</h2>
                        <div className="section-rule mx-auto" />
                    </div>

                    <div className="max-w-3xl mx-auto space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="surface p-8 rounded-3xl hover:translate-y-[-2px] transition-all duration-300 group"
                            >
                                <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{exp.title}</h3>
                                        <div className="text-lg text-slate-500 font-medium flex items-center gap-2 mt-2 flex-wrap">
                                            <Briefcase size={18} className="text-teal-700" />
                                            {exp.company}
                                            <span className="text-xs bg-teal-50 border border-teal-100 px-2 py-1 rounded-full text-teal-700">
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-slate-500 font-medium flex items-center gap-2 bg-white/70 self-start px-4 py-2 rounded-full border border-slate-200">
                                        <Calendar size={16} className="text-teal-700" />
                                        {exp.period}
                                    </div>
                                </div>
                                
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-slate-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2.5 flex-shrink-0" />
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
