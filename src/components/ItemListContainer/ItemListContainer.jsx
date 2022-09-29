import "./itemlistcontainer.css";
import { useState, useEffect } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import { getProductos } from "../../mockAPI/mockAPI";

const ItemListContainer = (props) => {

    const [listaProductos , setlistaProductos] = useState([]);

    useEffect(
        () => {
            getProductos().then((data) => {
            setlistaProductos(data)
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