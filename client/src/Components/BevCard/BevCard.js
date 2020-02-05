import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./BevCard.css";

const BevCard = (props) => {

    

    return (
        <div className="bev-card col-md-2 text-center shadow">
            <Card style={{ width: '24rem', marginBottom: '10px', border:'0px'}}>
                <Card.Img className="coffee-image" variant="top" alt={props.name} src={props.image}></Card.Img>
                <Card.Body>
                <h3 class="coffee-name">{props.name}</h3>
                    <Card.Text>
                    <p class="coffee-type">{props.type}</p>
                    <p class="coffee-description">{props.description}</p>
                    <p class="coffee-price">${props.price}.00 </p>
                    </Card.Text>
                    <Button class="coffee-order-btn" variant="outline-success" onClick={()=>{console.log("click")}}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BevCard; 
