import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
    return(
        <div className="detailContainer">
            <img className="detailImg" src={props.img} alt="" />
            <div className="detailDescripcion">
                <h1 className="detailPrecio">$ {props.price}</h1>
                <h1>{props.title}</h1>
                <p className="detailText">{props.description}</p>
                <ItemCount stock={props.stock}/>
            </div>
        </div>
    )
}

export default ItemDetail