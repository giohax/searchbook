import React from "react";

const Card = ({ book, handler }) => {
    const id = book?.id;
    const img =
        book?.volumeInfo?.imageLinks?.thumbnail ??
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png";
    const title = book?.volumeInfo?.title ?? "N/A";
    const authors = book?.volumeInfo?.authors ?? "N/A";
    const description = book?.volumeInfo?.description ?? "N/A";
    const publisher = book?.volumeInfo?.publisher ?? "N/A";

    return (
        <li
            className="bg-stone-50 p-6 shadow-lg flex w-full sm:max-w-sm hover:scale-105 transition-transform duration-200 cursor-pointer  select-none active:brightness-110 active:text-amber-600"
            onClick={handler}
            id={id}
        >
            <div className="flex-1">
                <img src={img} />
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <p className="text-sm font-bold">{title}</p>
                    <p className="text-sm text-gray-500">{authors}</p>
                    <p className="text-sm text-gray-400">{publisher}</p>
                </div>
                <button className="text-xs bg-amber-500 text-white p-2 mt-3">
                    ADD TO WISHLIST
                </button>
            </div>
        </li>
    );
};

export default Card;
