import SubMenu from "../components/sub-menu/SubMenu.tsx";
import {Outlet} from "react-router-dom";

const ApiLayout = () => {
    return (
        <>
            <nav>
                <SubMenu/>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default ApiLayout;