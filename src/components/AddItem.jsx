import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Task Saved:", formData);
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
                        placeholder="Add your task description..."
                        name="task"
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button className="btn" type="submit">
                        Add Task
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddItem;
