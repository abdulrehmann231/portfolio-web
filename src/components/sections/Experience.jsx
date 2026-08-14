import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const experiences = [
    {
        title: 'Software Engineer',
        company: 'Gitwit',
        period: 'Jun 2025 — Present',
        type: 'Remote',
        description: [
            "Built Gitwit's browser-based AI coding agent (similar to Cursor), enabling natural-language-driven code generation and editing directly in the browser.",
            'Built and integrated E2B sandbox templates to run code live with real-time preview, streamlining developer workflows.',
            'Developed GitHub integrations enabling seamless repository connectivity for AI-driven code modifications.',
        ],
    },
    {
        title: 'AI Engineer',
        company: 'Background Agents (backgrounder.dev)',
        period: '2025 — Present',
        type: 'Remote · Apprenticeship',
        description: [
            'Built MCP (Model Context Protocol) server integrations and tool-connection layers in TypeScript, letting AI coding agents connect with any MCP-compatible external service.',
            'Designed a token gateway service and custom API endpoints for secure, authenticated access to AI agent operations across sandboxed environments.',
            'Contributed to an open-source AI agent platform (4,200+ commits, Apache-2.0) powering isolated sandbox execution, WebSocket terminals and Claude Code integration.',
        ],
    },
    {
        title: 'Full-Stack AI Engineer',
        company: 'Softject',
        period: 'Aug 2025 — Jul 2026',
        type: 'Hybrid · Part-time',
        description: [
            'Built AI agents, automation workflows and RAG-based features — document ingestion, embeddings, vector search and LLM-powered responses — across Next.js, Node.js, Python/FastAPI and PostgreSQL.',
            'Previously AI Engineer Intern (Jun–Aug 2025) and Full-Stack Developer (Jan–Jun 2025), building web applications with Next.js and full-stack technologies.',
        ],
    },
    {
        title: 'Backend Intern',
        company: 'Central Depository Company of Pakistan',
        period: 'Jul 2024 — Sep 2024',
        type: 'Onsite · Karachi',
        description: [
            'Developed REST APIs and backend microservices with Spring Boot, using SQL databases and JWT-based authentication to secure inter-service communication.',
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 relative">
            <div className="container-page">
                <SectionHeading
                    kicker="03 / Journey"
                    title="Where I've worked."
                    description="Three years across startups, agencies and enterprise — remote and onsite."
                />

                <div className="mt-14 relative max-w-3xl">
                    {/* Vertical line */}
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-line md:left-1" />

                    <div className="space-y-10">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.45, delay: index * 0.05 }}
                                viewport={{ once: true, margin: '-60px' }}
                                className="relative pl-8 md:pl-12 group"
                            >
                                {/* Node */}
                                <span className="absolute left-0 md:left-1 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-bg border-2 border-line2 group-hover:border-accent transition-colors" />
                                <span className="absolute left-0 md:left-1 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-accent scale-0 group-hover:scale-50 transition-transform" />

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                    <div>
                                        <h3 className="font-display text-xl font-semibold text-ink">
                                            {exp.title}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-1 text-muted">
                                            <span className="accent-ink font-medium">{exp.company}</span>
                                            <span className="text-faint">·</span>
                                            <span className="inline-flex items-center gap-1 text-sm text-faint">
                                                <MapPin size={13} /> {exp.type}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="font-mono text-xs text-faint whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                                            <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
