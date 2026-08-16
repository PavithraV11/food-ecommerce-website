import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Add a product to the cart. If it already exists, bump the quantity.
    function addToCart(product, qty = 1) {

        setCartItems((prev) => {

            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + qty }
                        : item
                );
            }

            return [...prev, { ...product, quantity: qty }];
        });

        setIsCartOpen(true);
    }

    function removeFromCart(id) {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    }

    function increaseQty(id) {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    }

    function decreaseQty(id) {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
    }

    function clearCart() {
        setCartItems([]);
    }

    function openCart() {
        setIsCartOpen(true);
    }

    function closeCart() {
        setIsCartOpen(false);
    }

    function toggleCart() {
        setIsCartOpen((prev) => !prev);
    }

    const totalItems = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
        [cartItems]
    );

    const totalPrice = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        [cartItems]
    );

    const value = {
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
        totalItems,
        totalPrice,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
}
