import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '../context/ThemeProvider';

interface ThemeToggleProps {
  floating?: boolean;
}

const ThemeToggle = ({ floating = true }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  if (floating) {
    return (
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-40 glass-rail rounded-full p-2.5 text-muted hover:text-foreground transition-colors active:scale-95"
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-muted hover:text-foreground transition-colors active:scale-95"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;
