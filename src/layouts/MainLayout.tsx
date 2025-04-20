import {Outlet} from "react-router-dom";
import Header from "../components/header/Header.tsx";

const MainLayout = () => {
    return (
        <div>
            <header className='bg-sky-200/50 h-[10vh] dark:bg-sky-950 dark:text-slate-100'>
                <Header/>
            </header>
            <main className='bg-slate-300 h-[90vh] dark:bg-slate-800 dark:text-slate-100'>
                <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;