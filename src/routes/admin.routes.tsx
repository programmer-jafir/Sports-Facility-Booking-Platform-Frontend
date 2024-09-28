import AdminDashboard from "../Pages/admin/AdminDashboard";
import AllBookings from "../Pages/admin/AllBookings";
import Booking from "../Pages/admin/BookingManagement/Booking";
import CreateFacility from "../Pages/admin/CreateFacility";
import DeleateFacility from "../Pages/admin/DeleateFacility";
import UpdateFacility from "../Pages/admin/UpdateFacility";

export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard/>,
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



// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//     if(item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element,
//         });
//     }

//     if(item.children) {
//         item.children.forEach((child)=>{
//             acc.push({
//                 path: child.path,
//                 element: child.element,
//             });
//         });
//     }
// })


// export const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[],item) =>{
//         if(item.path && item.element){
//             acc.push({
//                 key: item.path,
//                 label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//             });
//         }
    
//         if(item.children){
//             acc.push({
//                 key: item.name,
//                 label: item.name,
//                 children: item.children.map((child) =>({
//                     key: child.name,
//                     label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//                 })),
//             });
//         }
//         return acc;
//     }, []);


