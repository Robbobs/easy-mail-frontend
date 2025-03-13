import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PaginatedResponse } from "../../types/PaginatedResponse";
import type { Recipient } from "../../types/Recipient";

export const recipientsApi = createApi({
    reducerPath: 'recipients',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:8000/api/',
        credentials: 'include' 
    }),
    tagTypes: ['Recipients'],
    endpoints: (builder) => ({
        getRecipients: builder.query<PaginatedResponse<Recipient>, void>({
            query: () =>  `recipient/`,
            providesTags: [{type: "Recipients"}]
        }), 

        getRecipient: builder.query<Recipient, number>({
            query: (id) => `recipient/${id}/`,
            providesTags: [{type: "Recipients"}]
        }),
        
        createRecipient: builder.mutation<Recipient, Partial<Recipient>>({
            query: (recipient) => ({
                url: 'recipient/',
                method: 'POST',
                body: recipient,
                headers: { "Content-Type": "application/json" },
            }),
            invalidatesTags: [{type: "Recipients"}]
        })
    }),
});

export const { useGetRecipientQuery, useGetRecipientsQuery, useCreateRecipientMutation } = recipientsApi;
