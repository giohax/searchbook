import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const searchBookSlice = createSlice({
    name: "wishlist",
    initialState: {
        loading: false,
        bookItems: [],
        error: "",
        curPage: 0,
        maxResult: 20,
        totalItems: 0,
        keyword: "",
    },

    extraReducers: (builder) => {
        builder.addCase(fetchBookItems.pending, (state) => {
            state.curPage = 0;
            state.loading = true;
        });
        builder.addCase(fetchBookItems.fulfilled, (state, action) => {
            state.loading = false;
            state.bookItems = action.payload.items;
            state.totalItems = action.payload.totalItems;
            state.error = "";
            state.keyword = action.meta.arg;
        });
        builder.addCase(fetchBookItems.rejected, (state, action) => {
            state.loading = false;
            state.bookItems = [];
            state.error = "there was an error :(";
        });
        builder.addCase(changePageByPageNum.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(changePageByPageNum.fulfilled, (state, action) => {
            state.loading = false;
            state.bookItems = action.payload.items;
            state.curPage = action.meta.arg;
        });
        builder.addCase(changePageByPageNum.rejected, (state, action) => {
            state.loading = false;
            state.error = "there was an error :(";
        });
    },
});

export const fetchBookItems = createAsyncThunk(
    "search/fetchBookItems",
    async (arg, thunkAPI) => {
        const maxResult = thunkAPI.getState().searchBook.maxResult;
        const res = await axios(
            `https://www.googleapis.com/books/v1/volumes?q=${arg}&startIndex=0&maxResults=${maxResult}`
        );
        return res.data;
    }
);

export const changePageByPageNum = createAsyncThunk(
    "search/changePageByPageNum",
    async (switchedPage, thunkAPI) => {
        const maxResult = thunkAPI.getState().searchBook.maxResult;
        const startIndex = switchedPage * maxResult;
        const keyword = thunkAPI.getState().searchBook.keyword;
        const res = await axios(
            `https://www.googleapis.com/books/v1/volumes?q=${keyword}&startIndex=${startIndex}&maxResults=${maxResult}`
        );
        return res.data;
    }
);

export default searchBookSlice.reducer;
