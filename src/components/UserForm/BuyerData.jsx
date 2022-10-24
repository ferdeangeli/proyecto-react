import "./userform.css";

const BuyerData = () => {

    const handleFinalizarCompra = () => {
        
    }

    return(
        <div className="userFormContainer">
            <form action="" className="logInForm">
                <h3 className="tituloBuyerData">DATOS DE CLIENTE</h3>
                <input className="inputEmail" id="asd" type="email" placeholder="Ingrese su email"/>
                <input type="text" placeholder="Ingrese su nombre/s" />
                <input type="text" placeholder="Ingrese su apellido/s" />
                <input type="number" placeholder="Ingrese su DNI" />
                <button onClick={handleFinalizarCompra} className="logInButton">FINALIZAR COMPRA</button>
            </form>    
        </div>
    )
}

export default BuyerData