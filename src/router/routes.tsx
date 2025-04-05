import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import CartsPage from "../pages/CartsPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: 'user/:userId/carts/', element: <CartsPage/>}
        ]}
]);