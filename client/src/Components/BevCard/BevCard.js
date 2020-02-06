import React from "react";
import Card from "react-bootstrap/Card";
import AddCartBtn from "../AddCartBtn/AddCartBtn";
import "./BevCard.css";

const BevCard = (props) => {

    return (
        <div className="bev-card col-md-2 text-center shadow">
            <Card style={{ width: '24rem', marginBottom: '10px', border:'0px'}}>
                <Card.Img className="coffee-image" variant="top" alt={props.name} src={props.image}></Card.Img>
                <Card.Body>
                <h3 className="coffee-name">{props.name}</h3>
                    <Card.Text>
                    <p className="coffee-type">{props.type}</p>
                    <p className="coffee-description">{props.description}</p>
                    <p className="coffee-price">${props.price}.00 </p>
                    </Card.Text>
                    <AddCartBtn id={props.id} />
                </Card.Body>
            </Card>
        </div>
    );
}

export default BevCard; 
