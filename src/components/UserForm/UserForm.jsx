import "./userform.css";
import { useContext, useState } from "react";
import {userContext} from '../../context/UserContext'

const UserForm = () => {

    let nuevoUsuario = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        let inputEmail = String(document.querySelector("#asd").value)
        nuevoUsuario.setUser(inputEmail)
    }

    return(
        <div className="userFormContainer">
            <br />
            <div className="logInContainer">
                <h1 className="logInTitle">INICIAR SESIÓN</h1>
                <form action="" className="logInForm">
                    <input className="inputEmail" id="asd" type="email" placeholder="Ingrese su email"/>
                    <input type="password" placeholder="Ingrese su contraseña" />
                    <button onClick={handleSubmit} className="logInButton">INGRESAR</button>
                    <a href="#">¿Has olvidado tu contraseña?</a>
                </form>
            </div>
            <br />
        </div>
    )
}

export default UserForm