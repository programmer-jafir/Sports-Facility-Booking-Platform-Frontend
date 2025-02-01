import { baseApi } from "../../api/baseApi";

const booking = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBooking: builder.mutation({
          query: (data) => ({
            url: "/bookings", //user only
            method: "POST",
            body: data
          }),
        }),
        getAllBookings: builder.query({
          query: () => ({
            url: "/bookings", //both
            method: "GET",
          }),
        }),
        getAllBookingsUser: builder.query({
          query: () => ({
            url: "/bookings/user", //admin only
            method: "GET",
          }),
        }),
        deleteAllBookingUser: builder.mutation({
          query: (_id: string) => ({
            url: `/bookings/${_id}`, //user only
            method: "DELETE",
            body:{isDeleted: true},
          }),
        }),
      }),
})

export const {useCreateBookingMutation,useGetAllBookingsQuery,useGetAllBookingsUserQuery, useDeleteAllBookingUserMutation} = booking;
