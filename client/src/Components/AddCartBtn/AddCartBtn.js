import React, { useContext } from "react"; 
import "./AddCartBtn.css"; 
import Button from "react-bootstrap/Button"; 
import CartContext from "../../utils/CartContext"; 

function AddCartBtn(props) {

    const { setCartItem, setCartCount, cartCount } = useContext(CartContext); 

    function handleClick(id) {
        setCartCount(cartCount + 1);
        setCartItem({ id });
    }

    return(
        <Button className="coffee-order-btn" variant="outline-success" onClick={()=>{handleClick(props.id)}}>Add to Cart</Button>
    )
}

export default AddCartBtn; 