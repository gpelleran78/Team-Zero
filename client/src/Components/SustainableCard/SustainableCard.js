import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";


const SustainableCard = () => {
    return (
        <div className="text-center imageOverlay">
            <Card className="shadow">
               <Image className="imageOverLay" src="https://i.ytimg.com/vi/ZHv6wAbl1wE/maxresdefault.jpg"/>
                <p class="smallImgText">sustainably <br />  sourced coffee</p>
            </Card>
        </div>
        
    )
}

export default SustainableCard;