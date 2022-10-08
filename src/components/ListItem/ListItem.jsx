import "./listItem.css";
import {Link} from "react-router-dom";

const ListItem = (props) => {
    return(
        <Link to={`/item/${props.id}`} titulo={props.title} style={{ textDecoration: 'none' }}>
            <div className="cardContainer">
                <img className="cardImg" src={props.img} alt=""/>
                <p className="cardCategory">{props.category}</p>
                <h2 className="cardTitle">{props.brand}</h2>
                <h2 className="cardTitle">{props.title}</h2>
                <h2 className="cardPrice">$ {props.price}</h2>
            </div>
        </Link>
    )
}

export default ListItem