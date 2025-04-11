import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";

const MainLayout = () => {
    return (
        <div>
            <nav>
                <Menu/>
            </nav>
            <main><Outlet/></main>
        </div>
    );
};

export default MainLayout;