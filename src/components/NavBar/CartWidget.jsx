import "./navbar.css";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";

const CartWidget = () => {

    const cart = useContext(cartContext).cart

    return(
        <div className="cartWidget">
            <img src="/assets/img/navbar/CartWidget.png" alt="cartwidget" />
            <p>122</p>
        </div>
    )
}

export default CartWidget