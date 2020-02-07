import React from 'react'; 
import "./CartItem.css"; 


function CartItem(props) {
    
    

   
    
    return(
        <div className="cart-item">
            <h1>
            item: {props.itemName}
            size: {props.size}
            quantity: {props.itemQuantity}
            flavors: [vanilla: {props.itemVanilla}], [hazlenut: {props.itemHazlenut}], [mocha: {props.mocha}], [white mocha: {props.whiteMocha}]
            </h1>
        </div>
    )
}

export default CartItem; 