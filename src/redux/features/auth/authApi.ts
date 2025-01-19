import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    sineup: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/auth/:id",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useSineupMutation, useGetUserQuery  } = authApi;
