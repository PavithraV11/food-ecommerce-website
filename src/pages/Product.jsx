import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FoodCard from "../components/FoodCard";
import products from "../data/products";

const categories = ["All", "Fast Food", "Main Course", "Desserts", "Beverages"];

function Product() {

    const [searchParams, setSearchParams] = useSearchParams();
    const urlQuery = searchParams.get("q") || "";

    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState(urlQuery);

    useEffect(() => {
        setSearch(urlQuery);
    }, [urlQuery]);

    const filtered = products.filter((food) => {
        const matchesCategory =
            activeCategory === "All" || food.category === activeCategory;

        const q = search.trim().toLowerCase();
        const matchesSearch =
            q === "" ||
            food.title.toLowerCase().includes(q) ||
            food.category.toLowerCase().includes(q) ||
            food.restaurant.toLowerCase().includes(q);

        return matchesCategory && matchesSearch;
    });

    function handleCategoryClick(cat) {
        setActiveCategory(cat);
    }

    function clearSearch() {
        setSearch("");
        setSearchParams({});
    }

    return (
        <>

        <Navbar/>


        <section className="product-header">

            <h1>🍔 Our Menu</h1>

            <p>Explore our wide range of delicious food items</p>


            <div className="category">

                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={activeCategory === cat ? "active" : ""}
                        onClick={() => handleCategoryClick(cat)}
                    >
                        {cat}
                    </button>
                ))}

            </div>

            {search && (
                <div className="active-search-pill">
                    Showing results for "<strong>{search}</strong>"
                    <button onClick={clearSearch}>✕</button>
                </div>
            )}

        </section>



        <div className="food-container">

            {
                filtered.length > 0 ? (
                    filtered.map((food) => (

                        <FoodCard

                        key={food.id}

                        {...food}

                        />

                    ))
                ) : (
                    <p className="no-results">No dishes match your search 😔</p>
                )
            }


        </div>


        <Footer/>


        </>

    )

}


export default Product;
