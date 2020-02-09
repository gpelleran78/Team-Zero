import React from 'react';
import "./Home.css";
import homeData from "../../src/HomepageContainers.json"
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";


const HomeContainer = () => {

    return (
        <div>
            {homeData.map(i => (
                <Card className="cards eventCards">

                    {/* This card is holding the image  */}
            
                        <Image className="cardImage" src={i.image}/> 
        
                    {/* This card is holdinig the text  */}
                    <Card.Body>
                        <h1 className="nameText">{i.name}</h1>
                        <p className="descriptionText">{i.description}</p>
                        <Button className="btn explore-btn" href={i.link}> {i.button}</Button>
                    </Card.Body>

                </Card>
            ))}

        </div>
    )

}

export default HomeContainer; 