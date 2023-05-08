import { Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    FC, useMemo, useState, ReactNode, useEffect,
} from 'react';
import { THEME_KEY } from 'shared/const/localStorage';

const defaultTheme = localStorage.getItem(THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = (props) => {
    const { children } = props;
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    useEffect(() => {
        document.body.className = theme;
    }, []);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
