import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const columnApiSlice = createApi({
    reducerPath: 'columnApi',
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    tagTypes:["column"],
    endpoints: (builder) =>({
        getColumnsByBoardId: builder.query({
            query:(id) =>`columns/?board_id=${id}`
        }),
        createColumn:builder.mutation({
            query:(body) =>({
                url:'columns/',
                method:"POST",
                body
            })
        })
    })
})

export const {useGetColumnsByBoardIdQuery,useCreateColumnMutation} = columnApiSlice