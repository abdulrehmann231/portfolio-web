import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

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
                    <div className="flex-shrink-0 font-extrabold text-xl tracking-tight text-blue-900">
                        Abdul<span className="text-blue-500">Rehman</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-blue-600 hover:text-blue-900 px-3 py-2 rounded-full transition-all duration-300 hover:bg-blue-50 font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com/abdulrehmann231/" target="_blank" rel="noreferrer" className="p-2 surface rounded-full text-blue-500 hover:text-blue-900 hover:border-blue-300 transition-colors">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/abdulrehman-nasir-a86a87273" target="_blank" rel="noreferrer" className="p-2 surface rounded-full text-blue-500 hover:text-blue-900 hover:border-blue-300 transition-colors">
                            <Linkedin size={18} />
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-blue-500 hover:text-blue-900 p-2"
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
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 rounded-2xl text-base font-medium text-blue-600 hover:text-blue-900 hover:bg-blue-50/80 transition-colors"
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
