import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Page from "../DrinkType"

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
        return(
            <Wrapper>
                <Slider
                {...settings} //mocha, white mocha, latte, cappuccino, americano
                >
                       <Page drink={"Latte"} source={"http://www.lovethispic.com/uploaded_images/147133-Heart-Latte.jpg"} handler={this.props.inputhandler}/>
                       <Page drink={"Cappucino"} source={"https://cms.qz.com/wp-content/uploads/2016/07/coffee.jpg?quality=75&strip=all&w=410&h=231"} handler={this.props.inputhandler}/>
                       <Page drink={"Frappe"} source={"https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201851/0053/img41l.jpg"} handler={this.props.inputhandler}/>
                       <Page drink={"Mocha"} source={"http://globalassets.starbucks.com/assets/a08ea74415f84c66b45b264f4c8e85a7.jpg"} handler={this.props.inputhandler}/>
                        
                </Slider>
            </Wrapper>
        );
    }
}