import React from "react"; 
import "./Order.css"; 
// import BevList from "../../Components/BevList/BevList"; 
import Apple from '../BevList/containers/App/drinkSelect'

const Order = () => {
    return (
        <div className="order-component">
           {/* <BevList></BevList> */}
           <Apple/>
        </div>
      
    )
}

export default Order; 