import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const searchBookSlice = createSlice({
    name: "wishlist",
    initialState: {
        loading: false,
        bookItems: [],
        error: "",
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBookItems.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchBookItems.fulfilled, (state, action) => {
            state.loading = false;
            state.bookItems = action.payload;
            state.error = "";
        });
        builder.addCase(fetchBookItems.rejected, (state, action) => {
            state.loading = false;
            state.bookItems = [];
            state.error = "there was an error :(";
        });
    },
});

export const fetchBookItems = createAsyncThunk("search/fetchBookItems", () => {
    return axios
        .get(
            "https://www.googleapis.com/books/v1/volumes?q=bookname&startIndex=0&maxResults=20"
        )
        .then((response) => response.data.items);
});

export default searchBookSlice.reducer;
