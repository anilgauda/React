import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardApiSlice = createApi({
    reducerPath:"cardsApi",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    tagTypes:['Cards'],
    endpoints: (builder) =>({
        getCards: builder.query({
            query: ()=>'/data',
            providesTags:['Cards'],
        }),
        createCard: builder.mutation ({
            query:(body) => ({
                url: "/data",
                method: "POST",
                body
            }), 
            invalidatesTags:['Cards'],
        }),
        updateCard: builder.mutation({
            query: ({cardId,...body}) =>({
                url:`/data/${cardId}`,
                method: "PATCH",
                body
            }),
            invalidatesTags:["Cards"]
        }),
        deleteCard: builder.mutation({
            query:({cardId}) =>({
                url:`/data/${cardId}`,
                method: "DELETE",
            }),
            invalidatesTags:["Cards"]
        })
    })
})

export const{useGetCardsQuery, useCreateCardMutation, useUpdateCardMutation, useDeleteCardMutation} = cardApiSlice