import React from "react";
import "./MyOrdersCard.css";

let flavors = "";
let shots = "";
let size = "";
let milk = "";

const MyOrdersCard = (props) => {

    if (props.itemExtraShots === "1") {
        shots = "1 extra shot"
    }
    if (props.itemExtraShots === "2") {
        shots = "2 extra shots"
    }
    if (props.itemExtraShots === "3") {
        shots = "3 extra shots"
    }
    if (props.itemExtraShots === "4") {
        shots = "4 extra shots"
    }
    if (props.itemExtraShots === 0) {
        shots = "no extra shots"
    }

    if (props.itemVanilla === "true") {
        flavors += " Vanilla";
    }
    if (props.itemHazlenut === "true") {
        flavors += " Hazlenut";
    }
    if (props.itemMocha === "true") {
        flavors += " Mocha";
    }
    if (props.itemWhiteMocha === "true") {
        flavors += " Whitemocha";
    }
    if (props.itemSFVanilla === "true") {
        flavors += " SFVanilla";
    }

    if (props.itemSize === "") {
        size = "large"
    }
    if (props.itemSize === "Small") {
        size = "small"
    }

    if (props.itemMilk === "") {
        milk = "whole milk"
    }
    if (props.itemMilk === "skim") {
        milk = "skim milk"
    }
    if (props.itemMilk === "soy") {
        milk = "soy milk"
    }
    if (props.itemMilk === "almond") {
        milk = "almond milk"
    }

    return (
        <div className="myorders-card">
            <h3>{props.itemName}</h3>
            <h4>Size: {size}</h4>
            <h4>Flavors: {flavors}</h4>
            <h4>Shots: {shots}</h4>
            <h4>Milk: {milk}</h4>
            <h5>Notes: {props.itemNotes}</h5>
            <p>Purchase Date: {props.date}</p>
        </div>
    );
    // return(
    //     <div className="order-card-item">
    //     <h3>{props.itemName}</h3>
    //     <h4>Size: {size}</h4>
    //     <h4>Flavors: {flavors}</h4>
    //     <h4>Shots: {shots}</h4>
    //     <h4>Milk: {milk}</h4>
    //     <h5>Notes: {props.itemNotes}</h5>
    //     <Button variant="success" onClick={() => editOrder(props.itemIndex)}>x delete this item</Button>
    //     <br />
    // </div>
    // )
}

export default MyOrdersCard;



