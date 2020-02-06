import React from "react"; 

const CartContext = React.createContext({
    cartArr: [], 
    cartItem: {}, 
    cartCount: 0,  
    cartConfirm: false, 
    handleCartBtn: () => {}
}); 

export default CartContext; 