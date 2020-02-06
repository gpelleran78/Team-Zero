import React from 'react'; 
import "./CartItem.css"; 


function CartItem(props) {
    
    return(
        <div className="cart-item">
            <h1>
            item: {props.name}
            <br/>
            {props.description}
            <br/>
            ${props.basePrice}.00
            </h1>
            
        </div>
    )
}

export default CartItem; 