import React, { useState, useEffect } from "react"; 
import { useAuth0 } from "../react-auth0-spa"; 
import API from "../utils/API"; 
import MyOrdersCard from "../Components/MyOrdersCard/MyOrdersCard"; 


const MyOrders = () => {
    
    const [myOrdersArr, setMyOrdersArr] = useState([]); 
    const { user } = useAuth0(); 
    let email = user.email; 

    useEffect(()=>{
        API.getOrder(email).then(res=>{
            console.log(res.data); 
            setMyOrdersArr(res.data); 
        }).catch(err=>console.log(err)); 
    },[]); 


    return(
        <div className="my-orders-page">
            {
                myOrdersArr.map((order,index)=>(
                   <MyOrdersCard
                   key={index}
                   date={order.createdAt}
                   itemName={order.drinktype}
                   itemSize={order.size}
                   itemExtraShots={order.extraShots}
                   itemMilk={order.milk}
                   itemVanilla={order.vanilla}
                   itemHazlenut={order.hazlenut}
                   itemMocha={order.mocha}
                   itemWhiteMocha={order.whiteMocha}
                   itemSFVanilla={order.SFVanilla}
                   itemNotes={order.notes}
                   itemQuantity={order.amountofdrinks}
                    /> 
                ))
            }
            
        </div>
    ); 
}

export default MyOrders; 