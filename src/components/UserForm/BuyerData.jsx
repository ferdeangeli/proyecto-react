import "./userform.css";
import { crearDocCompra } from "../../services/firebase";
import { useState } from "react";
import { cartContext } from "../../context/CartContext";
import { useContext } from "react";
import "../CartView/cartview.css";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';



const BuyerData = () => {

    const {cart, setCart} = useContext(cartContext)
    const {getTotalPrice} = useContext(cartContext)
    
    const totalPrice = getTotalPrice()

    const [customerEmail, setCustomerEmail] = useState()
    const [customerName, setCustomerName] = useState()
    const [customerSurname, setCustomerSurname] = useState()
    const [customerDni, setCustomerDni] = useState()

    const handleFinalizarCompra = (e) =>{
        e.preventDefault()
        crearDocCompra(customerEmail, customerName, customerSurname, customerDni, cart, totalPrice)
        .then(data => 
            Swal.fire(
            'Muchas gracias por su compra',
            'Su compra fue procesada',
            'success')
          ).catch(error => 
            Swal.fire(
              'Ocurrió un error',
              'La compra no pudo ser procesada, intente de nuevo',
              'error')
          ).finally(
            setCart([])
          )
    }
    
    

    if (totalPrice != 0){
        return(
            <div className="userFormContainer">
                <form action="" className="logInForm">
                    <h3 className="tituloBuyerData">DATOS DE CLIENTE</h3>
                    <input onChange={(e)=> setCustomerEmail(e.target.value)} name="email" id="asd" type="email" placeholder="Ingrese su email"/>
                    <input onChange={(e)=> setCustomerName(e.target.value)} name="name" type="text" placeholder="Ingrese su nombre/s" />
                    <input onChange={(e)=> setCustomerSurname(e.target.value)} name="surname" type="text" placeholder="Ingrese su apellido/s" />
                    <input onChange={(e)=> setCustomerDni(e.target.value)} name="dni" type="number" placeholder="Ingrese su DNI" />
                    <button onClick={handleFinalizarCompra} type="submit" className="logInButton">FINALIZAR COMPRA</button>
                </form>    
            </div>
        )
    }else{
        return(
            <div className="cartViewContainer">
                <br />
                <h1 className="tituloCartView">El carrito está vacío</h1>
                <Link to={"/"} style={{textDecoration:'none', color:'white'}}>Ir a la tienda</Link>
                <br />
            </div>
        )
    }


}

export default BuyerData