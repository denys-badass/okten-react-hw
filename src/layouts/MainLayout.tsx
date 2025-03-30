import Menu from "../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <nav>
                <Menu />
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;