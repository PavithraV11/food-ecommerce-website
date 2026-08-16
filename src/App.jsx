import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Reviews from "./pages/Reviews";
import CartDrawer from "./components/CartDrawer";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>

      <CartDrawer />
    </HashRouter>
  );
}

export default App;