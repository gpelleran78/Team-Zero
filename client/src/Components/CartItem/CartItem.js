import React from 'react'; 
import "./CartItem.css"; 
import Button from "react-bootstrap/Button"; 

const CartItem = props => {

    function editOrder(item) {
        console.log(`edit this order fired ${item}`)
    }

    return(
        <div className="cart-item">
            <h1>
            item: {props.itemName}
            <br/>
            size: {props.size}
            <br/>
            quantity: {props.itemQuantity}
            <br/>
            flavors: [vanilla: {props.itemVanilla}], [hazlenut: {props.itemHazlenut}], [mocha: {props.mocha}], [white mocha: {props.whiteMocha}]
            </h1>
            <Button variant="success" onClick={()=>editOrder(props.itemIndex)}>Edit Order</Button>
            <br/>
        </div>
    )
}

export default CartItem; 