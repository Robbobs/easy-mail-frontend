import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Auth } from "../../types/Auth";

interface authLife {
    isAuthenticated: boolean
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
    endpoints: (builder) => ({
        login: builder.mutation<Auth, Auth>({ 
            query: (credentials) => ({
                url: `/login`,
                method: "POST",
                body: credentials,
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
            }),
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: `/logout`,
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
          }),
        }),
        checkSession: builder.query<authLife, void>({
            query: () => ({
                url: `/session`,
                credentials: 'include'
            }) 
        })
    })
});

export const { useCheckSessionQuery, useLoginMutation, useLogoutMutation } = authApi;
