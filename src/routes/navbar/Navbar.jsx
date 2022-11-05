import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <>
            <header className="bg-amber-100 select-none">
                <div className="flex w-full p-6 items-center justify-between">
                    <Link className="font-bold text-indigo-900 text-lg" to="/">
                        SEARCHBOOK
                    </Link>

                    <div className="flex space-x-3 text-sm my-auto">
                        <Link className="font-bold text-indigo-900" to="/">
                            HOME
                        </Link>
                        <Link
                            className="font-bold text-indigo-900"
                            to="/Wishlist"
                        >
                            WISHLIST
                        </Link>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default Navbar;
