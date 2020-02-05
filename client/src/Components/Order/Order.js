import React, { Component } from "react";
import "./Order.css";
import BevList from "../BevList/BevList";
import Button from "react-bootstrap/Button";

class Order extends Component {
  state = {
    
  };

  cartReview = () => {
      console.log("Cart review function executed")
  }

  render () {
      return (
          <div className="order-component">
           <BevList></BevList>
        </div>
      )

  }
}


export default Order;
