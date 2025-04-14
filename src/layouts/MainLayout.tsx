import {Outlet} from "react-router-dom";
import {Menu} from "../components/menu/Menu.tsx";

export const MainLayout = () => {
    return (
        <div>
            <nav>
                <Menu/>
            </nav>
            <main>
                {/*Display children routes*/}
                <Outlet/>
            </main>
        </div>
    );
};