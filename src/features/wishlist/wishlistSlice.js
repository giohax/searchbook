import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: [],
    },
    reducers: {
        addWishlistItem: (state, action) => {
            state.wishlist.push(action.payload);
            console.log("item added!");
        },
        removeWishlistItem: (state, action) => {
            state.wishlist = state.wishlist.filter(
                ([book]) => book.id !== action.payload
            );
        },
    },
});

export default wishlistSlice.reducer;
export const wishlistActions = wishlistSlice.actions;
