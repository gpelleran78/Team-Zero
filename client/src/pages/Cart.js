import React, { useContext } from 'react';
import CartItem from "../Components/CartItem/CartItem";
import CheckoutBtn from "../Components/CheckoutBtn/CheckoutBtn";
import CartContext from "../utils/CartContext";


function Cart() {

    const { cartArr } = useContext(CartContext);
    // need to update state in this component
   

    return (
        <div className="cart-wrapper">
            {
                cartArr.map((item, index) => (
                    <CartItem
                        key={index}
                        itemIndex={index}
                        itemName={item.drinktype}
                        itemSize={item.size}
                        itemExtraShots={item.extraShots}
                        itemMilk={item.milk}
                        itemVanilla={item.vanilla}
                        itemHazlenut={item.hazlenut}
                        itemMocha={item.mocha}
                        itemWhiteMocha={item.whiteMocha}
                        itemSFVanilla={item.SFVanilla}
                        itemNotes={item.notes}
                        itemQuantity={item.amountofdrinks}
                        
                    />
                ))
            }
            <CheckoutBtn />
        </div>
    )
}

export default Cart; 