import React, { useContext } from "react"; 
import { useAuth0 } from "../react-auth0-spa"; 
import API from "../utils/API"; 


const MyOrders = () => {

    const { user } = useAuth0(); 
    let email = user.email; 
    console.log(`user email ${email}`); 

    API.getOrder(email)
    .then(response=>console.log(response.data))
    .catch(err=>console.log(err)); 

    return(
        <div className="my-orders-page">
            my orders page
    
        </div>
    ); 
}

export default MyOrders; 