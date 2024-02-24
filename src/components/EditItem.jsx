import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import jsonData from "../data.json";

const EditItem = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        // Find the item with the matching ID
        const item = jsonData.find((item) => item.id === parseInt(id));
        // Populate form data with the item details
        setFormData(item);
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = jsonData.map((item) =>
            item.id === formData.id ? formData : item
        );
        console.log("Task Updated:", updatedData);
        // Navigate back to home screen
        navigate("/");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <>
            <Navbar cancel={true} />
            <div className="add-item">
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="text"
                        rows={10}
                        placeholder="Task description..."
                        name="task"
                        value={formData.task || ""}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button className="btn" type="submit">
                        Update Task
                    </button>
                </form>
            </div>
        </>
    );
};

export default EditItem;
