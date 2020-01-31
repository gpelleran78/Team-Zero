import React, { Component } from "react";
import "./BevList.css";
import BevCard from "../../Components/BevCard/BevCard";
import drinks from "../../drinks.json";
import Wrapper from "../../Components/Wrapper/Wrapper";

class BevList extends Component {
    state = {
        drinks
    }

    addToCart = id => {
        console.log(`item id: ${id} added to cart`);
    }

    render() {
        return (
            <Wrapper>
                {
                    this.state.drinks.map(drink => (
                        <BevCard
                            key={drink.id}
                            image={drink.image}
                            name={drink.name}
                            description={drink.description}
                            price={drink.basePrice}
                            type={drink.type}
                        />
                    ))
                }
            </Wrapper>
        )
    }
}

export default BevList; 
