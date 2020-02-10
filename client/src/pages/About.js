import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";
// import Button from "react-bootstrap/Button";
import Map from '../Components/Map/Map';
import "../pages/About.css";

// Imported Images 
import plants from "../pages/AboutPageIMG/NEWthree-plants.jpg"
import calli from "../pages/AboutPageIMG/calli-IMG.jpg"
import geremy from "../pages/AboutPageIMG/geremyIMG.jpg"
import goose from "../pages/AboutPageIMG/gooseIMG.jpg"
import miyoung from "../pages/AboutPageIMG/MiyoungIMG.jpg"
import pinkCactus1 from "../pages/AboutPageIMG/pink-cactus1.jpg"

function About() {
    let history = useHistory();

    return (

        <div className="about-component container">
            <div className="row">
                <Image className="threeCactusIMG" src={plants}></Image>
            </div>

            <Card className="text-center missionCard">
                <Card.Body>
                    <Card.Title className="cardTitle">Our Mission at Road Runner Coffee</Card.Title>
                    <Card.Text className="cardText">
                        Road Runner Coffee is committed to bringing our customers the finest quality coffee, serene ambience and welcoming customer experience. At Road Runner Coffee we have the fastest barista’s in the west! Let us make you a drink before you ride off into the sunset.
                </Card.Text>
                </Card.Body>
            </Card>

            {/* This is the meet the team  */}
            <div className="row">
                <h1 className="teamHeader">
                    meet the team
                </h1>
            </div>

            <div className="row meetTeamRow">
                {/* Team member one */}
                <Media className="teamMember">
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={miyoung}
                        alt="Miyoung Chung"
                    />
                    <Media.Body>
                        <h5>Miyoung Chung</h5>
                        <p>
                            Cras sit a
                        </p>
                    </Media.Body>
                </Media>

                {/* Team member two */}
                <Media className="teamMember">
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={goose}
                        alt="Steven Bowman"
                    />
                    <Media.Body>
                        <h5>Steven Bowman</h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante
                        </p>
                    </Media.Body>
                </Media>

                {/* Team member three */}
                <Media className="teamMember">
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={geremy}
                        alt="Geremy Pelleran"
                    />
                    <Media.Body>
                        <h5>Geremy Pelleran</h5>
                        <p>
                            Cras sit amet
                        </p>
                    </Media.Body>
                </Media>

                {/* Team member four */}
                <Media className="teamMember">
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={calli}
                        alt="Calli Bonnet"
                    />
                    <Media.Body>
                        <h5>Calli Bonnet</h5>
                        <p>
                            Cras
                        </p>
                    </Media.Body>
                </Media>

            </div>
            {/* End of team members */}

            {/* Three pink images */}
            <div className="row">
                <Image className="threePinkCactusIMG" src={pinkCactus1}></Image>
            </div>

            {/* Location information */}
            <div classNmae="row">
                <h1 className="mapHeader"> our location</h1>
            </div>

            {/* This is the map shown on the page */}
            <div className="row map">
                <Map></Map>
            </div>
        </div>


        // <div className="row">
        //     <Button onClick={() => history.push("/contact")} variant="primary">Click here for contact information.</Button>
        //     <Button onClick={() => history.push("/findus")} variant="secondary">Click here to find us!</Button>
        // </div> 

    );
}

export default About;






