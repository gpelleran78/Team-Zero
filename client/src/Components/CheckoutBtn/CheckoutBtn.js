import React, { useContext } from 'react';
import "./CheckoutBtn.css";
import Button from 'react-bootstrap/Button';
import CartContext from '../../utils/CartContext';

function CheckoutBtn() {

    const { handleCartBtn, cartArr } = useContext(CartContext);

    function handleClick() {
        handleCartBtn({cartArr});
    };

    return (
        <Button variant="danger" onClick={() => { handleClick() }}>Checkout</Button>
    );
}

export default CheckoutBtn; 