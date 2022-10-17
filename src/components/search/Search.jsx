import React from "react";
// import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import "./Search.scss";
import { useDispatch } from "react-redux";

import { fetchBookItems } from "../../features/search/searchBookSlice";

import { useSelector } from "react-redux";
import { wishlistActions } from "../../features/wishlist/wishlistSlice";

const Search = () => {
    const [userInput, setUserInput] = useState("");
    const dispatch = useDispatch();
    const bookItems = useSelector((state) => state.searchBook.bookItems);

    useEffect(() => {
        dispatch(fetchBookItems());
    }, []);

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
        <div className="search">
            <input
                onChange={handleInput}
                className="searchInput"
                type="text"
                placeholder="Search book..."
                value={userInput}
            />
            {bookItems.loading && <div>Loading...</div>}
            {!bookItems.loading &&
                userInput &&
                bookItems
                    .filter((book) =>
                        book.volumeInfo.title.toLowerCase().includes(userInput)
                    )
                    .map((book) => (
                        <Card
                            key={book.id}
                            id={book.id}
                            img={book.volumeInfo.imageLinks.thumbnail}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            publisher={book.volumeInfo.publisher}
                            action={(e) => handleAddToWishlist(e)}
                        />
                    ))}
        </div>
    );
};

export default Search;
