import Home from "./routes/home/Home";
import Wishlist from "./routes/wishlist/Wishlist";
import Navbar from "./routes/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
