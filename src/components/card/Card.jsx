import React from "react";
import "./Card.scss";

import { useDispatch } from "react-redux";

const Card = ({ id, title, publisher, description, authors, img, action }) => {
    return (
        <li className="card" onClick={action} id={id}>
            <div>
                <div>
                    <img src={img} />
                </div>
                <div>
                    <p>
                        <b>Title:</b> {title ?? "N/A"}
                    </p>
                    <p>
                        <b>Authors: </b>
                        {authors ?? "N/A"}
                    </p>
                    <p>
                        <b>Publisher:</b> {publisher ?? "N/A"}
                    </p>
                </div>
            </div>
            <div>
                <p>
                    <b>Description:</b> {description ?? "N/A"}
                </p>
            </div>
        </li>
    );
};

export default Card;
