import {createBrowserRouter} from "react-router-dom";
import CartsPage from "../pages/CartsPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <UsersPage/>},
    {path: 'user/:userId/carts/', element: <CartsPage/>}
]);