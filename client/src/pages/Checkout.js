import React from "react"; 
import { useAuth0 } from "../react-auth0-spa"; 
import API from "../utils/API"; 

function Checkout () { 

    // const { user } = useAuth0(); 
    // let email = user.email; 


    // API.saveOrder({
        
    // })

    return(
        <div className="checkout-page"> 
        <h1>Your order has been submitted and will be ready for pick up in 15 minutes!</h1>
        </div>
    )
}

export default Checkout; 