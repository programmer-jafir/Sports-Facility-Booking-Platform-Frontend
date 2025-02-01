import IndivisualUserAllBookings from "../Pages/user/IndivisualUserAllBookings";
import UserDashboard from "../Pages/user/UserDashboard";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "My Bookings",
    path: "my-bookings",
    element: <IndivisualUserAllBookings />,
  },
];
