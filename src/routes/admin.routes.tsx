import AdminDashboard from "../Pages/admin/AdminDashboard";
import Booking from "../Pages/admin/BookingManagement/Booking";
import CreateFacility from "../Pages/admin/CreateFacility";
import CreateAdmin from "../Pages/admin/CreateAdmin";
import Facility from "../Pages/admin/FacilityManagement/Facility";

export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard/>,
    },
    {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin/>,
    },
    {
        name: 'Booking',
        children:[
            {
                name: 'Booking',
                path: 'Booking',
                element: <Booking/>, 
            },
        ]
    },
    {
        name: 'Facility Management',
        children:[
            {
                name: 'Create Facility',
                path: 'create-facility',
                element: <CreateFacility/>, 
            },
            {
                name: 'All Facility',
                path: 'all-facility',
                element: <Facility/>, 
            },
        ]
    },
]


