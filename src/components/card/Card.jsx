import React from "react";

const Card = ({ id, title, publisher, description, authors, img, action }) => {
    return (
        <li
            className="bg-stone-50 p-6 mt-3 mb-3 shadow-lg flex w-full sm:max-w-sm"
            onClick={action}
            id={id}
        >
            <div className="flex-1">
                <img src={img} />
            </div>
            <div className="flex-1">
                <p className="text-sm font-bold">{title ?? "N/A"}</p>
                <p className="text-sm text-gray-500">{authors ?? "N/A"}</p>
                <p className="text-sm text-gray-400">{publisher ?? "N/A"}</p>
                <button className="text-sm bg-red-500 text-white w-1/2 p-2 mt-3">
                    Details
                </button>
            </div>
        </li>
    );
};

export default Card;
