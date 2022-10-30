import "./cartview.css";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import RemoveButton from "./RemoveButton"

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
            <div>
                <p className="cartItemSubtitle">Cantidad:</p>
                <input onChange={handleUpdateCount} className="inputCount" type="number" defaultValue={props.count}/>
            </div>
            <div>
                <p className="cartItemSubtitle">Precio:</p>
                <p>${props.price}</p>
            </div>
            <div>
                <p className="cartItemSubtitle">Subtotal:</p>
                <p>${props.price*props.count}</p>
            </div>
            
            
            <RemoveButton id={props.id} />
        </div>
    )

}

export default CartViewItem