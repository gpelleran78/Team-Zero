import React, { useContext, useEffect } from "react";
import CartContext from '../utils/CartContext';
import EventCard from '../Components/EventCard/EventCard';
import API from "../utils/API";

const Events = () => {

    const {eventArr} = useContext(CartContext); 
    console.log(eventArr); 
    // let eventsArr = [
    //     {
    //         id: 1,
    //         name: "Puppy Play", 
    //         date: "Feb 21, 2020", 
    //         description: "Socialize your little pupper at our weekly meetup!", 
    //         image: "https://media.giphy.com/media/wdQwRVyHGV8ic/source.gif"
    //     },
    //     {
    //         id: 2, 
    //         name: "Chess Wars", 
    //         date: "March 1, 2020", 
    //         description: "The battle royale for roadrunner chess champion continues this March!", 
    //         image: "https://media.giphy.com/media/WwbmjTK5TS87e/source.gif"
    //     },
    //     {
    //         id: 3, 
    //         name: "Live Local Monday",
    //         date: "Feb 17, 2020", 
    //         decription: "Live Local Monday featuring Tucson native musician, Brian Lopez", 
    //         image: "https://media.giphy.com/media/l41lOzTIL8lfZ15fy/source.gif"

    //     }
    // ]

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