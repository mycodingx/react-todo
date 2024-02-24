import React from "react";
import Item from "./Item";

function List({ items }) {
    return (
        <div className="item-list">
            {items.map((item) => (
                <Item task={item.task} key={item.id} id={item.id} />
            ))}
        </div>
    );
}

export default List;
