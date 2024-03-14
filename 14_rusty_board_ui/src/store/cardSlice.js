import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards:[],
}

const cardSlice = createSlice({
    name:"card",
    initialState,
    reducers:{
        moveCard:(state,action) => {
            const cardId= action.payload.id;
            const newColumn =action.payload.column;
            state.cards = state.cards.map(card => card.id === cardId?{...card,column:newColumn}:card)  
        }
    }
});

export const{moveCard} = cardSlice.actions;
export default cardSlice.reducer;