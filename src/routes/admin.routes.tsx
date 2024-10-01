import AdminDashboard from "../Pages/admin/AdminDashboard";
import AllBookings from "../Pages/admin/AllBookings";
import Booking from "../Pages/admin/BookingManagement/Booking";
import CreateFacility from "../Pages/admin/CreateFacility";
import DeleateFacility from "../Pages/admin/DeleateFacility";
import UpdateFacility from "../Pages/admin/UpdateFacility";
import CreateAdmin from "../Pages/admin/CreateAdmin";

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
        name: 'Facility',
        children:[
            {
                name: 'Create Facility',
                path: 'create-facility',
                element: <CreateFacility/>, 
            },
            {
                name: 'Update Facility',
                path: 'update-facility',
                element: <UpdateFacility/>, 
            },
            {
                name: 'Delete Facility',
                path: 'delete-facility',
                element: <DeleateFacility/>, 
            },
            {
                name: 'All Bookings',
                path: 'all-bookings',
                element: <AllBookings/>, 
            },
        ]
    },
]


