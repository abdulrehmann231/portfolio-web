import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Sparkles } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle hash scrolling after navigation
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const element = document.querySelector(location.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    // Navigation items
    const navItems = [
        { name: 'About', path: '/about', hash: '' },
        { name: 'Experience', path: '/about', hash: '#experience' },
        { name: 'Projects', path: '/', hash: '#projects' },
        { name: 'Contact', path: '/', hash: '#contact' },
    ];

    const handleNavClick = (e, item) => {
        e.preventDefault();
        setIsOpen(false);

        const targetPath = item.path + item.hash;

        if (location.pathname === item.path) {
            if (item.hash) {
                const element = document.querySelector(item.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            navigate(targetPath);
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${
                isScrolled ? 'py-3' : 'py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`flex items-center justify-between h-14 rounded-2xl transition-all duration-500 px-5 ${
                        isScrolled
                            ? 'glass shadow-lg shadow-slate-900/5'
                            : 'bg-transparent'
                    }`}
                >
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 font-bold text-lg tracking-tight text-slate-900 group"
                    >
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Sparkles size={16} className="text-white" />
                        </div>
                        <span>Abdul<span className="text-slate-400">Rehman</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path + item.hash}
                                onClick={(e) => handleNavClick(e, item)}
                                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-200 cursor-pointer"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Social Links & CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="https://github.com/abdulrehmann231/"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100/80 transition-all"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abdulrehman-nasir-a86a87273"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100/80 transition-all"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, { path: '/', hash: '#contact' })}
                            className="ml-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Let's Talk
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-4 right-4 mt-2 glass rounded-2xl p-3 shadow-xl shadow-slate-900/10 animate-in slide-in-from-top-2 fade-in duration-200">
                    <div className="space-y-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path + item.hash}
                                onClick={(e) => handleNavClick(e, item)}
                                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-colors cursor-pointer"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="border-t border-slate-200/50 mt-3 pt-3 flex items-center gap-3">
                        <a
                            href="https://github.com/abdulrehmann231/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-all"
                        >
                            <Github size={18} />
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abdulrehman-nasir-a86a87273"
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-all"
                        >
                            <Linkedin size={18} />
                            LinkedIn
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
