import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardApiSlice = createApi({
    reducerPath:"cardsApi",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    endpoints: (builder) =>({
        getCards: builder.query({
            query: ()=>'/data'
        })
    })
})

export const{useGetCardsQuery} = cardApiSlice