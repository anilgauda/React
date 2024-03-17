import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardApiSlice = createApi({
    reducerPath:"cardsApi",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    tagTypes:['Cards'],
    endpoints: (builder) =>({
        getCards: builder.query({
            query: ()=>'/data',
            providesTags:'Cards',
        }),
        createCard: builder.mutation ({
            query:(body) => ({
                url: "/data",
                method: "POST",
                body
            }),
            invalidatesTags:['Cards'],
        })
    })
})

export const{useGetCardsQuery, useCreateCardMutation} = cardApiSlice