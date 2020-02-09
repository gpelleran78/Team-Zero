import React, { useContext } from 'react';
import "./CheckoutBtn.css";
// import Button from 'react-bootstrap/Button';
import CartContext from '../../utils/CartContext';

function CheckoutBtn() {

    const { handleCartBtn, cartArr } = useContext(CartContext);

    function handleClick() {
        handleCartBtn({cartArr});
    };

    return (
        <button className="checkout-btn btn" onClick={() => { handleClick() }}>Checkout</button>
    );
}

export default CheckoutBtn; 