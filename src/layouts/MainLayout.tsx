import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";

const MainLayout = () => {
    return (
        <div>
            <nav className='w-full h-[100px] bg-sky-600 flex items-center text-slate-100 px-8'>
                <Menu/>
            </nav>
            <main className='w-full bg-slate-200/50 h-[100vh]'>
                <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;