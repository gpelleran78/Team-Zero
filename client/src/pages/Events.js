import React, { useContext, useEffect } from "react";
import CartContext from '../utils/CartContext';
import EventCard from '../Components/EventCard/EventCard';
import API from "../utils/API";

const Events = () => {


    const {eventArr} = useContext(CartContext); 
    console.log(eventArr); 


    return (
        <div className="events-component">
            this is the events page
          
            {
                eventArr.map((event, index) => (
                    <EventCard 
                    key={index}
                    id={event.id}
                    name={event.name}
                    description={event.description}
                    image={event.image}
                    date={event.date}
                    />
                ))

            }
          
        </div>

    )
}

export default Events; 