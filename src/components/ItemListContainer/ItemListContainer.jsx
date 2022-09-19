import "./itemlistcontainer.css";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

const ItemListContainer = (props) => {
    return(
        <div className="ItemListContainer">
            <h1 className="tituloItemListContainer">{props.greeting}</h1>
            <div>
                <FlexWrapper />
            </div>
        </div>
    )
}

export default ItemListContainer