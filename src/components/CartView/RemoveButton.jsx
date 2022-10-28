import { useContext } from "react";
import { cartContext } from "../../context/CartContext";

const RemoveButton = (props) =>{

    const {removeFromCart} = useContext(cartContext)

    const handleRemoveItem = (e) =>{
        e.preventDefault()
        removeFromCart()
    }

    return(
        <button onClick={handleRemoveItem} className="removeItem"><img src="/assets/img/CartView/tachito.png" alt="eliminar" /></button>
    )
}

export default RemoveButton