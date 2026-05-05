const Footer = () => {
    return (
        <footer className="border-t border-blue-200/80 py-12 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-blue-950/[0.02] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <div className="font-extrabold text-xl tracking-tight mb-2 text-blue-900">
                        Abdul<span className="text-blue-500">Rehman</span>
                    </div>
                    <p className="text-blue-500 text-sm">
                        Building useful software with clear structure and disciplined execution.
                    </p>
                </div>

                <div className="flex items-center gap-8">
                    <a href="https://github.com/abdulrehmann231/" className="text-blue-500 hover:text-blue-900 transition-colors">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/abdulrehman-nasir-a86a87273" className="text-blue-500 hover:text-blue-900 transition-colors">
                        LinkedIn
                    </a>
                    <a href="mailto:mabdulrehman951@gmail.com" className="text-blue-500 hover:text-blue-900 transition-colors">
                        Email
                    </a>
                </div>
            </div>

            <div className="text-center mt-12 text-blue-500 text-sm">
                © {new Date().getFullYear()} Abdul Rehman. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
