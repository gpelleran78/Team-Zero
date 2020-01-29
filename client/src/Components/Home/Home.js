import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Home = () => {
    return (
        <div className="hello-header">
            <Card>
                <Card.Body>
                    <Card.Title>Hello! Welcome to Roadrunner </Card.Title>
                    <FontAwesomeIcon icon="user-circle"></FontAwesomeIcon>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Home;

