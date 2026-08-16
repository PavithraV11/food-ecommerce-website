import { useCart } from "../context/CartContext";

function CartDrawer() {

    const {
        cartItems,
        isCartOpen,
        closeCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
    } = useCart();

    return (
        <>
            <div
                className={`cart-overlay ${isCartOpen ? "show" : ""}`}
                onClick={closeCart}
            />

            <div className={`cart-drawer ${isCartOpen ? "open" : ""}`}>

                <div className="cart-drawer-header">
                    <h2>🛒 Your Cart</h2>
                    <button className="cart-close-btn" onClick={closeCart}>✕</button>
                </div>

                {cartItems.length === 0 ? (

                    <div className="cart-empty">
                        <p>Your cart is empty.</p>
                        <p>Add something tasty from the menu! 🍔</p>
                    </div>

                ) : (

                    <>
                        <div className="cart-drawer-items">

                            {cartItems.map((item) => (

                                <div className="cart-item" key={item.id}>

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="cart-item-image"
                                    />

                                    <div className="cart-item-details">

                                        <h4>{item.title}</h4>
                                        <p className="cart-item-restaurant">{item.restaurant}</p>
                                        <p className="cart-item-price">₹{item.price}</p>

                                        <div className="qty-control small">
                                            <button
                                                className="qty-btn"
                                                onClick={() => decreaseQty(item.id)}
                                            >
                                                −
                                            </button>

                                            <span className="qty-value">{item.quantity}</span>

                                            <button
                                                className="qty-btn"
                                                onClick={() => increaseQty(item.id)}
                                            >
                                                +
                                            </button>
                                        </div>

                                    </div>

                                    <button
                                        className="cart-item-remove"
                                        onClick={() => removeFromCart(item.id)}
                                        title="Remove item"
                                    >
                                        🗑️
                                    </button>

                                </div>

                            ))}

                        </div>

                        <div className="cart-drawer-footer">

                            <div className="cart-summary-row">
                                <span>Items</span>
                                <span>{totalItems}</span>
                            </div>

                            <div className="cart-summary-row total">
                                <span>Total</span>
                                <span>₹{totalPrice}</span>
                            </div>

                            <button className="checkout-btn">
                                Proceed to Checkout
                            </button>

                            <button className="clear-cart-btn" onClick={clearCart}>
                                Clear Cart
                            </button>

                        </div>
                    </>

                )}

            </div>
        </>
    );
}

export default CartDrawer;
