import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";
import {Link} from "react-router-dom";
import {useContext} from 'react';
import {userContext} from '../../context/UserContext'
import CartWidget from "./CartWidget";

const NavBar = (props) => {

    let usuario = useContext(userContext)

    return (
        <div className="contenedorHeader">

            <div className="headerSuperior">
                <ul className="accesosHeader">
                    <li><a href=""><img src="/assets/img/navbar/ubicacionIcon.png" alt="ubicacionIcon"/></a></li>
                    <li><a href="https://www.instagram.com/carbono.3d/?hl=es-la" target="_blank"><img src="/assets/img/navbar/instagramIcon.png" alt="instagramIcon"/></a></li>
                    <li><a href="https://www.facebook.com/Carbono3d-1160041694135125" target="_blank"><img src="/assets/img/navbar/facebookIcon.png" alt="facebookIcon"/></a></li>
                </ul>
                <div className="loginCartWidget">
                    <Link to={"/login"} className="loginIcon">{usuario.user}</Link>

                    <Link to={"/CartView"} className="CartWidget" style={{ textDecoration: 'none' }}><CartWidget /></Link>
                </div>
            </div>

            <div className="contenedorNavBar">
                <div className="logoNavBar">
                    <img src="/assets/img/navbar/logoCarbono.png" alt="logonavbar" />
                </div>
                
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">Impresoras 3D</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">Filamentos</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">Blog</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">Contacto</Link>
                                </li>
                                {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Impresoras 3D
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Creality</a></li>
                                    <li><a className="dropdown-item" href="#">Hellbot</a></li>
                                </ul>
                                </li> */}
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Ingresar producto" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </nav>

            </div>
        </div>

    )
}   

export default NavBar