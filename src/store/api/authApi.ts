import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Auth } from "../../types/Auth";

export const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
    endpoints: (builder) => ({
        login: builder.mutation<Auth, Auth>({ 
            query: (credentials) => ({
                url: `/login`,
                method: "POST",
                body: credentials,
                headers: { "Content-Type": "application/json" },
            }),
        }),
        logout: builder.mutation<Auth, void>({
          query: () => ({
              url: `/logout`,
              method: "POST",
              headers: { "Content-Type": "application/json" },
          }),
      }),
    })
});

export const { useLoginMutation, useLogoutMutation } = authApi;
