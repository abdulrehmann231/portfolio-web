import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';
    const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={label}
            title={label}
            className={`p-2 surface rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors ${className}`}
        >
            <span className="flex items-center justify-center transition-transform duration-300 ease-out">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </span>
        </button>
    );
};

export default ThemeToggle;
