import { configureStore } from "@reduxjs/toolkit";
import searchBookReducer from "../features/search/searchBookSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";

const store = configureStore({
    reducer: {
        searchBook: searchBookReducer,
        wishlist: wishlistReducer,
    },
});

export default store;
