/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useGetaFacilityQuery,
  useUseGetAvailableSlotsQueryQuery,
} from "../redux/features/admin/feacilityManagement";
import { useParams } from "react-router-dom";
import SportsFooter from "../components/HomeComponents/SportsFooter";
import Navbar from "../components/Navbar/Navbar";
import { useCreateBookingMutation } from "../redux/features/booking/booking";

const BookingPage = () => {
  const [createBooking, { isLoading: bookingLoading }] = useCreateBookingMutation();
  const { id } = useParams();
  const { data: facilityData } = useGetaFacilityQuery(id as string);
  const [date, setDate] = useState("");
  const { data: slots, error, isLoading } = useUseGetAvailableSlotsQueryQuery(date);
  console.log(slots)
  console.log(error)
  console.log(isLoading)

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleProceedToPay = async () => {
    if (!date || !startTime || !endTime) {
      alert("Please select a valid date and time range.");
      return;
    }

    const pricePerHour = facilityData?.data?.pricePerHour || 0;
    const start: any = new Date(`1970-01-01T${startTime}`);
    const end: any = new Date(`1970-01-01T${endTime}`);
    const durationInHours = (end - start) / (1000 * 60 * 60);

    if (durationInHours <= 0) {
      alert("End time must be later than start time.");
      return;
    }

    const payableAmount = durationInHours * pricePerHour;

    const bookingDetails = {
      facility: id,
      date,
      startTime,
      endTime,
      Amount: payableAmount,
    };

    try {
      const response = await createBooking(bookingDetails).unwrap();
      alert("Booking successful!");
      console.log(response);
    } catch (error: any) {
      console.error("Booking failed:", error);
      if (error?.data?.message) {
        alert(error.data.message);
      } else {
        alert("Failed to create booking. Please try again.");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl text-secondary font-bold mb-4 text-center">Booking Page</h1>
        <div className="bg-gray-100 rounded-lg shadow-lg">
          <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10">
              <div className="flex-shrink-0">
                <img
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                  src={facilityData?.data?.img}
                  alt={facilityData?.data?.name}
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">{facilityData?.data?.name}</h1>
                  <p className="mt-4 text-gray-700">{facilityData?.data?.description}</p>
                  <span className="block text-gray-700 font-medium text-sm">
                    Location: {facilityData?.data?.location}
                  </span>
                </div>

                <div className="mt-8">
                  <div className="text-2xl font-bold text-primary mb-3">
                    <span>Price Per Hour: </span>
                    {facilityData?.data?.pricePerHour}$
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Date Input */}
          <div className="mb-6">
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>


          {/* Time Selection */}
          <div className="mb-6">
            <label>Start Time:</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <label>End Time:</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Proceed Button */}
          <button
            onClick={handleProceedToPay}
            className="bg-gray-600 text-white w-full py-3 rounded hover:bg-gray-500"
          >
            Proceed to Pay
          </button>

          {/* Booking Status */}
          {bookingLoading && <p className="text-gray-500">Processing your booking...</p>}
          {/* {bookingError && <p className="text-red-500">Error: {bookingError.message}</p>} */}
        </div>
      </div>
      <SportsFooter />
    </div>
  );
};

export default BookingPage;
