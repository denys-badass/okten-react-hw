import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import CartPage from "../pages/CartPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: 'cart/:userId', element: <CartPage/>}
        ]}
]);