import React, { useContext, useState, useEffect } from "react";
import "./Wrapper.css";
import CartContext from "../../utils/CartContext";
import drinks from "../../drinks.json";

function Wrapper(props) {

    const [cartArr, setCartArr] = useState([]);
    const [cartItem, setCartItem] = useState(null);
    const [cartCount, setCartCount] = useState(0);
    const [cartConfirm, setCartConfirm] = useState(false);

    useEffect(() => {
        if (cartItem) {
            const item = drinks.filter(function (drink) {
                return drink.id === cartItem.id;
            });
            console.log(`item to add ${item}`)
            setCartArr([...cartArr, item[0]]);
        }


    }, [cartItem]);

    useEffect(() => {
        console.log(cartArr);
    }, [cartArr]);

    function handleCartBtn() {
        //reroute to cart review page to edit or continue to process order.
        console.log("handleCartBtn function executed: process payment goes here"); 
    };

    return (
        <CartContext.Provider value={{ cartArr, setCartArr, cartItem, setCartItem, cartCount, setCartCount, cartConfirm, setCartConfirm, handleCartBtn }}>
            <main className="wrapper">{props.children}</main>
        </CartContext.Provider>
    );
}


export default Wrapper; 
