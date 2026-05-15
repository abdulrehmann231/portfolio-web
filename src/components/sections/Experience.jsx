import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2, Sparkles } from 'lucide-react';

const experiences = [
    {
        title: "Software Engineer",
        company: "Gitwit",
        period: "Jun 2025 – Present",
        type: "Remote",
        current: true,
        description: [
            "Developing GitHub integrations for AI-driven code modifications",
            "Designing and optimizing E2B templates for workflow automation",
            "Building AI-powered developer tools connecting natural language to code"
        ]
    },
    {
        title: "Full-Stack Developer",
        company: "Softject",
        period: "Jan 2025 – Present",
        type: "Onsite",
        current: true,
        description: [
            "Creating responsive frontends using Next.js, React.js and TailwindCSS",
            "Building backend services with REST APIs, NodeJS, and ExpressJS"
        ]
    },
    {
        title: "Full-Stack Developer",
        company: "Headstarter AI",
        period: "Jul 2024 – Sept 2024",
        type: "Remote",
        description: [
            "Developed full-stack projects using Next.js and Firebase",
            "Integrated AI models and implemented RAG techniques"
        ]
    },
    {
        title: "Backend Intern",
        company: "Central Depository Company",
        period: "Jul 2024 – Sept 2024",
        type: "Onsite",
        description: [
            "Developed REST APIs and microservices using Spring Boot",
            "Implemented SQL databases and JWT authentication"
        ]
    },
    {
        title: "C# .NET Developer",
        company: "Fiverr",
        period: "Sept 2022 – Aug 2023",
        type: "Remote",
        description: [
            "Created desktop applications using C# .NET and Windows Forms",
            "Implemented OOP patterns and integrated diverse databases"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative">
            <div className="absolute inset-0 dot-pattern opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="section-kicker mx-auto mb-4">
                        <Briefcase size={14} />
                        Career
                    </div>
                    <h2 className="section-title text-3xl md:text-5xl font-extrabold mb-4">
                        Work Experience
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Building products at startups and enterprises — from AI tools to financial systems.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-5">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`bento-card p-6 md:p-8 group ${exp.current ? 'ring-2 ring-indigo-500/20' : ''}`}
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                                        exp.current
                                            ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
                                            : 'bg-gradient-to-br from-slate-100 to-slate-200'
                                    }`}>
                                        <Building2 size={22} className={exp.current ? 'text-white' : 'text-slate-600'} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                                {exp.title}
                                            </h3>
                                            {exp.current && (
                                                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                                            <span className="text-slate-600 font-medium">{exp.company}</span>
                                            <span className="tag text-xs py-0.5">
                                                <MapPin size={10} className="mr-1" />
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium bg-slate-50 px-4 py-2 rounded-full border border-slate-100 self-start">
                                    <Calendar size={14} />
                                    {exp.period}
                                </div>
                            </div>

                            <ul className="space-y-2.5 ml-0 md:ml-16">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-2 flex-shrink-0" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
