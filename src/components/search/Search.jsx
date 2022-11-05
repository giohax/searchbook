import React from "react";

import { useEffect, useState } from "react";
import Card from "../card/Card";

import { useDispatch } from "react-redux";

import { fetchBookItems } from "../../features/search/searchBookSlice";

import { useSelector } from "react-redux";
import { wishlistActions } from "../../features/wishlist/wishlistSlice";
import LoadingGif from "../../assets/loading.gif";
// import Pagination from "../pagination/Pagination";
import debounce from "../../scripts/debounce";

const Search = () => {
    const [userInput, setUserInput] = useState("");
    const dispatch = useDispatch();
    const bookItems = useSelector((state) => state.searchBook.bookItems);
    const searchBook = useSelector((state) => state.searchBook);
    const debouncedFetch = debounce(fetchBookItems, 1000);
    let timerID;

    useEffect(() => {
        // dispatch(debouncedFetch(userInput));
        clearTimeout(timerID);
        timerID = setTimeout(() => {
            console.log("fetching...");
            dispatch(fetchBookItems(userInput));
        }, 2000);
    }, [userInput]);

    const handleInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleAddToWishlist = (e) => {
        const [{ volumeInfo }] = bookItems.filter(
            (book) => book.id === e.currentTarget.id
        );
        const book = {
            id: e.currentTarget.id,
            img: volumeInfo.imageLinks.thumbnail,
            title: volumeInfo.title,
            authors: volumeInfo.authors,
            description: volumeInfo.description,
            publisher: volumeInfo.publisher,
        };
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
            <div className="grid gap-5 md:grid-cols-2">
                {searchBook.loading && (
                    <img src={LoadingGif} alt="Loading..." />
                )}
                {/* <Pagination> */}
                {!searchBook.loading &&
                    userInput &&
                    bookItems
                        .filter((book) =>
                            book.volumeInfo.title
                                .toLowerCase()
                                .includes(userInput)
                        )
                        .map((book) => (
                            <Card
                                key={book.id}
                                book={book}
                                handler={(e) => handleAddToWishlist(e)}
                            />
                        ))}
                {/* </Pagination> */}
            </div>
        </div>
    );
};

export default Search;
