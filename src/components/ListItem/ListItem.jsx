import "./listItem.css";

const ListItem = (props) => {
    return(
        <div className="cardContainer">
            <img className="cardImg" src={props.img} alt=""/>
            <p className="cardCategory">{props.category}</p>
            <h2 className="cardTitle">{props.brand}</h2>
            <h2 className="cardTitle">{props.title}</h2>
            <h2 className="cardPrice">$ {props.price}</h2>
        </div>
    )
}

export default ListItem