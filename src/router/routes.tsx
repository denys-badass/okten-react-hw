import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HeroPage from "../pages/HeroPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HeroPage/>}
        ]}
])