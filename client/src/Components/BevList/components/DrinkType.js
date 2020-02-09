import React from 'react';
import "../components/DrinkType.css"; 

function Page(props) {
// console.log(props)
    return(

        <div className="container">
            <img className="coffee-img" src={props.source} alt={props.drink}></img>
            <button className="coffee-btn btn-lg block" type="submit" value={props.drink} name="drinktype" onClick={props.handler}>{props.drink}</button>
        </div>
    )
}

export default Page;