import {createBrowserRouter} from "react-router";
import App from "../App.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <App/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'complex', element: <ComplexPage/>}
        ]}
])