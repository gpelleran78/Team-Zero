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
            
            setCartArr([...cartArr, cartItem]);
        }


    }, [cartItem]);

    useEffect(() => {
        console.log(cartArr);
    }, [cartArr]);

    useEffect(()=>{
        if (cartConfirm === true) {
            console.log("push to database trigger"); 
            //push to database cartArr, userId, and, timestamp 
        }
    }, [cartConfirm])

    function handleCartBtn() {
        //reroute to cart review page to edit or continue to process order.
        console.log("push to database here"); 
    };

    return (
        <CartContext.Provider value={{ cartArr, setCartArr, cartItem, setCartItem, cartCount, setCartCount, cartConfirm, setCartConfirm, handleCartBtn }}>
            <main className="wrapper">{props.children}</main>
        </CartContext.Provider>
    );
}


export default Wrapper; 
