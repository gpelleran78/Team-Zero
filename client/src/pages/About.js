import React from 'react'; 
import { useHistory } from 'react-router-dom'; 
import Button from "react-bootstrap/Button"; 

function About() {
    let history = useHistory(); 
    return(
        <div className="about-component">
            <h1>this is the about component</h1>
      
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
            <Button onClick={()=>history.push("/contact")} variant="primary">Click here for contact information.</Button>

            <Button onClick={()=>history.push("/findus")} variant="secondary">Click here to find us!</Button>

        </div>
    ); 
}

export default About; 