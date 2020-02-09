import React from 'react'; 
import { useHistory } from 'react-router-dom'; 
import Button from "react-bootstrap/Button"; 
import Map from '../Components/Map/Map'

function About() {
    let history = useHistory(); 
    return(
        <div className="about-component">
            <h1>Our Mission and Road Runner Coffee</h1>
      
            <p>Road Runner Coffee is committed to bringing our customers the finest quality coffee, serene ambience and welcoming customer experience. At Road Runner Coffee we have the fastest barista’s in the west! Let us make you a drink before you ride off into the sunset.</p>
      
            <Button onClick={()=>history.push("/contact")} variant="primary">Click here for contact information.</Button>

            <Button onClick={()=>history.push("/findus")} variant="secondary">Click here to find us!</Button>
            <Map></Map>

        </div>
    ); 
}

export default About; 