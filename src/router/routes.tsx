import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import MainPage from "../pages/main/MainPage.tsx";
import CommentsPage from "../pages/comments/CommentsPage.tsx";
import UsersPage from "../pages/users/UsersPage.tsx";
import PostsPage from "../pages/posts/PostsPage.tsx";
import ApiLayout from "../layouts/ApiLayout.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <MainPage/>},
            {path: 'users', element: <ApiLayout/>, children: [
                    {path: ':service', element: <UsersPage/>},
                ]},
            {path: 'posts', element: <ApiLayout/>, children: [
                    {path: ':service', element: <PostsPage/>},
                ]},
            {path: 'comments', element: <ApiLayout/>, children: [
                    {path: ':service', element: <CommentsPage/>},
                ]}
        ]}
]);