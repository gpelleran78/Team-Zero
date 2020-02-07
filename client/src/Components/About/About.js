import React from 'react'; 
import "./About.css"; 
import { useHistory } from 'react-router-dom'; 
import Button from "react-bootstrap/Button"; 

function About() {
    let history = useHistory(); 
    return(
        <div className="about-component">
            <h1>this is the about component</h1>
            <Button onClick={()=>history.push("/contact")} variant="primary">Click here for contact information.</Button>
            <Button onClick={()=>history.push("/findus")} variant="secondary">Click here to find us!</Button>
        </div>
    ); 
}

export default About; 