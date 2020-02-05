import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import SustainableCard from "../SustainableCard/SustainableCard";
// import FindCoffeeCard from "../FindCoffeeCard/FindCoffeeCard";


const Home = () => {
    return (
        <div className="hello-header text-center">
            <Card className="cards shadow">
                <Card.Body>
                    <Image src="https://files.slack.com/files-pri/TLX4RPHDM-FT1UGUSBS/roadrunnercoffee.jpg" />
                    <Card.Title class="welcome-header-text"> Welcome to Roadrunner Coffee</Card.Title>
                    <FontAwesomeIcon icon="user-circle"></FontAwesomeIcon>
                </Card.Body>
            </Card>
            <SustainableCard />
        </div>  
    )
}

export default Home;

