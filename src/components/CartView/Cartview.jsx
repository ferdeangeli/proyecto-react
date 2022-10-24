import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import CartViewItem from "./CartViewItem";
import "./cartview.css";
import { Link } from "react-router-dom";
import CartWrapper from "./CartWrapper";

const CartView = () => {
    const {cart} = useContext(cartContext)
    const {getTotalPrice} = useContext(cartContext)
    const totalPrice = getTotalPrice()

    if(totalPrice === 0){
        return(
            <div className="cartViewContainer">
                <br />
                <h1 className="tituloCartView">El carrito está vacío</h1>
                <Link to={"/"} style={{textDecoration:'none', color:'white'}}>Ir a la tienda</Link>
                <br />
            </div>
        )
    }else{
        return(
            <div className="cartViewContainer">
                <br />
                <h1 className="tituloCartView">CARRITO DE COMPRAS</h1>
                <div className="titulosTabla">
                    <p></p>
                    <h3>Item</h3>
                    <h3>Cantidad</h3>
                    <h3>Precio</h3>
                    <h3>Subtotal</h3>
                </div>
                <CartWrapper cart={cart} />
                <strong>TOTAL: $ {totalPrice}</strong>
                <Link to={"/datos"}><button className="finalizarCompra">Finalizar Compra</button></Link>
                <br />
            </div>
        )
    }
}

export default CartView