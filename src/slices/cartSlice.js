import { createSlice } from "@reduxjs/toolkit";

import toast from "react-hot-toast";

const initialState = {
    totalItems : localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : null
}

const cartSlice = createSlice({
    name: "cart",
    initialState : initialState,
    reducers:{
        setTotalItems(state, actions){
            state.token = actions.payload
        },
    },
})

export const {setTotalItems} = cartSlice.actions;

export default  cartSlice.reducer;