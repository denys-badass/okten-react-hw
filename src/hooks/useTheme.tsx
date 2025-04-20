import {IThemeContextType, ThemeContext} from "../contexts/ThemeContext.tsx";
import {useContext} from "react";

export const useTheme = (): IThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('Error theme toogle');
    }
    return context;
}