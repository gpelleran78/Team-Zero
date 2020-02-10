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
    const [eventArr, setEventArr] = useState([]);
    const [cartConfirm, setCartConfirm] = useState(false);

    const { isAuthenticated, user } = useAuth0();
console.log("here comes the user")
console.log(user)
    useEffect(() => {
        API.getEvents()
            .then(response => {
                //console.log("loading events useEffect hook in wrapper"); 
                setEventArr(response.data);
            })
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        if (cartConfirm === true) {
            console.log("reset all states trigger"); 
            setCartCount(0); 
        }
    }, [cartConfirm])


    useEffect(() => {
        if (cartItem) { 
            setCartArr([...cartArr, cartItem]);
        }


    }, [cartItem]);

    useEffect(() => {
        console.log(cartArr);

    }, [cartArr]);


    function handleCartBtn(array) {

        //reroute to cart review page to edit or continue to process order.
        console.log(`checkout button clicked ${user.email}`);
        //push to database user email and cartArr,
        // reset cartArr, reset cartCount, reset cartConfirm
        console.log(array.cartArr);

        let loopArr = array.cartArr;

        loopArr.forEach(item => {
            let orderObj = {
                email: user.email,
                drinktype: item.drinktype,
                temp: item.temp,
                size: item.size,
                extraShots: item.extraShots,
                milk: item.milk,
                vanilla: item.vanilla,
                hazlenut: item.hazlenut,
                mocha: item.mocha,
                whiteMocha: item.whiteMocha,
                SFVanilla: item.SFVanilla,
                notes: item.notes
            };
            API.saveOrder(orderObj)
                .then(response => console.log(response.data))
                .catch(err => console.log(err));
        })
        setCartArr([]); 
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
        <CartContext.Provider value={{ cartArr, setCartArr, cartItem, setCartItem, cartCount, setCartCount, handleCartBtn, eventArr, setEventArr, cartConfirm, setCartConfirm }}>
            <main className="wrapper">{props.children}</main>
        </CartContext.Provider>
    );
}


export default Wrapper;


// email: user.email,
//             drinktype: "test",
//             temp: "",
//             size: "",
//             extraShots: 0,
//             milk: "",
//             vanilla: "false",
//             hazlenut: "false",
//             mocha: "false",
//             whiteMocha: "false",
//             SFVanilla: "false",
//             notes: ""