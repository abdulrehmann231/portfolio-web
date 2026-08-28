import { motion } from 'framer-motion';
import { ArrowUpRight, GitPullRequest, Users } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const workedWith = [
    { name: 'Gitwit', role: 'Software Engineer', period: '2025 — Present', url: 'https://gitwit.dev/' },
    { name: 'Background Agents', role: 'AI Engineer', period: '2025 — Present', url: 'https://backgrounder.dev' },
    { name: 'Softject', role: 'Full-Stack AI Engineer', period: '2025', url: null },
    { name: 'Head-starter AI', role: 'Full-Stack Developer', period: '2024', url: null },
    { name: 'Central Depository Co.', role: 'Backend Intern', period: '2024', url: null },
    { name: 'Fiverr', role: 'C# / .NET Developer', period: '2022 — 2023', url: null },
];

const contributedTo = [
    {
        name: 'Gitwit',
        desc: 'Open-source AI-native cloud IDE with live previews, AI code generation and sandboxed execution.',
        tag: 'AI · DevTools',
        url: 'https://github.com/jamesmurdza/gitwit/',
    },
    {
        name: 'AI Agent Platform',
        desc: 'Apache-2.0 platform powering isolated sandbox execution, WebSocket terminals and Claude Code integration.',
        tag: '4,200+ commits',
        url: 'https://backgrounder.dev',
    },
    {
        name: 'EarthLink AI',
        desc: 'Agentic geospatial platform turning plain-English prompts into live map actions.',
        tag: 'Open source',
        url: 'https://github.com/abdulrehmann231/earthlink-ai',
    },
];

const monogram = (name) =>
    name
        .replace(/[^a-zA-Z ]/g, '')
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase();

const fade = {
    hidden: { opacity: 0, y: 18 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.05 } }),
};

const Collaborations = () => {
    return (
        <section id="work" className="py-24 md:py-32 relative">
            <div className="container-page">
                <SectionHeading
                    kicker="04 / Collaboration"
                    title="Teams & open source."
                    description="Companies I've built with, and the open-source projects I've contributed to."
                />

                <div className="mt-12 grid lg:grid-cols-2 gap-6">
                    {/* Worked with */}
                    <div>
                        <div className="flex items-center gap-2 mb-5">
                            <span className="grid place-items-center w-8 h-8 rounded-lg bg-accentsoft text-accentink">
                                <Users size={15} />
                            </span>
                            <h3 className="font-display text-lg font-semibold text-ink">Worked with</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {workedWith.map((c, i) => {
                                const Wrap = c.url ? 'a' : 'div';
                                return (
                                    <motion.div
                                        key={c.name}
                                        variants={fade}
                                        custom={i}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, margin: '-40px' }}
                                    >
                                        <Wrap
                                            {...(c.url ? { href: c.url, target: '_blank', rel: 'noreferrer' } : {})}
                                            className="card card-hover p-4 flex items-center gap-3 h-full group"
                                        >
                                            <span className="grid place-items-center w-11 h-11 shrink-0 rounded-xl bg-surface2 border border-line font-display font-bold text-ink group-hover:text-accentink transition-colors">
                                                {monogram(c.name)}
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="font-medium text-ink truncate">{c.name}</span>
                                                    {c.url && <ArrowUpRight size={13} className="shrink-0 text-faint group-hover:text-accentink transition-colors" />}
                                                </div>
                                                <div className="text-xs text-muted truncate">{c.role}</div>
                                                <div className="font-mono text-[11px] text-faint mt-0.5">{c.period}</div>
                                            </div>
                                        </Wrap>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contributed to */}
                    <div>
                        <div className="flex items-center gap-2 mb-5">
                            <span className="grid place-items-center w-8 h-8 rounded-lg bg-accentsoft text-accentink">
                                <GitPullRequest size={15} />
                            </span>
                            <h3 className="font-display text-lg font-semibold text-ink">Contributed to</h3>
                        </div>
                        <div className="flex flex-col gap-3">
                            {contributedTo.map((c, i) => (
                                <motion.a
                                    key={c.name}
                                    href={c.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    variants={fade}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, margin: '-40px' }}
                                    className="card card-hover p-5 group"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-display font-semibold text-ink group-hover:text-accentink transition-colors">{c.name}</h4>
                                            <span className="chip chip-accent !py-0.5">{c.tag}</span>
                                        </div>
                                        <ArrowUpRight size={16} className="shrink-0 text-faint group-hover:text-accentink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </div>
                                    <p className="mt-2 text-sm text-muted leading-relaxed">{c.desc}</p>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collaborations;
