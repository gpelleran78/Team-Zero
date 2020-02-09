import React from 'react'; 
// import './EventCard.css'; 

const EventCard = (props) => {
    return(
        <div className="eventcard-component">
        <h1>this is event card component</h1>
        <p>event id: {props.id}</p>
        <p>event name: {props.name}</p>
        <p>event description: {props.description}</p>
        <p>event date: {props.date}</p>
        <img src={props.image}/>
        </div>
       
    )
}

export default EventCard; 

