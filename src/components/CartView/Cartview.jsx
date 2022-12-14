import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import "./cartview.css";
import { Link } from "react-router-dom";
import CartWrapper from "./CartWrapper";
import { SpinnerCircular } from 'spinners-react';


const CartView = () => {
    const {cart} = useContext(cartContext)
    const {getTotalPrice} = useContext(cartContext)
    const {clearCart} = useContext(cartContext)
    const totalPrice = getTotalPrice()
    
    return(
        <div className="cartViewContainer">
            <br />
            {(totalPrice === 0)
            ?
            <>
                <br />
                <h1 className="tituloCartView">El carrito está vacío</h1>
                <Link to={"/"} style={{textDecoration:'none', color:'white'}}>Ir a la tienda</Link>
                <br />
            </>
            :
            <>
                {(totalPrice > 0)
                ?
                <>
                <h1 className="tituloCartView">CARRITO DE COMPRAS</h1>
                <CartWrapper cart={cart} />
                <strong>TOTAL: $ {totalPrice}</strong>
                <div className="cartButtonsContainer">
                    <button onClick={clearCart} className="clearCartButton">Vaciar carrito</button>
                    <Link to={"/datos"}><button className="checkoutButton">Finalizar Compra</button></Link>
                </div>
                <br />
                </>
                :
                <div className="spinner">
                    <SpinnerCircular size={54} thickness={72} speed={129} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
                </div>}
            </>
            }

        </div>
    )
    
}

export default CartView