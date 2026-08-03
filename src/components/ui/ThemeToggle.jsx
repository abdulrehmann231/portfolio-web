import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = ({ className = '' }) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className={`p-2 surface rounded-full text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors ${className}`}
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
};

export default ThemeToggle;
