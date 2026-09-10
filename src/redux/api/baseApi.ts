import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
const baseQueary = fetchBaseQuery({
    baseUrl: 'https://assignment-3-mu-seven.vercel.app/api', //    https://assignment-3-mu-seven.vercel.app/api
    credentials: 'include',
    
    prepareHeaders(headers, {getState}) {
        const token = (getState() as RootState).auth.token;
    if(token) {
        headers.set('authorization', `Bearer ${token}`)
    }
    return headers;
    },
})
;


export const baseApi= createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueary,
    tagTypes: ["Facilites"],
    endpoints: () => ({}),
});