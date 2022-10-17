import "./Navbar.scss";
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar">
                    <div className="logo">Book Search</div>
                    <div className="nav-links-container">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-link" to="/Wishlist">
                            Wishlist
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;
