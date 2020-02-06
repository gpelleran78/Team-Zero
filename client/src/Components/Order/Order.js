import React, { Component } from "react"; 
import "./Order.css"; 

// import BevList from "../../Components/BevList/BevList"; 
import DrinkSelect from '../BevList/containers/App/drinkSelect'

class Order extends Component {

  render() {
    return (
        <div className="order-component">

           {/* <BevList></BevList> */}
           <DrinkSelect/>

        </div>

    )
  }
}

export default Order;
