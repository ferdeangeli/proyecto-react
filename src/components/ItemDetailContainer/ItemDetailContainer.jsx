import "./itemdetailcontainer.css";
import { getProducto } from "../../services/firebase";
import {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";

const ItemDetailContainer = (props) => {
    const [detalleProducto, setDetalleProducto] = useState([])
    
    const idParam = useParams().id

    useEffect(
        () => {
            getProducto(idParam).then((data) => {
                setDetalleProducto(data)
            })
        },[]        
    )

    return(
        <div>
            <ItemDetail 
                {...detalleProducto}
            />
        </div>
    )
}

export default ItemDetailContainer