import React from 'react';

function Page(props) {
// console.log(props)
    return(
        <div>

        <img src={props.source} alt={props.drink}></img>
        <input type="submit" value={props.drink} image={props.source} name="drinktype" onClick={props.handler} />
        </div>
    )
}

export default Page;