import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
//import SustainableCard from "../SustainableCard/SustainableCard";
// import FindCoffeeCard from "../FindCoffeeCard/FindCoffeeCard";

import Button from "react-bootstrap/Button";


const Home = (props) => {

    return (
        <div className="hello-header text-center">

            {/* Top Header Card */}
            <Card className="cards shadow">
                <Card.Body>

                    <Image src="https://files.slack.com/files-pri/TLX4RPHDM-FT1UGUSBS/roadrunnercoffee.jpg" />
                    <Card.Title className="welcome-header-text"> Welcome to Roadrunner Coffee</Card.Title> 
                 
                </Card.Body>
            </Card>

            {/* sustainability Card */}
            <Card className="shadow">
                <Image className="imageOverLay" src="https://i.ytimg.com/vi/ZHv6wAbl1wE/maxresdefault.jpg" />
                <p className="smallImgText">sustainably <br />  sourced coffee</p>
                <Card.Text className="sustinabilitySmallText">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card>

            {/* Events Card */}
            <Card className="cards shadow">
                <Card.Body className="eventPeopleImg">
                    <Image className="eventPeopleImg" src="https://t8f8b3g9.stackpathcdn.com/wp-content/uploads/2018/10/productive-team-building-activities-blog-header-1.png" />
                    <Card.Title className="welcome-header-text"> Explore Events Near You </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button className="explore-btns" variant="outline-success">explore</Button>

                </Card.Body>
            </Card>

            {/* Podcast Card  */}
            <Card className="cards shadow">
                <Card.Body className="podcastImgCard">
                    <Image className="eventPeopleImg" src="https://www.weeditpodcasts.com/wp-content/uploads/elementor/thumbs/How-to-Get-More-People-to-Actually-Listen-to-Your-Podcast-oebq27q3dc1wgxkfk0n5tq7zzqsythizgdcqws9itk.jpg" />
                    <Card.Title className="welcome-header-text"> Podcasts  </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button className="explore-btns" variant="outline-success" onClick={()=>props.podcastPage()}>Listen Now</Button>
                    
                </Card.Body>
            </Card>

              {/* footer Card  */}
              <Card className="cards">
                <Card.Body className="footerCard">
                    <Card.Text>
                        @copyright 2020
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Home;

