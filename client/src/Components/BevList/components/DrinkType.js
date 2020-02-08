import React from 'react';
import "../components/DrinkType.css"; 

function Page(props) {
// console.log(props)
    return(

        <div className="container">
            <img className="coffee-img" src={props.source} alt={props.drink}></img>
            <input className="coffee-btn btn" type="submit" value={props.drink} name="drinktype" onClick={props.handler} />

 
        </div>
    )
}

export default Page;