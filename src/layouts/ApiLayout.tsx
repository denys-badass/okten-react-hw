import SubMenu from "../components/sub-menu/SubMenu.tsx";
import {Outlet} from "react-router-dom";

const ApiLayout = () => {
    return (
        <>
            <nav className='sticky inset-25 h-[75px] bg-sky-800'>
                <SubMenu/>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default ApiLayout;