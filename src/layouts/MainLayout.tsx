import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";

const MainLayout = () => {
    return (
        <>
            <nav>
                <Menu/>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default MainLayout;