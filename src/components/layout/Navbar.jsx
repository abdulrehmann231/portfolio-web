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
                isScrolled ? 'py-4' : 'py-6'
            }`}
        >
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300`}>
                <div 
                    className={`flex items-center justify-between h-16 rounded-2xl transition-all duration-300 px-6 ${
                        isScrolled 
                        ? 'glass shadow-lg shadow-blue-500/5 bg-primary/80' 
                        : 'bg-transparent'
                    }`}
                >
                    <div className="flex-shrink-0 font-bold text-2xl tracking-tighter">
                        Abdul<span className="text-blue-400">Rehman</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-all duration-300 hover:scale-105 font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com/abdulrehmann231/" target="_blank" rel="noreferrer" className="p-2 glass rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/abdulrehman-nasir-a86a87273" target="_blank" rel="noreferrer" className="p-2 glass rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                            <Linkedin size={18} />
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-400 hover:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-4 right-4 glass rounded-2xl p-4 animate-in slide-in-from-top-4 fade-in duration-200">
                    <div className="space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
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
