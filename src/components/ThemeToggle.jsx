import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from '../lib/util';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    document.documentElement.classList.toggle('light', !newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'z-50  rounded-full transition-all duration-300',
        'focus:outline-none',
        'mb-5 sm:mb-0'
      )}

    >
      {isDarkMode ? (
        <Sun className="cursor-pointer hover:text-yellow-400 transition-all duration-450" />
      ) : (
        <Moon className="cursor-pointer hover:text-primary transition-all duration-450" />
      )}
    </button>

  );
};
