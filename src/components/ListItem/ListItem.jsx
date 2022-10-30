import "./listItem.css";
import {Link} from "react-router-dom";
import { SpinnerCircular } from 'spinners-react';

const ListItem = (props) => {
    return(
        (props.title)
        ?
        
        <Link to={`/item/${props.id}`} titulo={props.title} style={{ textDecoration: 'none' }}>
            <div className="cardContainer">
                <img className="cardImg" src={props.img} alt=""/>
                <p className="cardCategory">{props.category}</p>
                <h2 className="cardTitle">{props.brand}</h2>
                <h2 className="cardTitle">{props.title}</h2>
                <h2 className="cardPrice">$ {props.price}</h2>
            </div>
        </Link>

        :

        <div className="spinner">
            <SpinnerCircular size={54} thickness={72} speed={129} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
    )
}

export default ListItem