import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext, CartContextProvider } from "../../context/CartContext";

const ItemDetail = (producto) => {

    let {addToCart} = useContext(cartContext)

    const handleAddToCart = (count) => {
        addToCart(producto, count)
    }

    return(
        <div className="detailContainer">
            <img className="detailImg" src={producto.img} alt="" />
            <div className="detailDescripcion">
                <h1 className="detailPrecio">$ {producto.price}</h1>
                <h1>{producto.title}</h1>
                <p className="detailText">{producto.description}</p>
                <ItemCount onAddToCart={handleAddToCart} stock={producto.stock}/>
            </div>
        </div>
    )
}

export default ItemDetail