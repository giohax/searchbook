import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import { wishlistActions } from "../../features/wishlist/wishlistSlice";
import { useDispatch } from "react-redux";

const Wishlist = () => {
    const wishlist = useSelector((state) => state.wishlist.wishlist);
    const dispatch = useDispatch();

    const handleRemoveFromWishlist = (bookId) => {
        dispatch(wishlistActions.removeWishlistItem(bookId));
    };

    return (
        <div className="p-10 bg-amber-50 flex flex-col min-h-screen items-center">
            <div className="grid gap-5 md:grid-cols-2">
                {wishlist.length > 0 &&
                    wishlist.map(([book]) => (
                        <Card
                            key={book.id}
                            book={book}
                            handler={() => handleRemoveFromWishlist(book.id)}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Wishlist;
