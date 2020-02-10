import React, { useState, useEffect } from "react";
import "./Wrapper.css";
import CartContext from "../../utils/CartContext";
import { useAuth0 } from "../../react-auth0-spa";
import API from "../../utils/API"; 

// import drinks from "../../drinks.json";

function Wrapper(props) {

    const [cartArr, setCartArr] = useState([]);
    const [cartItem, setCartItem] = useState(null);
    const [cartCount, setCartCount] = useState(0);
    const [cartConfirm, setCartConfirm] = useState(false);
    const [eventArr, setEventArr] = useState([]); 
    
    const { isAuthenticated, user } = useAuth0();

    
    useEffect(()=>{
        API.getEvents()
        .then(response => {
            //console.log("loading events useEffect hook in wrapper"); 
            setEventArr(response.data); 
        })
        .catch(err => console.log(err)); 
    },[])

   
    
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
    }, [cartConfirm]); 

    function handleCartBtn(array) {
        
        //reroute to cart review page to edit or continue to process order.
        console.log(`checkout button clicked ${user.email}`); 
        //push to database user email and cartArr,
        // reset cartArr, reset cartCount, reset cartConfirm
        console.log(array.cartArr); 
        
        let orderObj = {
            email: user.email, 
            orderLog: "testinglog"
        }
        API.saveOrder(orderObj)
        .then(response=>console.log(response.data))
        .catch(err=>console.log(err))
    };
 
    function loadEvents() {
        API.getEvents()
        .then(response => {
            console.log("loading events useEffect hook in wrapper"); 
            setEventArr(response.data); 
        })
        .catch(err => console.log(err)); 
    }



    return (
        <CartContext.Provider value={{ cartArr, setCartArr, cartItem, setCartItem, cartCount, setCartCount, cartConfirm, setCartConfirm, handleCartBtn, eventArr, setEventArr}}>
            <main className="wrapper">{props.children}</main>
        </CartContext.Provider>
    );
}


export default Wrapper; 
