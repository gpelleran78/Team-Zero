
import React, { useContext } from 'react';
import "./CartItem.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartContext from '../../utils/CartContext';

let flavors = "";
let shots = "";
let size = "";
let milk = ""; 

const CartItem = props => {
    
    if (props.itemExtraShots === "1") {
        shots = "1 extra shot"
    }
    if (props.itemExtraShots === "2") {
        shots = "2 extra shots"
    }
    if (props.itemExtraShots === "3") {
        shots = "3 extra shots"
    }
    if (props.itemExtraShots === "4") {
        shots = "4 extra shots"
    }
    if (props.itemExtraShots === 0) {
        shots = "no extra shots"
    }

    if (props.itemVanilla === "true") {
        flavors += " Vanilla";
    }
    if (props.itemHazlenut === "true") {
        flavors += " Hazlenut";
    }
    if (props.itemMocha === "true") {
        flavors += " Mocha";
    }
    if (props.itemWhiteMocha === "true") {
        flavors += " Whitemocha";
    }
    if (props.itemSFVanilla === "true") {
        flavors += " SFVanilla";
    }

    if (props.itemSize === "") {
        size = "large"
    }
    if (props.itemSize === "Small") {
        size = "small"
    }

    if (props.itemMilk === "") {
        milk = "whole milk"
    }
    if (props.itemMilk === "skim") {
        milk = "skim milk"
    }
    if (props.itemMilk === "soy") {
        milk = "soy milk"
    }
    if (props.itemMilk === "almond") {
        milk = "almond milk"
    }

    

    // function deleteThisOrder(arrIndex) {
    //     console.log(`delete this order ${arrIndex}`); 
    //     const { cartArr, setCartArr } = useContext(CartContext); 
     
    //    var newArr = cartArr.splice(index, arrIndex); 
    //    setCartArr(newArr); 
    //    console.log(newArr); 

    // }

    const { deleteThis } = useContext(CartContext); 

    return (
      <div className="container">
            <div className="row">
                <Card className="orderedCoffeeItem">
                    <Card.Body>
                        <Card.Text>
                        <h3 className="orderedCoffeeHeader">{props.itemName}</h3>
                        <ul clasName="customizeListOrderItems">
                            <li>Size: {size}</li>
                            <li>Flavors: {flavors}</li>
                            <li>Shots: {shots}</li>
                            <li>Milk: {milk}</li>
                            <li>Notes: {props.itemNotes}</li>
                        </ul>
                        </Card.Text>
                        <Button variant="danger" onClick={() => deleteThis(props.itemIndex)}>x delete this item</Button>
                    </Card.Body>
                </Card>
            </div>
     </div> 
    )
}

export default CartItem; 