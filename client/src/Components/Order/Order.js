import React, { useContext } from "react"; 
import "./Order.css"; 
import CartContext from "../../utils/CartContext"; 
// import BevList from "../../Components/BevList/BevList"; 
import DrinkSelect from '../BevList/containers/App/drinkSelect'

function Order(props) {

  const { setCartItem } = useContext(CartContext); 

  function pushToCart(item) {
    console.log('item added to cart');
    console.log(item);  
    setCartItem(item); 
  }
   return (
        <div className="order-component">
           {/* <BevList></BevList> */}
           <DrinkSelect pushToCart={pushToCart}/>
        </div>

    )
}

export default Order;
