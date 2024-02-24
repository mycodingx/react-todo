import React from "react";
import { Link } from "react-router-dom";
import {
    BsFillPlusCircleFill,
    BsFillArrowLeftCircleFill,
} from "react-icons/bs";

function Navbar({ cancel }) {
    return (
        <div className="navbar">
            <Link to="/">TODO</Link>
            {cancel ? (
                <Link to="/">
                    <BsFillArrowLeftCircleFill className="icon" />
                </Link>
            ) : (
                <Link to="add">
                    <BsFillPlusCircleFill className="icon" />
                </Link>
            )}
        </div>
    );
}

export default Navbar;
