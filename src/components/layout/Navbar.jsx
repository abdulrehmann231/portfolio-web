import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation items - mix of routes and anchor links
    const navItems = [
        { name: 'About', href: '/about', isRoute: true },
        { name: 'Experience', href: '/about#experience', isRoute: true },
        { name: 'Projects', href: location.pathname === '/' ? '#projects' : '/#projects', isRoute: location.pathname !== '/' },
        { name: 'Contact', href: location.pathname === '/' ? '#contact' : '/#contact', isRoute: location.pathname !== '/' },
    ];

    const handleNavClick = (item) => {
        setIsOpen(false);
        // If it's a hash link on the current page, smooth scroll
        if (!item.isRoute && item.href.startsWith('#')) {
            const element = document.querySelector(item.href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? 'py-3' : 'py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300">
                <div
                    className={`flex items-center justify-between h-16 rounded-full transition-all duration-300 px-5 md:px-6 ${
                        isScrolled ? 'surface' : 'bg-transparent'
                    }`}
                >
                    <Link to="/" className="flex-shrink-0 font-extrabold text-xl tracking-tight text-slate-900">
                        Abdul<span className="text-slate-500">Rehman</span>
                    </Link>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                item.isRoute ? (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        onClick={() => handleNavClick(item)}
                                        className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-full transition-all duration-300 hover:bg-slate-100 font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => handleNavClick(item)}
                                        className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-full transition-all duration-300 hover:bg-slate-100 font-medium"
                                    >
                                        {item.name}
                                    </a>
                                )
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com/abdulrehmann231/" target="_blank" rel="noreferrer" className="p-2 surface rounded-full text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/abdulrehman-nasir-a86a87273" target="_blank" rel="noreferrer" className="p-2 surface rounded-full text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors">
                            <Linkedin size={18} />
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-500 hover:text-slate-900 p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-4 right-4 surface rounded-3xl p-4 animate-in slide-in-from-top-4 fade-in duration-200">
                    <div className="space-y-2">
                        {navItems.map((item) => (
                            item.isRoute ? (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => handleNavClick(item)}
                                    className="block px-4 py-3 rounded-2xl text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => handleNavClick(item)}
                                    className="block px-4 py-3 rounded-2xl text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-colors"
                                >
                                    {item.name}
                                </a>
                            )
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
