import "./cartview.css";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";

const CartViewItem = (props) => {

    return(
        <div className="cartItemContainer">
            <img src={props.img}></img>
            <h1>{props.title.toUpperCase()}</h1>
            <p>{props.count}</p>
            <p>$ {props.price}</p>
            <p>$ {props.price*props.count}</p>
        </div>
    )

}

export default CartViewItem