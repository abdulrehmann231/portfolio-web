const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-12 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-blue-900/5 -z-10" />
             
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <div className="font-bold text-xl tracking-tighter mb-2">
                        Abdul<span className="text-blue-400">Rehman</span>
                    </div>
                    <p className="text-gray-500 text-sm">
                        Building the future, one line of code at a time.
                    </p>
                </div>

                <div className="flex items-center gap-8">
                    <a href="https://github.com/abdulrehmann231/" className="text-gray-400 hover:text-white transition-colors">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/abdulrehman-nasir-a86a87273" className="text-gray-400 hover:text-white transition-colors">
                        LinkedIn
                    </a>
                    <a href="mailto:mabdulrehman951@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        Email
                    </a>
                </div>
            </div>
            
            <div className="text-center mt-12 text-gray-600 text-sm">
                © {new Date().getFullYear()} Abdul Rehman. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
