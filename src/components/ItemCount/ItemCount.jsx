import { useState, useEffect } from "react";
import "./itemcount.css"

const ItemCount = ({stock, onAddToCart}) => {
    const[count, setCount] = useState(1)

    const handleRestar = () => {
        if(count>1){
            setCount(count -1)
        }
    }

    const handleSumar = () =>{
        if(count<stock){
            setCount(count + 1)
        }
    }


    return(
        <div className="buyContainer">
            <div className="itemCountContainer">
                <h6>Cantidad</h6>
                <div className="counter">
                    <button onClick={handleRestar}>-</button>
                    <strong> {count} </strong>
                    <button onClick={handleSumar}>+</button>
                </div>
                <button onClick={() => {onAddToCart(count)}} className="agregarCarrito">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount