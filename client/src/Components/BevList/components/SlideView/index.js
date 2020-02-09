import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Page from "../DrinkType";

// All of the coffee images 
import Lattes from "../SlideView/images/latte-coffee-cup.jpg"; 
import cappuccino from "../SlideView/images/cappuccino-coffee-cup.jpg"; 
import Frappe from "../SlideView/images/frep-coffee-image.jpg"; 
import Mocha from "../SlideView/images/iced-mocha-image-coffee.jpg"; 


const Wrapper = styled.div`
    width: 100%
`;


export default class SlideView extends React.Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
                    <Wrapper>
                        <Slider
                            {...settings}
                        >
                            <Page drink={"Lattes"} source={Lattes} handler={this.props.inputhandler} />
                            <Page drink={"Cappucino"} source={cappuccino} handler={this.props.inputhandler} />
                            <Page drink={"Frappe"} source={Frappe} handler={this.props.inputhandler} />
                            <Page drink={"Mocha"} source={Mocha} handler={this.props.inputhandler} />

                        </Slider>
                    </Wrapper>
        );
    }
}


