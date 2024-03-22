import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const boardApiSlice = createApi({
    reducerPath:"boardsApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    tagTypes:['boards'],
    endpoints: (builder) =>({
        getBoardById: builder.query({
            query:(id) =>`boards/${id}`
        }),
        createBoard: builder.mutation({
            query:(body) =>({
                url:'boards/',
                method: 'POST',
                body
            })
        })
    })
})

export const {useGetBoardByIdQuery,useCreateBoardMutation}= boardApiSlice