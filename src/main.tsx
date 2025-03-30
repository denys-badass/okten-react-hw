import { createRoot } from 'react-dom/client'
import './index.css'
// import {RouterProvider} from "react-router-dom";
// import {routes} from "./router/routes.tsx";
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(<App />);

// <RouterProvider router={routes} />