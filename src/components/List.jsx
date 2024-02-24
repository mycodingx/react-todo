import React from "react";
import Item from "./Item";

function List({ items, onDelete }) {
    function handleDelete(id) {
        onDelete(id);
    }

    return (
        <div className="item-list">
            {items.map((item) => (
                <Item
                    task={item.task}
                    key={item.id}
                    id={item.id}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
}

export default List;
