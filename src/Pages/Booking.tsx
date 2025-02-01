// import { useState } from "react";
// import {
//   useGetaFacilityQuery,
//   useUseGetAvailableSlotsQueryQuery,
// } from "../redux/features/admin/feacilityManagement";
// import { useParams } from "react-router-dom";
// import SportsFooter from "../components/HomeComponents/SportsFooter";
// import Navbar from "../components/Navbar/Navbar";
// import { useCreateBookingMutation } from "../redux/features/booking/booking";

// const BookingPage = () => {
//   const [createBooking, { isLoading: bookingLoading, error: bookingError }] = useCreateBookingMutation();
//   const { id } = useParams();
//   const { data: facilityData } = useGetaFacilityQuery(id as string);
//   const [date, setDate] = useState("");
//   const { data: slots, error, isLoading } = useUseGetAvailableSlotsQueryQuery(date);

//   console.log(slots)


//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");

//   const handleProceedToPay = async () => {
//     if (!date || !startTime || !endTime) {
//       alert("Please select a valid date and time range.");
//       return;
//     }
  
//     const pricePerHour = facilityData?.data?.pricePerHour || 0;
//     const start = new Date(`1970-01-01T${startTime}`);
//     const end = new Date(`1970-01-01T${endTime}`);
//     const durationInHours = (end - start) / (1000 * 60 * 60);
  
//     if (durationInHours <= 0) {
//       alert("End time must be later than start time.");
//       return;
//     }
  
//     const payableAmount = durationInHours * pricePerHour;
  
//     const bookingDetails = {
//       facility: id, // Facility ID from useParams
//       date,
//       startTime,
//       endTime,
//       Amount: payableAmount,
//     };
  
//     try {
//       const response = await createBooking(bookingDetails).unwrap();
//       alert("Booking successful!");
//       console.log(response); // Handle successful response
//     } catch (error) {
//       console.error("Booking failed:", error);
//       alert("Failed to create booking. Please try again.");
//     }
//   };
  

//   return (
//     <div>
//       <Navbar />
//       <div className="p-6 max-w-4xl mx-auto">
//         <h1 className="text-3xl text-secondary font-bold mb-4 text-center">
//           Booking Page
//         </h1>
//         <div className="bg-gray-100 rounded-lg shadow-lg">
//           <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col gap-10">
//               <div className="flex-shrink-0">
//                 <img
//                   className="rounded-lg shadow-lg w-full h-96 object-cover"
//                   src={facilityData?.data?.img}
//                   alt={facilityData?.data?.name}
//                 />
//               </div>

//               <div className="flex-1 flex flex-col justify-between">
//                 <div>
//                   <h1 className="text-4xl font-bold text-gray-900">
//                     {facilityData?.data?.name}
//                   </h1>
//                   <p className="mt-4 text-gray-700">
//                     {facilityData?.data?.description}
//                   </p>
//                   <span className="block text-gray-700 font-medium text-sm mr-2 mb-2">
//                     Location: {facilityData?.data?.location}
//                   </span>
//                 </div>

//                 <div className="mt-8">
//                   <div className="text-2xl font-bold text-primary mb-3">
//                     <span>Price Per Hour: </span>
//                     {facilityData?.data?.pricePerHour}$
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Date Input */}
//           <div className="flex items-center gap-4 mb-6">
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               className="border p-2 rounded w-full"
//             />
//           </div>

//           {/* Slots Display */}
//           <div>
//             <h3 className="font-semibold mb-2">Available Slots</h3>
//             {isLoading && <p>Loading...</p>}
//             {/* {error && <p className="text-red-500">Failed to fetch slots.</p>} */}
//             {slots?.length > 0 ? (
//               <div className="grid grid-cols-2 gap-4">
//                 {slots.map((slot, index) => (
//                   <div
//                     key={index}
//                     className="bg-gray-900 text-white p-2 rounded text-center"
//                   >
//                     {slot.startTime} - {slot.endTime}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               !isLoading && <p className="text-gray-500">All-day available</p>
//             )}
//           </div>

//           {/* Time Selection */}
//           <div className="mb-6">
//             <div className="flex justify-between items-center mb-4">
//               <label className="font-semibold">Start Time</label>
//               <input
//                 type="time"
//                 value={startTime}
//                 onChange={(e) => setStartTime(e.target.value)}
//                 className="border p-2 rounded w-32"
//               />
//             </div>
//             <div className="flex justify-between items-center">
//               <label className="font-semibold">End Time</label>
//               <input
//                 type="time"
//                 value={endTime}
//                 onChange={(e) => setEndTime(e.target.value)}
//                 className="border p-2 rounded w-32"
//               />
//             </div>
//           </div>

//           <button
//             onClick={handleProceedToPay}
//             className="bg-gray-600 text-white w-full py-3 rounded hover:bg-gray-500"
//           >
//             Proceed to Pay
//           </button>

//           {bookingLoading && <p className="text-gray-500">Processing your booking...</p>}
// {bookingError && <p className="text-red-500">Failed to create booking: {bookingError.message}</p>}

//         </div>
//       </div>
//       <SportsFooter />
//     </div>
//   );
// };

// export default BookingPage;





// import React, { useState } from 'react';
// import { useCreateBookingMutation, useGetAllBookingsQuery } from '../redux/features/booking/booking';

// const BookingPage: React.FC = () => {
//   const { data: bookings, isLoading, error } = useGetAllBookingsQuery('');
//   const [createBooking] = useCreateBookingMutation();
//   console.log(bookings)

//   const [formData, setFormData] = useState({
//     facility: '',
//     date: '',
//     startTime: '',
//     endTime: '',
//     payableAmount: 0,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await createBooking(formData).unwrap();
//       alert('Booking created successfully!');
//     } catch (err: any) {
//       alert(err.data.message || 'Failed to create booking.');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Booking Page</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block font-medium">Facility</label>
//           <input
//             type="text"
//             name="facility"
//             value={formData.facility}
//             onChange={handleChange}
//             className="border rounded w-full p-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Date</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="border rounded w-full p-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Start Time</label>
//           <input
//             type="time"
//             name="startTime"
//             value={formData.startTime}
//             onChange={handleChange}
//             className="border rounded w-full p-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium">End Time</label>
//           <input
//             type="time"
//             name="endTime"
//             value={formData.endTime}
//             onChange={handleChange}
//             className="border rounded w-full p-2"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Book Facility
//         </button>
//       </form>

//       {isLoading && <p className="text-blue-500">Loading...</p>}
//       {error && <p className="text-red-500">{error as string}</p>}

//       <h2 className="text-xl font-bold mt-8">Existing Bookings</h2>
//       <ul className="space-y-2">
//         {bookings &&
//           bookings.map((booking) => (
//             <li key={booking.facility} className="p-4 border rounded">
//               <p>Facility: {booking.facility}</p>
//               <p>Date: {booking.date}</p>
//               <p>Time: {booking.startTime} - {booking.endTime}</p>
//               <p>Payable Amount: {booking.payableAmount}</p>
//               <p>Status: {booking.isBooked}</p>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default BookingPage;



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
  const [createBooking, { isLoading: bookingLoading, error: bookingError }] = useCreateBookingMutation();
  const { id } = useParams();
  const { data: facilityData } = useGetaFacilityQuery(id as string);
  const [date, setDate] = useState("");
  const { data: slots, error, isLoading } = useUseGetAvailableSlotsQueryQuery(date);

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleProceedToPay = async () => {
    if (!date || !startTime || !endTime) {
      alert("Please select a valid date and time range.");
      return;
    }

    const pricePerHour = facilityData?.data?.pricePerHour || 0;
    const start = new Date(`1970-01-01T${startTime}`);
    const end = new Date(`1970-01-01T${endTime}`);
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

          {/* Slots */}
          <div>
            <h3 className="font-semibold mb-2">Available Slots:</h3>
            {isLoading ? (
              <p>Loading slots...</p>
            ) : slots?.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {slots.map((slot, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 text-white p-2 rounded text-center"
                  >
                    {slot.startTime} - {slot.endTime}
                  </div>
                ))}
              </div>
            ) : (
              <p>No available slots for the selected date.</p>
            )}
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
          {bookingError && <p className="text-red-500">Error: {bookingError.message}</p>}
        </div>
      </div>
      <SportsFooter />
    </div>
  );
};

export default BookingPage;
