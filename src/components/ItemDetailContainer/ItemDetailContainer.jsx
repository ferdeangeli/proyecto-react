import "./itemdetailcontainer.css";
import { getProducto } from "../../mockAPI/mockAPI";
import {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";

const ItemDetailContainer = (props) => {
    const [detalleProducto, setDetalleProducto] = useState([])
    
    const id = useParams().id

    useEffect(
        () => {
            getProducto(id).then((data) => {
                setDetalleProducto(data)
            })
        },[]        
    )

    return(
        <div>
            <ItemDetail 
                key={detalleProducto.id}
                id={detalleProducto.id}
                img={detalleProducto.img}
                category={detalleProducto.category}
                title={detalleProducto.title}
                brand={detalleProducto.brand}
                price={detalleProducto.price} 
                stock={detalleProducto.stock}
                description={detalleProducto.description}
            />
        </div>
    )
}

export default ItemDetailContainer