import React, { useContext } from 'react';
import "./CheckoutBtn.css";
// import Button from 'react-bootstrap/Button';
import CartContext from '../../utils/CartContext';
import { useHistory } from "react-router-dom"; 


function CheckoutBtn() {
    
    const { handleCartBtn, cartArr } = useContext(CartContext);
    let history = useHistory(); 

    function handleClick() {
        handleCartBtn({cartArr});
        history.push("/checkout"); 
    };

    return (
        <button className="checkout-btn btn" onClick={() => { handleClick() }}>Checkout</button>
    );
}

export default CheckoutBtn; 