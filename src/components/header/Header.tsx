import {ToggleTheme} from "../toggle-theme/ToggleTheme.tsx";
import {useTheme} from "../../hooks/useTheme.tsx";

const Header = () => {
    const {theme} = useTheme();

    return (
        <div className='flex justify-between items-center h-full w-3/4 mx-auto'>
            <h1>We show theme {theme}</h1>
            <ToggleTheme/>
        </div>
    );
};

export default Header;