import "./itemlistcontainer.css";
import { useState, useEffect } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import { getProductos } from "../../services/firebase";

const ItemListContainer = (props) => {

    const [listaProductos , setlistaProductos] = useState([]);

    useEffect(
        () => {
            getProductos().then((resultado) => {
            setlistaProductos(resultado)
            });
        },[]
    )

    return(
        <div className="ItemListContainer">
            <br />
            <h1 className="tituloItemListContainer">{props.greeting}</h1>
            <FlexWrapper listaProductos={listaProductos} />
            <br />
        </div>
    )
}

export default ItemListContainer