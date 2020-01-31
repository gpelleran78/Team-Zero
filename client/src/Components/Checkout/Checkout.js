import React from "react"; 
import "./Checkout.css"; 

class Checkout extends Component {
    state = {
        cart
    }

    cartReview = () => {
        console.log("cart review function execute"); 
    }

    render() {
        <Order 
        cartReview={this.cartReview}></Order>
    }
}

export default Checkout; 
