import "./flexwrapper.css";
import ListItem from "../ListItem/ListItem";



const FlexWrapper = (props) => {
    return(
        <div className="flexWrapper">
            {props.listaProductos.map((producto) =>{
                return (
                    <ListItem 
                        key={producto.id}
                        id={producto.id}
                        img={producto.img}
                        category={producto.category}
                        title={producto.title}
                        brand={producto.brand}
                        price={producto.price} 
                        stock={producto.stock}
                    />
                );
                        
            })}
        </div>
    )
}

export default FlexWrapper