import { useState, useEffect } from "react";
import "./itemcount.css"

const ItemCount = ({stock}) => {
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
            </div>
            
            <button className="agregarCarrito">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount