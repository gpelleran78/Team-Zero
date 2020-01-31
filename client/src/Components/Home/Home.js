import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Home = () => {
    return (
        <div className="hello-header text-center shadow-sm">
            <Card>
                <Card.Body>
                    <Image src="../../../public/asests/images/Roadrunner" />
                    <Card.Title class="home-header-text"> Hello friend! </Card.Title>
                    <Card.Title class="welcome-header-text"> Welcome to Roadrunner Coffee</Card.Title>
                    <FontAwesomeIcon icon="user-circle"></FontAwesomeIcon>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Home;

