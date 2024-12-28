import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignUpUserObj } from "@repo/app-types";

export const userService = createApi({
  reducerPath: "userService",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL + "/users" }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (user: SignUpUserObj) => ({
        url: "/signup",
        method: "POST",
        body: user,
      }),
    }),
  }),
});
