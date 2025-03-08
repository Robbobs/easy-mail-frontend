import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Auth } from "../../types/Auth";
import { logout, setAuth } from "../slices/authSlice";

interface authLife {
    isAuthenticated: boolean
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:8000/api',
        credentials: 'include' 
    }),
    endpoints: (builder) => ({
        login: builder.mutation<Auth, Auth>({ 
            query: (credentials) => ({
                url: `/login`,
                method: "POST",
                body: credentials,
                headers: { "Content-Type": "application/json" },
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                queryFulfilled.then(() => dispatch(setAuth(true)))
            } 
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: `/logout`,
                method: "POST",
                headers: { "Content-Type": "application/json" },
          }),
            async onQueryStarted(_, { dispatch, queryFulfilled }){
                queryFulfilled.then(() => dispatch(logout()))
            }
        }),
        checkSession: builder.query<authLife, void>({
            query: () => `/session`,
            async onQueryStarted(_, {dispatch, queryFulfilled}){
                queryFulfilled
                    .then(({ data }) => dispatch(setAuth(data.isAuthenticated)))
                    .catch(() => dispatch(setAuth(false)));
            }
        })
    })
});

export const { useCheckSessionQuery, useLoginMutation, useLogoutMutation } = authApi;
