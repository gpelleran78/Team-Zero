import React from "react";

function DrinkList(props) {
console.log(props)
    return(
        <div>

        {props.arr.length > 0 ? (
            props.arr.map((drink, index) => {
                console.log(drink);
                return (
                    <div key={index}>
                <p>{index}</p>
                <h6>{drink.drinktype}</h6>
                <p>{drink.size}</p>
                <p>{drink.milk}</p>
                <p>{props.listFlavors(drink)}</p>
                <p>{drink.temp}</p>
                <p>{drink.notes}</p>
                <button
                  id={index}
                  placeholder="Remove Drink"
                  onClick={props.handler}
                  >Remove Drink</button>
               
              </div>
            );
        })
        ) : (
            <h6>empty cart</h6>
            )}
            </div>
                    )
                }
                
                
            
            
            
            export default DrinkList;