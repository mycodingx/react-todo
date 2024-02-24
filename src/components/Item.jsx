import React from "react";
import { Link } from "react-router-dom";
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

function Item({ id, task, onDelete }) {
    const handleDelete = () => {
        const isConfirmed = window.confirm(
            `Are you sure you want to delete the task "${task}"?`
        );
        if (isConfirmed) {
            onDelete(id);
        }
    };
    return (
        <div className="item">
            <span>{truncateString(task, 28)}</span>
            <div className="actions">
                <Link to={`/view/${id}`}>
                    <BsBoxArrowInRight className="icon" />
                </Link>
                <Link to={`/edit/${id}`}>
                    <BsFillPencilFill className="icon" />
                </Link>
                <BsFillTrashFill className="icon" onClick={handleDelete} />
            </div>
        </div>
    );
}

export default Item;
