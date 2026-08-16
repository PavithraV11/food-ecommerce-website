import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import products from "../data/products";

function Navbar() {
    const { totalItems, toggleCart } = useCart();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const [query, setQuery] = useState("");
    const [showResults, setShowResults] = useState(false);
    const boxRef = useRef(null);

    const results = query.trim()
        ? products.filter((p) => {
            const q = query.toLowerCase();

            return (
                p.title.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.restaurant.toLowerCase().includes(q)
            );
        }).slice(0, 6)
        : [];

    useEffect(() => {
        function handleClickOutside(e) {
            if (boxRef.current && !boxRef.current.contains(e.target)) {
                setShowResults(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function goToProducts(q) {
        setShowResults(false);
        navigate(`/products?q=${encodeURIComponent(q)}`);
    }

    function handleSubmit(e) {
        e.preventDefault();
        goToProducts(query);
    }

    function handleSelect(title) {
        setQuery(title);
        goToProducts(title);
    }

    return (
        <div className="nav">

            <h1 className="brand-gradient">🍔 Food Haven</h1>

            <div className="nav-links">

                {/* Home */}
                <a
                    href="#/"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/");
                    }}
                >
                    Home
                </a>

                {/* Products */}
                <a
                    href="#/products"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/products");
                    }}
                >
                    Products
                </a>

                {/* About */}
                <a
                    href="#/about"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/about");
                    }}
                >
                    About
                </a>

                {/* Reviews */}
                <a
                    href="#/reviews"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/reviews");
                    }}
                >
                    Reviews
                </a>

            </div>

            {/* Search */}
            <form
                className="search-box"
                ref={boxRef}
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    placeholder="Search food..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setShowResults(true);
                    }}
                    onFocus={() =>
                        query.trim() && setShowResults(true)
                    }
                />

                <button type="submit">🔍</button>

                {showResults && query.trim() && (
                    <div className="search-dropdown">

                        {results.length > 0 ? (
                            results.map((item) => (
                                <div
                                    key={item.id}
                                    className="search-result"
                                    onClick={() => handleSelect(item.title)}
                                >

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                    />

                                    <div className="search-result-info">

                                        <p className="search-result-title">
                                            {item.title}
                                        </p>

                                        <p className="search-result-meta">
                                            {item.category} · ₹{item.price}
                                        </p>

                                    </div>

                                </div>
                            ))
                        ) : (
                            <div className="search-no-result">
                                No dishes found
                            </div>
                        )}

                    </div>
                )}

            </form>

            {/* Theme Toggle */}
            <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle dark and light mode"
                title="Toggle dark / light mode"
            >
                {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* Cart */}
            <button
                className="cart-btn"
                onClick={toggleCart}
            >
                🛒 Cart

                {totalItems > 0 && (
                    <span className="cart-badge">
                        {totalItems}
                    </span>
                )}

            </button>

        </div>
    );
}

export default Navbar;