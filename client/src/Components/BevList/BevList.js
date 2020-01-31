import React, { Component } from "react";
import "./BevList.css";
import BevCard from "../../components/BevCard/BevCard";
import drinks from "../../drinks.json";
import Wrapper from "../../components/Wrapper/Wrapper";

class BevList extends Component {
    state = {
        drinks
    }

    addToCart = id => {
        var cart = [];
       // var cartItem = this.state.drinks.filter(drink => drink.id === id);
       cart.push(id); 
       console.log(cart); 
        

    }

    render() {
        return (
            <Wrapper>
                {
                    this.state.drinks.map(drink => (
                        <BevCard
                            key={drink.id}
                            id={drink.id}
                            image={drink.image}
                            name={drink.name}
                            description={drink.description}
                            price={drink.basePrice}
                            type={drink.type}
                            addToCart={this.addToCart}
                        />
                    ))
                }
            </Wrapper>
        )
    }
}

export default BevList; 
