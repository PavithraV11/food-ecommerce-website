import { useCart } from "../context/CartContext";

function FoodCard({id, title, restaurant, price, rating, category, image}) {

    const { cartItems, addToCart, increaseQty, decreaseQty } = useCart();

    const cartItem = cartItems.find((item) => item.id === id);

    return (

        <div className="card">

            <img
                src={image}
                alt={title}
                className="food-image"
            />

            <h2>{title}</h2>

            <p className="author">
                {restaurant}
            </p>

            <p className="category">
                {category}
            </p>

            <h3>
                ₹{price}
            </h3>

            <p>
                ⭐ {rating}
            </p>

            {cartItem ? (

                <div className="qty-control">

                    <button
                        className="qty-btn"
                        onClick={() => decreaseQty(id)}
                    >
                        −
                    </button>

                    <span className="qty-value">{cartItem.quantity}</span>

                    <button
                        className="qty-btn"
                        onClick={() => increaseQty(id)}
                    >
                        +
                    </button>

                </div>

            ) : (

                <button
                    onClick={() => addToCart({ id, title, restaurant, price, rating, category, image })}
                >
                    Add to Cart 🛒
                </button>

            )}

        </div>

    );
}

export default FoodCard;
