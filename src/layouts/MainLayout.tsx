import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";

const MainLayout = () => {
    return (
        <>
            <nav className='flex justify-center items-center w-2/3 m-auto h-10'>
                <Menu/>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default MainLayout;