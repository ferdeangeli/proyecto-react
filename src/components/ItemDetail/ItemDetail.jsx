import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { SpinnerCircular } from 'spinners-react';

const ItemDetail = ({id, img, category, title, brand, price, description, stock} ) => {

    let {addToCart} = useContext(cartContext)
    let {cart} = useContext(cartContext)

    const handleAddToCart = (count) => {
        const newProd = {
            id,
            img,
            category,
            title,
            brand,
            price,
            description,
            stock
        }
        
        addToCart(newProd, count)
    }

    const isInCart = cart.find(item => item.id === id)

    return(
        (title != undefined)
        ?
        
        <div className="detailContainer">
            <img className="detailImg" src={img} alt="" />
            <div className="detailDescripcion">
                <h1 className="detailPrecio">$ {price}</h1>
                <h1>{title}</h1>
                <p className="detailText">{description}</p>

                {(isInCart != undefined)
                ?
                <>
                <p className="mensajeIsInCart">El producto ya se encuentra en el carrito</p>
                <Link to="/cartview" style={{textDecoration: 'none', color: 'white'}}>Ver Carrito</Link>
                </>
                :
                <ItemCount onAddToCart={handleAddToCart} stock={stock}/>}
            </div>
        </div>
        
        :

        <div className="spinner">
            <SpinnerCircular size={54} thickness={72} speed={129} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
        
    )

}

export default ItemDetail