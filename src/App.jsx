import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import ViewItem from "./components/ViewItem";
import EditItem from "./components/EditItem";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddItem />} />
                <Route path="/view/:id" element={<ViewItem />} />
                <Route path="/edit/:id" element={<EditItem />} />
            </Routes>
        </div>
    );
}

export default App;
