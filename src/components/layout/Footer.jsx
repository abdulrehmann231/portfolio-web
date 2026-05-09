const Footer = () => {
    return (
        <footer className="border-t border-slate-200/80 dark:border-slate-700/80 py-12 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-slate-950/[0.02] dark:bg-slate-100/[0.02] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <div className="font-extrabold text-xl tracking-tight mb-2 text-slate-900 dark:text-white">
                        Abdul<span className="text-slate-500 dark:text-slate-400">Rehman</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        Building useful software with clear structure and disciplined execution.
                    </p>
                </div>

                <div className="flex items-center gap-8">
                    <a href="https://github.com/abdulrehmann231/" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/abdulrehman-nasir-a86a87273" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        LinkedIn
                    </a>
                    <a href="mailto:mabdulrehman951@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        Email
                    </a>
                </div>
            </div>

            <div className="text-center mt-12 text-slate-500 dark:text-slate-400 text-sm">
                © {new Date().getFullYear()} Abdul Rehman. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
