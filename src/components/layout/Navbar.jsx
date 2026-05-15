import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PiListBold, PiXBold, PiGithubLogoBold, PiLinkedinLogoBold } from 'react-icons/pi';

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
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? 'py-3' : 'py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`flex items-center justify-between h-14 rounded-2xl transition-all duration-300 px-5 ${
                        isScrolled
                            ? 'glass shadow-sm'
                            : 'bg-transparent'
                    }`}
                >
                    {/* Logo */}
                    <Link
                        to="/"
                        className="font-semibold text-lg tracking-tight text-neutral-900"
                    >
                        Abdul<span className="text-neutral-400">Rehman</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path + item.hash}
                                onClick={(e) => handleNavClick(e, item)}
                                className="px-4 py-2 rounded-xl text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200 cursor-pointer"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Social Links & CTA */}
                    <div className="hidden md:flex items-center gap-2">
                        <a
                            href="https://github.com/abdulrehmann231/"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2.5 rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all"
                        >
                            <PiGithubLogoBold size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abdulrehman-nasir-a86a87273"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2.5 rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all"
                        >
                            <PiLinkedinLogoBold size={20} />
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, { path: '/', hash: '#contact' })}
                            className="ml-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 transition-colors"
                        >
                            Get in Touch
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-xl text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                    >
                        {isOpen ? <PiXBold size={22} /> : <PiListBold size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl p-3 shadow-lg border border-neutral-100">
                    <div className="space-y-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path + item.hash}
                                onClick={(e) => handleNavClick(e, item)}
                                className="block px-4 py-3 rounded-xl text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors cursor-pointer"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="border-t border-neutral-100 mt-3 pt-3 flex items-center gap-3">
                        <a
                            href="https://github.com/abdulrehmann231/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-all"
                        >
                            <PiGithubLogoBold size={20} />
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abdulrehman-nasir-a86a87273"
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-all"
                        >
                            <PiLinkedinLogoBold size={20} />
                            LinkedIn
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
