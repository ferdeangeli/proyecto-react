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
    

    //Obtener la cantidad total de items del carrito

    const getTotalItemCount = () => {
        let newCount = 0
        const cartCount = [...cart]
        cartCount.forEach((item)=>{
            newCount += Number(item.count)
        })

        return newCount;
    }


    //Obtener el precio total del carrito

    const getTotalPrice = () => {
        let totalPrice = 0
        cart.forEach(item =>{
            totalPrice += item.count * item.price 
        })
        return totalPrice;
    }


    //Eliminar del carrito un item

    const removeFromCart = (id) => {
        const indexDelete = cart.findIndex(item => item.id === id)
        const newCart = [...cart]
        newCart.splice(indexDelete,1)
        setCart(newCart);   
    }


    //Actualizar cantidad en carrito

    const updateCount = (id, newCount) => {
        const indexActualizarCount = cart.findIndex(item => item.id === id)
        const newCart = [...cart]
        const updateProduct = newCart[indexActualizarCount]
        updateProduct.count = newCount
        newCart.splice(indexActualizarCount,1)
        newCart.push(updateProduct)
        setCart(newCart)   
    }

    

    const clearCart = () => {
        setCart([])
    }
    

    return(
        <cartContext.Provider value={{cart, setCart, addToCart, removeFromCart, clearCart, updateCount, getTotalItemCount, getTotalPrice}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartContextProvider, cartContext}