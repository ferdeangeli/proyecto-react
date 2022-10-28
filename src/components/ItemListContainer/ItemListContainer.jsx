import "./itemlistcontainer.css";
import { useState, useEffect } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import { getProductos } from "../../services/firebase";
import { SpinnerCircular } from 'spinners-react';

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

        (listaProductos.length != 0)
        ?

        <div className="ItemListContainer">
            <br />
            <h1 className="tituloItemListContainer">{props.greeting}</h1>
            <FlexWrapper listaProductos={listaProductos} />
            <br />
        </div>

        :
        <div className="spinner">
            <SpinnerCircular size={54} thickness={72} speed={129} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
    )
}

export default ItemListContainer