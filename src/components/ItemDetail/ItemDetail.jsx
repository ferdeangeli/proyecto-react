import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext, CartContextProvider } from "../../context/CartContext";
import { userContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

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

    if(isInCart != undefined){
        return(
            <div className="detailContainer">
                <img className="detailImg" src={img} alt="" />
                <div className="detailDescripcion">
                    <h1 className="detailPrecio">$ {price}</h1>
                    <h1>{title}</h1>
                    <p className="detailText">{description}</p>
                    <p className="mensajeIsInCart">El producto ya se encuentra en el carrito</p>
                    <Link to="/cartview" style={{textDecoration: 'none', color: 'white'}}>Ver Carrito</Link>
                </div>
            </div>
        )
    }else{
        return(
            <div className="detailContainer">
                <img className="detailImg" src={img} alt="" />
                <div className="detailDescripcion">
                    <h1 className="detailPrecio">$ {price}</h1>
                    <h1>{title}</h1>
                    <p className="detailText">{description}</p>
                    <ItemCount onAddToCart={handleAddToCart} stock={stock}/>
                </div>
            </div>
        )
    }


}

export default ItemDetail