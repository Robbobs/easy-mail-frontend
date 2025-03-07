import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Account } from "../../types/Account";

export const accountApi = createApi({
    reducerPath: 'account',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
    endpoints: (builder) => ({
        createAccount: builder.mutation<Account, Partial<Account>>({
            query: (newAccount) => ({
                url: `/account`,
                method: "POST",
                body: newAccount,
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
            }),
        }),
    })
});

export const { useCreateAccountMutation } = accountApi;
