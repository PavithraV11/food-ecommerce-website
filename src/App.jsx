import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Reviews from "./pages/Reviews";
import CartDrawer from "./components/CartDrawer";

function App() {
  return (
    <BrowserRouter basename="/food-ecommerce-website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>

      <CartDrawer />
    </BrowserRouter>
  );
}

export default App;