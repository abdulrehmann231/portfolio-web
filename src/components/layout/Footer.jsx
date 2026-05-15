import { Github, Linkedin, Mail, Sparkles, Heart } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/abdulrehmann231/', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/abdulrehman-nasir-a86a87273', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:mabdulrehman951@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="relative overflow-hidden">
            {/* Top Border Gradient */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="py-16 relative">
                <div className="absolute inset-0 dot-pattern opacity-20" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                <Sparkles size={20} className="text-white" />
                            </div>
                            <span className="font-bold text-xl text-slate-900">
                                Abdul<span className="text-slate-400">Rehman</span>
                            </span>
                        </div>

                        {/* Tagline */}
                        <p className="text-slate-500 max-w-md mb-8">
                            Building software that feels like magic — one commit at a time.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 mb-10">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noreferrer"
                                    className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 hover:-translate-y-1 transition-all duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8" />

                        {/* Copyright */}
                        <p className="text-slate-400 text-sm flex items-center gap-1.5">
                            Made with <Heart size={14} className="text-rose-400 fill-rose-400" /> in Karachi
                        </p>
                        <p className="text-slate-400 text-sm mt-1">
                            © {new Date().getFullYear()} Abdul Rehman. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
