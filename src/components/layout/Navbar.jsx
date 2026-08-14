import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Sun, Moon, ArrowUpRight } from 'lucide-react';

const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const ThemeToggle = ({ theme, onToggle }) => (
    <button
        onClick={onToggle}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        className="icon-btn"
    >
        {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
);

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 12);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

    return (
        <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
            <div className="container-page">
                <div
                    className={`flex items-center justify-between h-14 rounded-2xl px-3 sm:px-5 transition-all duration-300 ${
                        isScrolled ? 'card border border-line shadow-sm' : 'border border-transparent'
                    }`}
                >
                    <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg tracking-tight text-ink">
                        <span className="grid place-items-center w-8 h-8 rounded-lg bg-accent text-black font-mono text-sm">
                            AR
                        </span>
                        <span className="hidden sm:inline">
                            Abdul<span className="text-faint">Rehman</span>
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="font-mono text-sm text-muted hover:text-ink px-3 py-2 rounded-lg hover:bg-surface2 transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        <ThemeToggle theme={theme} onToggle={toggleTheme} />
                        <a href="https://github.com/abdulrehmann231/" target="_blank" rel="noreferrer" className="icon-btn">
                            <Github size={17} />
                        </a>
                        <a href="https://www.linkedin.com/in/abdulrehman-nasir-a86a87273" target="_blank" rel="noreferrer" className="icon-btn">
                            <Linkedin size={17} />
                        </a>
                        <a href="#contact" className="btn btn-primary ml-1 !px-4 !py-2 text-sm">
                            Let's talk
                            <ArrowUpRight size={16} />
                        </a>
                    </div>

                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle theme={theme} onToggle={toggleTheme} />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            className="icon-btn"
                        >
                            {isOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden container-page mt-3">
                    <div className="card border border-line p-3">
                        <div className="space-y-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 rounded-xl font-mono text-sm text-muted hover:text-ink hover:bg-surface2 transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="btn btn-primary w-full mt-2"
                            >
                                Let's talk
                                <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
