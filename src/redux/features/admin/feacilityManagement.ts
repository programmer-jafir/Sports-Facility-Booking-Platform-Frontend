import { baseApi } from "../../api/baseApi";

const facalityManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllFacility: builder.query({
          query: () => ({
            url: "/facility",
            method: "GET",
          }),
        }),
        addFacility: builder.mutation({
          query: (data) => ({
            url: "/facility",
            method: "POST",
            body: data,
          }),
        }),
      }),
})


export const {useGetAllFacilityQuery, useAddFacilityMutation} = facalityManagementApi;