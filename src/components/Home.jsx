import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import List from "./List";
import jsonData from "../data.json";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Set the data from the imported JSON file
        setData(jsonData);
    }, []);

    function handleDelete(id) {
        const updatedTasks = data.filter((task) => task.id !== id);
        setData(updatedTasks);
        console.log("Updated data:", updatedTasks);
    }

    return (
        <>
            <Navbar />
            <List items={data} onDelete={handleDelete} />
        </>
    );
};

export default Home;
