import { createContext, useState } from "react";

const cartContext = createContext()

const CartContextProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addToCart = (producto, count) => {
        /* const newCart = [...producto, count];
        setCart([...cart, newCart]); */
        console.log(producto)
    }

    const removeFromCart = () => {

    }

    const clearCart = () => {

    }

    const totalItemCount = () => {

    }

    return(
        <cartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, totalItemCount}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartContextProvider, cartContext}