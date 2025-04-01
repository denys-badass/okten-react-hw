import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";

const MainLayout = () => {
    return (
        <>
            <nav className='sticky top-0 h-[100px] bg-sky-700'>
                <Menu/>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default MainLayout;