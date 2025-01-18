import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import { userPaths } from "./user.routes";
import Home from "../Pages/Home";
import ContactPage from "../Pages/ContactPage";
import UpdateFacility from "../Pages/admin/FacilityManagement/UpdateFacility";
import FacilityDetails from "../components/Facility/FacilityDetails";
import NotFound from "../Pages/Not.Found";
import AllFacility from "../Pages/AllFacility";
import About from "../Pages/About";

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
        path: '/facility/:id',
        element: <UpdateFacility/>
    },
    {
        path: '/facility-details/:id',
        element:<FacilityDetails/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/facality',
        element: <AllFacility/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/contact',
        element: <ContactPage/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '*',
        element:<NotFound/>
      },
])

export default router;