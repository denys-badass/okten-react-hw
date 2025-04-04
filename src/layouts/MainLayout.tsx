import {Outlet} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";

const MainLayout = () => {
    return (
        <div className='flex justify-center gap-6'>
            <nav className='w-1/4'>
                <UsersPage/>
            </nav>
            <main className='w-3/5'>
                <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;