import "./navbar.css";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

const CartWidget = () => {

    const {getTotalItemCount} = useContext(cartContext)
    const totalItems = getTotalItemCount()
    
    return(
        <div className="cartWidget">
            <img src="/assets/img/navbar/CartWidget.png" alt="cartwidget" />
            <p>{totalItems}</p>
        </div>
    )
}

export default CartWidget