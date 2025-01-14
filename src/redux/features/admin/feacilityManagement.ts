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
        }),
        invalidatesTags: ['Facilities'],
    }),
      deleteaFacility : builder.mutation({
        query: (_id: string) => ({
            url: `/facility/${_id}`,
            method:'DELETE',
            body:{isDeleted: true},
        }),
        invalidatesTags: ['Facilites'],
    }),
    
      }),
})


export const {useGetAllFacilityQuery, useAddFacilityMutation, useEditFacilityMutation ,useDeleteaFacilityMutation, useGetaFacilityQuery } = facalityManagementApi;