import "./card.css";

const Card = (props) => {
    return(
        <div className="cardContainer">
            <img className="cardImg" src={props.img} alt="" />
            <h2 className="cardTitle">{props.title}</h2>
            <h3 className="cardBrand">{props.brand}</h3>
            <h4>{props.description}</h4>
            <h2 className="cardPrice">$ {props.price}</h2>
        </div>
    )
}

export default Card