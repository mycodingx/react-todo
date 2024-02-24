import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import jsonData from "../data.json";

const ViewItem = () => {
    const { id } = useParams();
    const item = jsonData.find((item) => item.id === parseInt(id));

    return (
        <>
            <Navbar cancel={true} />
            <div className="mt-70 p-10">
                {item ? (
                    <p className="text-center">{item.task}</p>
                ) : (
                    <p className="text-center">Task not found..!!</p>
                )}
            </div>
        </>
    );
};

export default ViewItem;
