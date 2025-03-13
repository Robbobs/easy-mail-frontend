import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Auth } from "../../types/Auth";

interface authLife {
    isAuthenticated: boolean
}

export const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:8000/api/',
        credentials: 'include' 
    }),
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        login: builder.mutation<Partial<Auth>, Auth>({ 
            query: (credentials) => ({
                url: `login/`,
                method: "POST",
                body: credentials,
                headers: { "Content-Type": "application/json" },
            }),
            invalidatesTags: [{type: "Auth"}]
        }),

        logout: builder.mutation<void, void>({
            query: () => ({
                url: `logout/`,
                method: "POST",
                headers: { "Content-Type": "application/json" },
            }),
            invalidatesTags: [{type: "Auth"}]
        }),

        checkSession: builder.query<authLife, void>({
            query: () => `session/`,
            providesTags: [{type: "Auth"}]
        })
    })
});

export const { useCheckSessionQuery, useLoginMutation, useLogoutMutation } = authApi;
