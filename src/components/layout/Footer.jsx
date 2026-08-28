import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative border-t border-line py-14 mt-8">
            <div className="container-page">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="max-w-sm">
                        <a href="#home" className="inline-flex items-center gap-2 font-display font-bold text-lg tracking-tight text-ink">
                            <span className="grid place-items-center w-8 h-8 rounded-lg bg-accent text-black font-mono text-sm">AR</span>
                            Abdul<span className="text-faint -ml-2">Rehman</span>
                        </a>
                        <p className="mt-4 text-sm text-muted leading-relaxed">
                            Full-stack &amp; AI engineer building useful software with clear structure and
                            disciplined execution.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-10">
                        <div>
                            <div className="font-mono text-xs text-faint uppercase tracking-widest mb-3">Navigate</div>
                            <div className="flex flex-col gap-2 text-sm">
                                <a href="#about" className="link-underline w-fit">About</a>
                                <a href="#projects" className="link-underline w-fit">Projects</a>
                                <a href="#experience" className="link-underline w-fit">Experience</a>
                                <a href="#work" className="link-underline w-fit">Collaboration</a>
                                <a href="#contact" className="link-underline w-fit">Contact</a>
                                <a href="/Abdul-Rehman-Resume.pdf" download className="link-underline w-fit">Résumé</a>
                            </div>
                        </div>
                        <div>
                            <div className="font-mono text-xs text-faint uppercase tracking-widest mb-3">Elsewhere</div>
                            <div className="flex gap-3">
                                <a href="https://github.com/abdulrehmann231/" target="_blank" rel="noreferrer" className="icon-btn"><Github size={17} /></a>
                                <a href="https://www.linkedin.com/in/abdulrehman-nasir-tobaria" target="_blank" rel="noreferrer" className="icon-btn"><Linkedin size={17} /></a>
                                <a href="mailto:mabdulrehman951@gmail.com" className="icon-btn"><Mail size={17} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-mono text-xs text-faint">
                        © {new Date().getFullYear()} Abdul Rehman · Built with React &amp; Tailwind
                    </p>
                    <a href="#home" className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-ink transition-colors">
                        Back to top <ArrowUp size={14} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
