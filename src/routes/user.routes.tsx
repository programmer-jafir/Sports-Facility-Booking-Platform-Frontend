import CreateBooking from "../Pages/user/CreateBooking";
import IndivisualUserAllBookings from "../Pages/user/IndivisualUserAllBookings";
import UserDashboard from "../Pages/user/UserDashboard";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "Create Booking",
    path: "create-booking",
    element: <CreateBooking />,
  },
  {
    name: "My Bookings",
    path: "my-bookings",
    element: <IndivisualUserAllBookings />,
  },
];
