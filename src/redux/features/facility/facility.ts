import { baseApi } from "../../api/baseApi";

const facility = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllFacility: builder.query({
          query: () => ({
            url: "/facility",
            method: "POST",
          }),
        }),
      }),
})

export const {useGetAllFacilityQuery} = facility;