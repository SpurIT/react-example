import { useContext } from 'react';
import { THEME_KEY } from 'shared/const/localStorage';
import { Theme, ThemeContext } from '../lib/ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
