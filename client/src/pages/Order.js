import React, { useContext } from "react"; 
import CartContext from "../utils/CartContext"; 
// import BevList from "../../Components/BevList/BevList"; 
// import DrinkSelect from '../BevList/containers/App/drinkSelect'; 
import DrinkSelect from "../Components/BevList/containers/App/drinkSelect";

function Order(props) {

  const { setCartItem, cartCount, setCartCount } = useContext(CartContext); 

  function pushToCart(item) {
    console.log('item added to cart');
    console.log(item);  
    setCartItem(item);
    setCartCount(cartCount + 1); 
  }
   return (
        <div className="order-component">
           {/* <BevList></BevList> */}
           <DrinkSelect pushToCart={pushToCart}/>
        </div>

    )
}

export default Order; 