import {configureStore} from "@reduxjs/toolkit";
import cardSlice from './cardSlice'
import {cardApiSlice} from './cardApiSlice'

const store = configureStore({
    reducer:{
        card:cardSlice,
        [cardApiSlice.reducerPath] : cardApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => (getDefaultMiddleware().concat(cardApiSlice.middleware))
});

export default store;