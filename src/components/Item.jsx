import React from "react";
import {
    BsFillTrashFill,
    BsFillPencilFill,
    BsBoxArrowInRight,
} from "react-icons/bs";

function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 3) + "...";
    }
    return str;
}

function Item({ task }) {
    return (
        <div className="item">
            <span>{truncateString(task, 28)}</span>
            <div className="actions">
                <BsBoxArrowInRight className="icon" />
                <BsFillPencilFill className="icon" />
                <BsFillTrashFill className="icon" />
            </div>
        </div>
    );
}

export default Item;
