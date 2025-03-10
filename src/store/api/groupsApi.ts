import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PaginatedResponse } from "../../types/PaginatedResponse";
import type { Group } from "../../types/Group";

export const groupApi = createApi({
    reducerPath: 'group',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/',
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        getGroups: builder.query<PaginatedResponse<Group[]>, void>({
            query: () => `group/`
        }),
        getGroup: builder.query<Group, number>({
            query: (id) => `group/${id}`
        }),
        createGroup: builder.mutation<Group, Partial<Group>>({
            query: (group) => ({ 
                url: 'group/', 
                method: 'POST',
                body: group,
                headers: { "Content-Type": "application/json" }
            })
        })
    })
})

export const { useGetGroupQuery, useGetGroupsQuery, useCreateGroupMutation } = groupApi;