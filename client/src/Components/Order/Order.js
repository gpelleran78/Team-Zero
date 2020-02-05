import React from "react"; 
import "./Order.css"; 
// import BevList from "../../Components/BevList/BevList"; 
import DrinkSelect from '../BevList/containers/App/drinkSelect'

const Order = () => {
    return (
        <div className="order-component">
           {/* <BevList></BevList> */}
           <DrinkSelect/>
        </div>
      
    )
}

export default Order; 