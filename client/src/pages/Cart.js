import React, { useContext } from 'react';
import CartItem from "../Components/CartItem/CartItem";
import CheckoutBtn from "../Components/CheckoutBtn/CheckoutBtn";
import CartContext from "../utils/CartContext";


function Cart() {

    const { cartArr } = useContext(CartContext);

    return (
        <div className="cart-wrapper">
            {
                cartArr.map(item => (
                    <CartItem
                        key={item.id}
                        itemName={item.drinktype}
                        itemSize={item.size}
                        itemExtraShots={item.extraShots}
                        itemMilk={item.milk}
                        itemVanilla={item.vanilla}
                        itemHazlenut={item.hanzlenut}
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