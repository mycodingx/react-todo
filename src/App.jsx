import { useEffect, useState } from "react";
import "./App.css";
import Item from "./components/Item";
import Navbar from "./components/Navbar";
import jsonData from "./data.json";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Set the data from the imported JSON file
        setData(jsonData);
    }, []);

    return (
        <div className="container">
            <Navbar />
            <div className="item-list">
                {data.map((item) => (
                    <Item task={item.task} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default App;
