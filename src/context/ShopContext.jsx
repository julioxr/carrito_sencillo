import { useState, createContext } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        console.log("agregaste al carrito");

        setCartItems((prev) => {
            return { ...prev, [itemId]: prev[itemId] + 1 };
        });
    };
    const removeToCart = (itemId) => {
        setCartItems((prev) => {
            return { ...prev, [itemId]: prev[itemId] - 1 };
        });
    };

    const contextValue = { addToCart, removeToCart, cartItems };
    console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
