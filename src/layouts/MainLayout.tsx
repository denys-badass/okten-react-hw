import {Outlet} from "react-router-dom";
import Users from "../components/users/Users.tsx";

const MainLayout = () => {
    return (
        <div className=''>
            <nav>
                <Users/>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;