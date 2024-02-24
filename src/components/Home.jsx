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

    return (
        <>
            <Navbar />
            <List items={data} />
        </>
    );
};

export default Home;
