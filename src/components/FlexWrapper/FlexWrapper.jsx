import "./flexwrapper.css";
import Card from "../Card/Card.jsx"
import ender3v2 from "./img-productos/ender3v2.jpg"
import halotone from "./img-productos/halotone.png"
import hidra220 from "./img-productos/hidra220.jpg"
import magnase from "./img-productos/magnase.jpg"

const FlexWrapper = () => {
    return(
        <div className="flexWrapper">
            <Card 
                img={ender3v2}
                title="Ender 3 V2"
                brand="Creality"
                description=""
                price="73900"            
            />

            <Card 
                img={halotone}
                title="Halot One"
                brand="Creality"
                description=""
                price="84500"            
            />

            <Card 
                img={hidra220}
                title="Hidra 220"
                brand="Hellbot"
                description=""
                price="104290"            
            />

            <Card 
                img={magnase}
                title="Magna SE"
                brand="Hellbot"
                description=""
                price="65900"            
            />

            
        </div>
    )
}

export default FlexWrapper