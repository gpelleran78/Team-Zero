import React from "react"; 
import "./Order.css"; 
import BevList from "../BevList/BevList"; 
import Button from "react-bootstrap/Button"; 

const Order = (props) => {
    return (
        <div className="order-component">
           <BevList></BevList>
            <Button onClick={()=>props.cartReview()} variant="primary">Review Your Order</Button>
        </div>
       
    )
}

export default Order; 