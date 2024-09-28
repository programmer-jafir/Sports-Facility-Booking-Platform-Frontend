import { baseApi } from "../../api/baseApi";

const booking = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBookings: builder.query({
          query: () => ({
            url: "/bookings", //admin only
            method: "GET",
          }),
        }),
      }),
})

export const {useGetAllBookingsQuery} = booking;
