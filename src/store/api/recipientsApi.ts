import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Recipient } from "../../types/Recipients";

export const recipientsApi = createApi({
    reducerPath: 'recipients',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:3000' }),
    endpoints: (builder) => ({
        getRecipients: builder.query<Recipient, number>({
            query: (userId) => `/recipients?userId=${userId}`
        })
    })
})

export const { useGetRecipientsQuery } = recipientsApi;