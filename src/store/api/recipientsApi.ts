import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PaginatedResponse } from "../../types/PaginatedResponse";
import type { Recipient } from "../../types/Recipient";

export const recipientsApi = createApi({
    reducerPath: 'recipients',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:8000/api',
        credentials: 'include' 
    }),
    endpoints: (builder) => ({
        getRecipients: builder.query<PaginatedResponse<Recipient[]>, void>({
            query: () =>  `/recipient` 
        }),
        getRecipient: builder.query<Recipient, number>({
            query: (id) => `/recipient/${id}`         
        })
    }),
});

export const { useGetRecipientQuery, useGetRecipientsQuery } = recipientsApi;
