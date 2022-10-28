import { createContext, useState } from "react";

const cartContext = createContext()

const CartContextProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addToCart = (newProd, count) => {
        const newCart = [...cart]
        const newCartItem = {...newProd, count}
        newCart.push(newCartItem)
        setCart(newCart);
    }
    
    const getTotalItemCount = () => {
        let newCount = 0
        cart.forEach((item)=>{
            newCount += item.count
        })

        return newCount;
    }

    const getTotalPrice = () => {
        let totalPrice = 0
        cart.forEach(item =>{
            totalPrice += item.count * item.price 
        })
        return totalPrice;
    }

    const removeFromCart = (title) => {
    }

    

    const clearCart = () => {
        setCart([])
    }
    

    return(
        <cartContext.Provider value={{cart, setCart, addToCart, removeFromCart, clearCart, getTotalItemCount, getTotalPrice}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartContextProvider, cartContext}