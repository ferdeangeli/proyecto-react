import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";

const NavBar = (props) => {
    return (
        <div className="contenedorHeader">

            <div className="headerSuperior">
                <ul className="accesosHeader">
                    <li><a href=""><img src="/assets/img/navbar/ubicacionIcon.png" alt="ubicacionIcon"/></a></li>
                    <li><a href="https://www.instagram.com/carbono.3d/?hl=es-la" target="_blank"><img src="/assets/img/navbar/instagramIcon.png" alt="instagramcon"/></a></li>
                    <li><a href="https://www.facebook.com/Carbono3d-1160041694135125" target="_blank"><img src="/assets/img/navbar/facebookIcon.png" alt="facebookIcon"/></a></li>
                </ul>
                <div className="loginCartWidget">
                    <a className="loginIcon"><img src="/assets/img/navbar/loginIcon.png" alt="loginIcon" /></a>
                    <a className="CartWidget"><img src="/assets/img/navbar/CartWidget.png" alt="cartwidget" /></a>
                </div>
            </div>

            <div className="contenedorNavBar">
                <div className="logoNavBar">
                    <img src="/assets/img/navbar/logoCarbono.png" alt="logonavbar" />
                </div>
                {/* <nav className="menuNavBar">
                    <ul className="listaLinks">
                        <li className="linkNavBar"><a href="">Inicio</a></li>
                        <li className="linkNavBar"><a href="">Impresoras 3D</a></li>
                        <li className="linkNavBar"><a href="">Filamentos</a></li>
                        <li className="linkNavBar"><a href="">Blog</a></li>
                        <li className="linkNavBar"><a href="">Contacto</a></li>
                    </ul>
                </nav> */}
                
                <nav class="navbar navbar-expand-lg bg-white">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Impresoras 3D</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Filamentos</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Blog</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Contacto</a>
                                </li>
                                {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Impresoras 3D
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Creality</a></li>
                                    <li><a class="dropdown-item" href="#">Hellbot</a></li>
                                </ul>
                                </li> */}
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Ingresar producto" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </nav>

            </div>
        </div>

    )
}   

export default NavBar