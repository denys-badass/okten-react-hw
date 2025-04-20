import {createContext, FC, ReactNode, useEffect, useState} from "react";

export type Theme = 'light' | 'dark';

export interface IThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContextType | undefined>(undefined);

export const ThemeProvider: FC<{children: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove(theme === 'light' ? 'dark' : 'light');
        root.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}