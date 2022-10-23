import "./footer.css";
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";

const Footer = () => {
    return(
        <footer className="container-fluid bg-white">
            <div className="pie">
                <div className="pieLogo"><a href="#"><img src="/assets/img/navbar/logoCarbono.png" alt="logo"/></a></div>
                        
                <div className="row">
                        
                    <div className="col">
                        <ul className="pieLinksIzq">
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Impresoras 3D</a></li>
                            <li><a href="#">Filamentos</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <ul className="pieLinksDer">
                            <li><a href="https://wa.me/+542216817762/?text=Hola!%20tengo%20una%20consulta!" target="_blank"><img src="/assets/img/footer/WappLogo.png" alt="logo wapp"/> (0221)15-6817762</a></li>
                            <li><a href="https://wa.me/+542216817762/?text=Hola!%20tengo%20una%20consulta!" target="_blank"><img src="/assets/img/footer/WappLogo.png" alt="logo wapp"/> (02284)15-625238</a></li>
                            <li><a href="https://www.instagram.com/carbono.3d/?hl=es-la" target="_blank"><img src="/assets/img/footer/InstagramLogo.png" alt="logoinstag"/> carbono.3d</a></li>
                            <li><a href="https://www.facebook.com/Carbono3d-1160041694135125" target="_blank"><img src="/assets/img/footer/FacebookLogo.png" alt="logoface"/> carbono.3d</a></li>
                        </ul>
                    </div>
                        
                </div>
            </div>
        </footer>
    )
}

export default Footer