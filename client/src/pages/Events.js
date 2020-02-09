import React, { useContext, useEffect } from "react"; 
import API from "../utils/API"; 
import CartContext from '../utils/CartContext';
const Events = () => {
    const { loadEvents } = useContext(CartContext);
    useEffect(()=>{
        loadEvents(); 
    })
    return(
        <div className="events-component">
            this is the events page 
            
        </div>

    )
}

export default Events; 