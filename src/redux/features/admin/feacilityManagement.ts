import { TResponseRedux } from "../../../types";
import { TFacility } from "../../../types/facilityManagement.type";
import { baseApi } from "../../api/baseApi";

const facalityManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllFacility: builder.query({
          query: () => ({
            url: "/facility",
            method: "GET",
          }),
          transformResponse: (response : TResponseRedux<TFacility[]>) => {
            return {
              data: response.data,
              meta: response.meta,
            };
          },
          providesTags: ['Facilites'],
        }),
        addFacility: builder.mutation({
          query: (data) => ({
            url: "/facility",
            method: "POST",
            body: data,
          }),
          invalidatesTags: ['Facilites'],
        }),
        editFacility : builder.mutation({
            
          query: (data) => {
              console.log("inside data=>", data.updatedfacility);
              return {
                  url: `/facility/${data._id}`,
                  method: 'PUT',
                  body: data.updatedfacility,   
              };
          },
           invalidatesTags: ['Facilites'],
      }),
      getaFacility : builder.query({
        query: (_id: string) => ({
            url: `/facility/${_id}`,
            method:'GET',
            invalidatesTags: ['Facilites'],
          }
      ),
    }),
      deleteaFacility : builder.mutation({
        query: (_id: string) => ({
            url: `/facility/${_id}`,
            method:'DELETE',
            body:{isDeleted: true},
        }),
        invalidatesTags: ['Facilites'],
    }),
    useGetAvailableSlotsQuery: builder.query({
      query: (date) => `available-booking?date=${date}`,
    }),

    // Check availability with custom logic
    useCheckAvailabilityMutation: builder.mutation({
      query: ({ date, facility, allSlots }) => ({
        url: `check-availability`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { date, facility, allSlots },
      }),
    }),
  //   checkAvailability: builder.mutation({
  //   //   query: ({ date, facility }) => ({
  //   //     url: `/check-availability?date=${date}&facility=${facility}`,
  //   //     method: 'GET'
  //   //   })
  //   // }),
  //   query: ({ date, facility, allSlots }) => ({
  //     url: `check-availability?date=${date}&facility=${facility}`,
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: { allSlots }, // Dynamic slot input
  //   }),
  // }),
  //   getAvailability: builder.query({
  //   //   query: ({ date, facility }) => ({
  //   //     url: `/check-availability?date=${date}&facility=${facility}`,
  //   //     method: 'GET'
  //   //   })
  //   // }),
  //   query: ({ date, facility, allSlots }) => ({
  //     url: `check-availability?date=${date}&facility=${facility}`,
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: { allSlots }, // Dynamic slot input
  //   }),
  // }),
  
  // getAvailableSlots: builder.query({
  //   query: (date) => ({
  //     url: `available-booking?date=${date}`,
  //     method: "GET"
  //   }) // Your backend endpoint
  // }),
}),
      // }),
})


export const {useGetAllFacilityQuery, useAddFacilityMutation, useEditFacilityMutation ,useDeleteaFacilityMutation, useGetaFacilityQuery, useUseGetAvailableSlotsQueryQuery, useUseCheckAvailabilityMutationMutation } = facalityManagementApi;  //,useCheckAvailabilityMutation, useGetAvailableSlotsQuery, useGetAvailabilityQuery