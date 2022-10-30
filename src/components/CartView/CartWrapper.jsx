import CartViewItem from "./CartViewItem";
import "./cartview.css";

const CartWrapper = (props) => {
    return(
        <div className="cartWrapper">
            {props.cart.map(item =>{
                return(
                    <CartViewItem 
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        count={item.count}
                    />
                )
            })}
        </div>
    )
}

export default CartWrapper