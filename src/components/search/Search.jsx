import React from "react";

import { useEffect, useState } from "react";
import Card from "../card/Card";

import { useDispatch } from "react-redux";

import { fetchBookItems } from "../../features/search/searchBookSlice";

import { useSelector } from "react-redux";
import { wishlistActions } from "../../features/wishlist/wishlistSlice";
import LoadingGif from "../../assets/loading.gif";
// import Pagination from "../pagination/Pagination";

const Search = () => {
    const [userInput, setUserInput] = useState("");
    const dispatch = useDispatch();
    const bookItems = useSelector((state) => state.searchBook.bookItems);
    const searchBook = useSelector((state) => state.searchBook);

    useEffect(() => {
        dispatch(fetchBookItems(userInput));
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
        <div className="p-10 bg-amber-50 flex flex-col h-full items-center">
            <input
                onChange={handleInput}
                className="flex border border-gray-200 shadow-lg px-6 py-3 focus:outline-none w-full bg-amber-50 mb-5 w-full sm:max-w-sm"
                type="text"
                placeholder="Search book..."
                value={userInput}
            />
            {searchBook.loading && <img src={LoadingGif} alt="Loading..." />}
            {/* <Pagination> */}
            {!searchBook.loading &&
                userInput &&
                bookItems
                    .filter((book) =>
                        book.volumeInfo.title.toLowerCase().includes(userInput)
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
    );
};

export default Search;
