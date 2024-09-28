import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import { userPaths } from "./user.routes";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/dashboard',
        element: <App/>,
    },
    {
        path: '/admin',
        element:
            <App/>,
        children: routeGenerator(adminPaths),
    },
    {
        path: '/user',
        element:<App/>,    
        children: routeGenerator(userPaths),
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
])

export default router;