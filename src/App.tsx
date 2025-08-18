import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ShopPage from "./pages/Shop";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
