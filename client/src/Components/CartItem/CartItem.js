import React from 'react';
import "./CartItem.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

let flavors = "";
let shots = "";
const CartItem = props => {
    console.log(props)
    function editOrder(item) {
        console.log(`edit this order fired ${item}`)
    }
    if (props.itemExtraShots === "1") {
        shots = "1 extra Esp"
    }
    if (props.itemExtraShots === "2") {
        shots = "2 extra Esp"
    }
    if (props.itemExtraShots === "3") {
        shots = "3 extra Esp"
    }
    if (props.itemExtraShots === "4") {
        shots = "4 extra Esp"
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

    return (
        <div className="container">
            <div className="row">
                <Card>
                    <Card.Body>
                        <Card.Text>
                            {props.itemSize === "" ? "large" : props.size} -
                            {props.itemName} - {flavors} - {shots} - {props.itemMilk}
                            <p>Notes: "{props.itemNotes}"</p>
                        </Card.Text>

                        <Button variant="success" onClick={() => editOrder(props.itemIndex)}>Edit {props.itemName}</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default CartItem; 