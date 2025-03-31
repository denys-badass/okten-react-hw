import {Outlet} from "react-router-dom";

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