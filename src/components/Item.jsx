import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 3) + "...";
    }
    return str;
}

function Item({ task }) {
    return (
        <div className="item">
            <span>{truncateString(task, 30)}</span>
            <BsFillTrashFill className="icon" style={{ fontSize: "15px" }} />
        </div>
    );
}

export default Item;
