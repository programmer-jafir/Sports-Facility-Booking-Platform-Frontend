import { useGetAllBookingsQuery } from "../../../redux/features/booking/booking";

const Booking = () => {
    const {data} = useGetAllBookingsQuery(undefined);

    console.log(data);
    return (
        <div>
            <h1>BookingManagement
            </h1>
        </div>
    );
};

export default Booking;