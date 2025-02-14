/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllBookingsQuery } from "../../../redux/features/booking/booking";

const Booking = () => {
    const {data, error, isLoading } = useGetAllBookingsQuery(undefined);
    console.log(data?.data.map((i: { endTime: any; })=>i.endTime))
    if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading bookings!</p>;

  return (
    <div>
      <h1 className="text-secondary text-3xl justify-center items-center text-center font-bold mb-5">All Bookings</h1>
      <pre style={{ backgroundColor: "#f4f4f4", color:"#ff2e00", padding: "10px", borderRadius: "5px" }}>
        {JSON.stringify(data, null, 2)}
      </pre>
      {/* <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Payable Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody> 
            {
                data?.data.map((i)=>
                    <tr>
                        <td>{i._id}</td>
                        <td>{i.date}</td>
                        <td>{i.endTime}</td>
                        <td>{i.startTime}</td>
                        <td>{i.payableAmount}</td>
                        <td>{i.isBooked}</td>
                    </tr>
                )
            }
        </tbody> 
      </table> */}
    </div>
  );
}

export default Booking;