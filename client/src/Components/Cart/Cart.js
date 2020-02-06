import React, { useContext } from 'react';
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import CheckoutBtn from "../CheckoutBtn/CheckoutBtn";
import CartContext from "../../utils/CartContext";

function Cart() {

    const { cartArr } = useContext(CartContext);

    return (
        <div className="cart-wrapper">
            {
                cartArr.map(item => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        type={item.type}
                        basePrice={item.basePrice}
                        description={item.description}
                        image={item.image}
                    />
                ))
            }
            <CheckoutBtn />
        </div>
    )
}

export default Cart; 