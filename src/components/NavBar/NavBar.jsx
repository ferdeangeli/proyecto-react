import logoNavBar from "./logoCarbono.png";
import ubicacionIcon from "./ubicacionIcon.png";
import instagramIcon from "./instagramIcon.png";
import facebookIcon from "./facebookIcon.png";
import CartWidget from "./CartWidget.png";
import loginIcon from "./loginIcon.png";
import "./navbar.css";

const NavBar = (props) => {
    return (
        <div className="contenedorHeader">

            <div className="headerSuperior">
                <ul className="accesosHeader">
                    <li><a href=""><img src={ubicacionIcon} alt="ubicacionIcon"/></a></li>
                    <li><a href=""><img src={instagramIcon} alt="ubicacionIcon"/></a></li>
                    <li><a href=""><img src={facebookIcon} alt="ubicacionIcon"/></a></li>
                </ul>
                <div className="loginCartWidget">
                    <a className="loginIcon"><img src={loginIcon} alt="loginIcon" /></a>
                    <a className="CartWidget"><img src={CartWidget} alt="cartwidget" /></a>
                </div>
            </div>

            <div className="contenedorNavBar">
                <div className="logoNavBar">
                    <img src={logoNavBar} alt="logonavbar" />
                </div>
                <nav className="menuNavBar">
                    <ul className="listaLinks">
                        <li className="linkNavBar"><a href="">Inicio</a></li>
                        <li className="linkNavBar"><a href="">Impresoras 3D</a></li>
                        <li className="linkNavBar"><a href="">Filamentos</a></li>
                        <li className="linkNavBar"><a href="">Blog</a></li>
                        <li className="linkNavBar"><a href="">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}   

export default NavBar