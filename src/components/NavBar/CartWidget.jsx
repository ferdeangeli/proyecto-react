import "./navbar.css";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const CartWidget = () => {

    const {getTotalItemCount} = useContext(cartContext)
    
    let total = getTotalItemCount()
    
    return(
        <div className="cartWidget">
            <img src="/assets/img/navbar/CartWidget.png" alt="cartwidget" />
            <p>{total}</p>
        </div>
    )
}

export default CartWidget