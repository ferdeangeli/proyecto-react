import "./cartview.css";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import RemoveButton from "./RemoveButton"
import ItemCount from "../ItemCount/ItemCount"

const CartViewItem = (props) => {

    const{updateCount} = useContext(cartContext)

    const handleUpdateCount = (e) => {
        e.preventDefault()
        const newCount= e.target.value
        updateCount(props.id, newCount)
    }

    return(
        <div className="cartItemContainer">
            <img src={props.img}></img>
            <h1>{props.title.toUpperCase()}</h1>
            <input onChange={handleUpdateCount} className="inputCount" type="number" defaultValue={props.count}/>
            <p>$ {props.price}</p>
            <p>$ {props.price*props.count}</p>
            <RemoveButton id={props.id} />
        </div>
    )

}

export default CartViewItem