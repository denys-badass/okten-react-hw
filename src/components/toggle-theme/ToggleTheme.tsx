import {useTheme} from "../../hooks/useTheme.tsx";

export const ToggleTheme = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div>
            <button onClick={theme == 'dark' ? toggleTheme : () => {}}>Light</button>
            <button onClick={theme == 'light' ? toggleTheme : () => {}}>Dark</button>
        </div>
    );
};