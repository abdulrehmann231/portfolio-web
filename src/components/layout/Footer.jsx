import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/abdulrehmann231/', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/abdulrehman-nasir-a86a87273', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:mabdulrehman951@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="relative overflow-hidden">
            <div className="h-px bg-neutral-200" />

            <div className="py-16 relative">
                <div className="absolute inset-0 dot-pattern opacity-20" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        {/* Logo */}
                        <span className="font-bold text-xl text-neutral-900 mb-4">
                            Abdul<span className="text-neutral-400">Rehman</span>
                        </span>

                        {/* Tagline */}
                        <p className="text-neutral-500 max-w-md mb-8">
                            Building reliable software, one commit at a time.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 mb-10">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noreferrer"
                                    className="w-11 h-11 rounded-xl bg-neutral-100 border border-neutral-100 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:border-neutral-200 hover:bg-neutral-50 transition-all duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="w-16 h-px bg-neutral-200 mb-8" />

                        {/* Copyright */}
                        <p className="text-neutral-400 text-sm">
                            © {new Date().getFullYear()} Abdul Rehman. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
