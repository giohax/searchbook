import React from "react";

import { useEffect, useState, useRef } from "react";
import Card from "../card/Card";

import { useDispatch } from "react-redux";

import { fetchBookItems } from "../../features/search/searchBookSlice";

import { useSelector } from "react-redux";
import { wishlistActions } from "../../features/wishlist/wishlistSlice";
import LoadingGif from "../../assets/loading.gif";

import Pagination from "../pagination/Pagination";

const Search = () => {
    const [userInput, setUserInput] = useState("");
    const dispatch = useDispatch();
    const bookItems = useSelector((state) => state.searchBook.bookItems);
    const loading = useSelector((state) => state.searchBook.loading);
    const timerID = useRef(null);

    useEffect(() => {
        clearTimeout(timerID.current);
        if (userInput.trim() !== "") {
            timerID.current = setTimeout(() => {
                dispatch(fetchBookItems(userInput));
            }, 2000);
        }
    }, [userInput]);

    const handleInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleAddToWishlist = (e) => {
        const book = bookItems.filter((book) => book.id === e.currentTarget.id);
        dispatch(wishlistActions.addWishlistItem(book));
    };

    return (
        <div className="p-10 bg-amber-50 flex flex-col min-h-screen items-center">
            <input
                onChange={handleInput}
                className="flex border border-gray-200 shadow-lg px-6 py-3 focus:outline-none w-full bg-amber-50 mb-5 w-full sm:max-w-sm"
                type="text"
                placeholder="Search book..."
                value={userInput}
            />
            <Pagination>
                <div className="grid gap-5 md:grid-cols-2">
                    {loading && (
                        <img
                            className="col-span-2"
                            src={LoadingGif}
                            alt="Loading..."
                        />
                    )}

                    {!loading &&
                        userInput &&
                        bookItems.map((book) => (
                            <Card
                                key={book.id}
                                book={book}
                                handler={(e) => handleAddToWishlist(e)}
                            />
                        ))}
                </div>
            </Pagination>
        </div>
    );
};

export default Search;
