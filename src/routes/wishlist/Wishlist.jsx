import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import { wishlistActions } from "../../features/wishlist/wishlistSlice";
import { useDispatch } from "react-redux";
import "./Wishlist.scss";

const Wishlist = () => {
    const wishlist = useSelector((state) => state.wishlist.wishlist);
    const dispatch = useDispatch();

    const handleRemoveToWishlist = (e) => {
        dispatch(wishlistActions.removeWishlistItem(e.currentTarget.id));
    };

    return (
        <div className="wishlist">
            <h2>Wishlist Items </h2>
            {wishlist &&
                wishlist.map((book) => (
                    <Card
                        id={book.id}
                        key={book.id}
                        img={book.img}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        publisher={book.publisher}
                        action={(e) => handleRemoveToWishlist(e)}
                    />
                ))}
        </div>
    );
};

export default Wishlist;
