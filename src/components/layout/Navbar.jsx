import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
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

        // If we're already on the target page, just scroll
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
            // Navigate to the new page (hash will be handled by useEffect)
            navigate(targetPath);
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
                                <a
                                    key={item.name}
                                    href={item.path + item.hash}
                                    onClick={(e) => handleNavClick(e, item)}
                                    className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-full transition-all duration-300 hover:bg-slate-100 font-medium cursor-pointer"
                                >
                                    {item.name}
                                </a>
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
                            <a
                                key={item.name}
                                href={item.path + item.hash}
                                onClick={(e) => handleNavClick(e, item)}
                                className="block px-4 py-3 rounded-2xl text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-colors cursor-pointer"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
