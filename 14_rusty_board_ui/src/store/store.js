import {configureStore} from "@reduxjs/toolkit";
import cardSlice from './cardSlice'
import {cardApiSlice} from './cardApiSlice'
import { boardApiSlice } from "./boardApiSlice";
import { columnApiSlice } from "./columnApiSlice";

const store = configureStore({
    reducer:{
        card:cardSlice,
        [cardApiSlice.reducerPath] : cardApiSlice.reducer,
        [boardApiSlice.reducerPath] : boardApiSlice.reducer,
        [columnApiSlice.reducerPath] : columnApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => (getDefaultMiddleware().concat(cardApiSlice.middleware).concat(boardApiSlice.middleware).concat(columnApiSlice.middleware))
});

export default store;