import "./cartview.css";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import RemoveButton from "./RemoveButton"
import ItemCount from "../ItemCount/ItemCount"

const CartViewItem = (props) => {

    return(
        <div className="cartItemContainer">
            <img src={props.img}></img>
            <h1>{props.title.toUpperCase()}</h1>
            <input className="inputCount" type="number" defaultValue={props.count}/>
            <p>$ {props.price}</p>
            <p>$ {props.price*props.count}</p>
            <RemoveButton title={props.title}  />
        </div>
    )

}

export default CartViewItem