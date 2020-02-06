import React, { Component } from "react";
import "./Order.css";
import BevCard from "../BevCard/BevCard";
import drinks from "../../drinks.json";

class Order extends Component {

  render() {
    return (
      <div className="order-component">
        {
          drinks.map(drink => (
            <BevCard
              key={drink.id}
              id={drink.id}
              image={drink.image}
              name={drink.name}
              description={drink.description}
              price={drink.basePrice}
              type={drink.type}
              
            />
          ))
        }
      </div>
    )
  }
}

export default Order;
