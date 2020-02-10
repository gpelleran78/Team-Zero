import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import API from "../utils/API";
import "../pages/Checkout.css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

// imported images 
import plants from "../pages/AboutPageIMG/NEWthree-plants.jpg"


function Checkout() {

    // const { user } = useAuth0(); 
    // let email = user.email; 


    // API.saveOrder({

    // })

    return (
        <div className="container checkout-page text-center">
           
            <div className="row">
                <Card className="card">
                    <Card.Title className="cardText1">Your order has been submitted and will be ready for pick up in 15 minutes!</Card.Title>
                </Card>
            </div>
            <div className="row">
                <Image className="threeCactusIMG1" src={plants}></Image>
            </div>
        </div>
    )
}

export default Checkout; 