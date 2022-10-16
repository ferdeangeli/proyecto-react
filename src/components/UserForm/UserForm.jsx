import "./userform.css";

const UserForm = () => {
    return(
        <div className="userFormContainer">
            <br />
            <div className="logInContainer">
                <h1 className="logInTitle">INICIAR SESIÓN</h1>
                <form action="" className="logInForm">
                    <input type="email" placeholder="Ingrese su email"/>
                    <input type="password" placeholder="Ingrese su contraseña" />
                    <button className="logInButton">INGRESAR</button>
                    <a href="#">¿Has olvidado tu contraseña?</a>
                </form>
            </div>
            <br />
            
        </div>
    )
}

export default UserForm