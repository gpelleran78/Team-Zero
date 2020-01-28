import React from "react"; 
import "./BevCard.css"; 
import Button from "react-bootstrap/Button"; 

const BevCard = (props) => {
    return (
        <div className="bev-card col-md-2">
            <div className="bev-card-container">
                 <img alt={props.name} src={props.image}></img>
                 <p class="description">Name: {props.name}</p>
                 <p class="decription">Type: {props.type} </p>
                 <p class="description">Description: {props.description}</p>
                 <p class="description">Price: {props.price} </p>
                 <Button variant="danger">Add to Cart</Button>
            </div>
        </div>
    );

}

export default BevCard; 
