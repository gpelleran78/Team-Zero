import React from "react";



const drinkForm = (props) => {
// console.log(props)
    return(
// grade>90?"a":grade>80?"B":"F"
<div>
  {props.state.drinktype === "Latte"?(
    <form action="">
    <p>Hot or Cold?</p>
    <input
      type="radio"
      name="temp"
      // value={props.state.temp}
      value={"hot"}
      onChange={props.handleInputChange}
      selected={props.state.temp}
      checked={props.state.drinktype === "Cappucino"?true:props.state.drinktype === "Frappe"?false:props.state.temp === "hot"?true:false}
      
      
    />{" "}
    Hot
    <input
      type="radio"
      name="temp"
      // value={props.state.temp}
      value={"cold"}
      onChange={props.handleInputChange}
      selected={props.state.temp}
      checked={props.state.drinktype === "Frappe"?true:props.state.drinktype === "Cappucino"?false:props.state.temp === "cold"?true:false}
      
    />{" "}
    Cold
    <br />
    <p>Size:</p>
    <input
      type="radio"
      name="size"
      value={"Small"}
      onChange={props.handleInputChange}
      checked={props.state.size === "Small"?true:false}
    />{" "}
    Small
    <input
      type="radio"
      name="size"
      value={"Large"}
      onChange={props.handleInputChange}
      checked={props.state.size === ""?true:props.state.size === "Large"?true:false}

    />{" "}
    Large
    <br />
    <p>Extra Espresso:</p>
    <input
      type="radio"
      name="extraShots"
      value={"1"}
      onChange={props.handleInputChange}
      checked={props.state.extraShots === "1"?true:false}
      
    />{" "}
    1 shot
    <input
      type="radio"
      name="extraShots"
      value={"2"}
      onChange={props.handleInputChange}
      checked={props.state.extraShots === "2"?true:false}
    />{" "}
    2 shots
    <input
      type="radio"
      name="extraShots"
      value="3"
      onChange={props.handleInputChange}
      checked={props.state.extraShots === "3"?true:false}
    />{" "}
    3 shots
    <input
      type="radio"
      name="extraShots"
      value="4"
      onChange={props.handleInputChange}
      checked={props.state.extraShots === "4"?true:false}
    />{" "}
    4 shots
    <br />
    <p>Milk Type:</p>
    <input
      type="radio"
      name="milk"
      value="Whole"
      onChange={props.handleInputChange}
      checked={props.state.milk === ""?true:props.state.milk === "Whole"?true:false}
    />{" "}
    Whole
    <input
      type="radio"
      name="milk"
      value="skim"
      onChange={props.handleInputChange}
      checked={props.state.milk === "skim"?true:false}
    />{" "}
    Skim
    <input
      type="radio"
      name="milk"
      value="soy"
      onChange={props.handleInputChange}
      checked={props.state.milk === "soy"?true:false}
    />{" "}
    Soy
    <input
      type="radio"
      name="milk"
      value="almond"
      onChange={props.handleInputChange}
      checked={props.state.milk === "almond"?true:false}
    />{" "}
    Almond
    <br />
    
    
    <p>Flavors</p>
    <input
      type="checkbox"
      name="vanilla"
      value={props.state.vanilla === "false"?"true":"false"}
      onChange={props.handleInputChange}
      checked={props.state.vanilla === "true"?true:false}
    />{" "}
    Vanilla
    <input
      type="checkbox"
      name="hazlenut"
      value={props.state.hazlenut === "false"?"true":"false"}
      onChange={props.handleInputChange}
      checked={props.state.hazlenut === "true"?true:false}
    />{" "}
    Hazzlenut
    <input
      type="checkbox"
      name="mocha"
      value={props.state.mocha === "false"?"true":"false"}
      onChange={props.handleInputChange}
      checked={props.state.drinktype === "Mocha"?true:props.state.mocha === "true"?true:false}
    />{" "}
    Mocha
    <input
      type="checkbox"
      name="whiteMocha"
      value={props.state.whiteMocha === "false"?"true":"false"}
      onChange={props.handleInputChange}
      checked={props.state.whiteMocha === "true"?true:false}
    />{" "}
    White Mocha
    <input
      type="checkbox"
      name="SFVanilla"
      value={props.state.SFVanilla === "false"?"true":"false"}
      onChange={props.handleInputChange}
      checked={props.state.SFVanilla === "true"?true:false}

    />{" "}
    SF Vanilla
    <p>Notes</p>
    <textarea rows="5" cols="40" value={props.state.notes} name="notes" onChange={props.handleInputChange}></textarea>
    <br />
    <input type="submit" value="Add New Drink" onClick={props.handleNewDrink}/>
    <input type="submit" value="Submit Order" onClick={props.submitOrder}/>
  </form> //mocha, white mocha, latte, cappuccino, americano
  ):props.state.drinktype === "Cappucino"?(
    <form action="">
          <p>Hot or Cold?</p>
          <input
            type="radio"
            name="temp"
            // value={props.state.temp}
            value={"hot"}
            onChange={props.handleInputChange}
            selected={props.state.temp}
            checked={props.state.drinktype === "Cappucino"?true:props.state.drinktype === "Frappe"?false:props.state.temp === "hot"?true:false}
            
            
          />{" "}
          Hot
        
          <br />
          <p>Size:</p>
          <input
            type="radio"
            name="size"
            value={"Small"}
            onChange={props.handleInputChange}
            checked={props.state.size === "Small"?true:false}
          />{" "}
          Small
          <input
            type="radio"
            name="size"
            value={"Large"}
            onChange={props.handleInputChange}
            checked={props.state.size === ""?true:props.state.size === "Large"?true:false}

          />{" "}
          Large
          <br />
          <p>Extra Espresso:</p>
          <input
            type="radio"
            name="extraShots"
            value={"1"}
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "1"?true:false}
            
          />{" "}
          1 shot
          <input
            type="radio"
            name="extraShots"
            value={"2"}
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "2"?true:false}
          />{" "}
          2 shots
          <input
            type="radio"
            name="extraShots"
            value="3"
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "3"?true:false}
          />{" "}
          3 shots
          <input
            type="radio"
            name="extraShots"
            value="4"
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "4"?true:false}
          />{" "}
          4 shots
          <br />
          <p>Milk Type:</p>
          <input
            type="radio"
            name="milk"
            value="Whole"
            onChange={props.handleInputChange}
            checked={props.state.milk === ""?true:props.state.milk === "Whole"?true:false}
          />{" "}
          Whole
          <input
            type="radio"
            name="milk"
            value="skim"
            onChange={props.handleInputChange}
            checked={props.state.milk === "skim"?true:false}
          />{" "}
          Skim
          <input
            type="radio"
            name="milk"
            value="soy"
            onChange={props.handleInputChange}
            checked={props.state.milk === "soy"?true:false}
          />{" "}
          Soy
          <input
            type="radio"
            name="milk"
            value="almond"
            onChange={props.handleInputChange}
            checked={props.state.milk === "almond"?true:false}
          />{" "}
          Almond
          <br />
          
          
          <p>Flavors</p>
          <input
            type="checkbox"
            name="vanilla"
            value={props.state.vanilla === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.vanilla === "true"?true:false}
          />{" "}
          Vanilla
          <input
            type="checkbox"
            name="hazlenut"
            value={props.state.hazlenut === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.hazlenut === "true"?true:false}
          />{" "}
          Hazzlenut
          <input
            type="checkbox"
            name="mocha"
            value={props.state.mocha === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.drinktype === "Mocha"?true:props.state.mocha === "true"?true:false}
          />{" "}
          Mocha
          <input
            type="checkbox"
            name="whiteMocha"
            value={props.state.whiteMocha === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.whiteMocha === "true"?true:false}
          />{" "}
          White Mocha
          <input
            type="checkbox"
            name="SFVanilla"
            value={props.state.SFVanilla === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.SFVanilla === "true"?true:false}

          />{" "}
          SF Vanilla
          <p>Notes</p>
          <textarea rows="5" cols="40" value={props.state.notes} name="notes" onChange={props.handleInputChange}></textarea>
          <br />
          <input type="submit" value="Add New Drink" onClick={props.handleNewDrink}/>
          <input type="submit" value="Submit Order" onClick={props.submitOrder}/>
        </form>
  ):props.state.drinktype === "Mocha"?(
    <form action="">
          <p><b>Hot or Cold?</b></p>
          <input
            type="radio"
            name="temp"
            // value={props.state.temp}
            value={"hot"}
            onChange={props.handleInputChange}
            selected={props.state.temp}
            checked={props.state.drinktype === "Cappucino"?true:props.state.drinktype === "Frappe"?false:props.state.temp === "hot"?true:false}
            
            
          />{" "}
          Hot
          <input
            type="radio"
            name="temp"
            // value={props.state.temp}
            value={"cold"}
            onChange={props.handleInputChange}
            selected={props.state.temp}
            checked={props.state.drinktype === "Frappe"?true:props.state.drinktype === "Cappucino"?false:props.state.temp === "cold"?true:false}
            
          />{" "}
          Cold
          <br />
          <p>Size:</p>
          <input
            type="radio"
            name="size"
            value={"Small"}
            onChange={props.handleInputChange}
            checked={props.state.size === "Small"?true:false}
          />{" "}
          Small
          <input
            type="radio"
            name="size"
            value={"Large"}
            onChange={props.handleInputChange}
            checked={props.state.size === ""?true:props.state.size === "Large"?true:false}

          />{" "}
          Large
          <br />
          <p>Extra Espresso:</p>
          <input
            type="radio"
            name="extraShots"
            value={"1"}
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "1"?true:false}
            
          />{" "}
          1 shot
          <input
            type="radio"
            name="extraShots"
            value={"2"}
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "2"?true:false}
          />{" "}
          2 shots
          <input
            type="radio"
            name="extraShots"
            value="3"
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "3"?true:false}
          />{" "}
          3 shots
          <input
            type="radio"
            name="extraShots"
            value="4"
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "4"?true:false}
          />{" "}
          4 shots
          <br />
          <p>Milk Type:</p>
          <input
            type="radio"
            name="milk"
            value="Whole"
            onChange={props.handleInputChange}
            checked={props.state.milk === ""?true:props.state.milk === "Whole"?true:false}
          />{" "}
          Whole
          <input
            type="radio"
            name="milk"
            value="skim"
            onChange={props.handleInputChange}
            checked={props.state.milk === "skim"?true:false}
          />{" "}
          Skim
          <input
            type="radio"
            name="milk"
            value="soy"
            onChange={props.handleInputChange}
            checked={props.state.milk === "soy"?true:false}
          />{" "}
          Soy
          <input
            type="radio"
            name="milk"
            value="almond"
            onChange={props.handleInputChange}
            checked={props.state.milk === "almond"?true:false}
          />{" "}
          Almond
          <br />
          
          
          <p>Flavors</p>
          <input
            type="checkbox"
            name="vanilla"
            value={props.state.vanilla === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.vanilla === "true"?true:false}
          />{" "}
          Vanilla
          <input
            type="checkbox"
            name="hazlenut"
            value={props.state.hazlenut === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.hazlenut === "true"?true:false}
          />{" "}
          Hazzlenut
          <input
            type="checkbox"
            name="mocha"
            value={props.state.mocha === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.drinktype === "Mocha"?true:props.state.mocha === "true"?true:false}
          />{" "}
          Mocha
          <input
            type="checkbox"
            name="whiteMocha"
            value={props.state.whiteMocha === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.whiteMocha === "true"?true:false}
          />{" "}
          White Mocha
          <input
            type="checkbox"
            name="SFVanilla"
            value={props.state.SFVanilla === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.SFVanilla === "true"?true:false}

          />{" "}
          SF Vanilla
          <p>Notes</p>
          <textarea rows="5" cols="40" value={props.state.notes} name="notes" onChange={props.handleInputChange}></textarea>
          <br />
          <input type="submit" value="Add New Drink" onClick={props.handleNewDrink}/>
          <input type="submit" value="Submit Order" onClick={props.submitOrder}/>
        </form>
  ):props.state.drinktype === "Frappe"?(
    <form action="">
          <p>Hot or Cold?</p>
         
          <input
            type="radio"
            name="temp"
            // value={props.state.temp}
            value={"cold"}
            onChange={props.handleInputChange}
            selected={props.state.temp}
            checked={props.state.drinktype === "Frappe"?true:props.state.drinktype === "Cappucino"?false:props.state.temp === "cold"?true:false}
            
          />{" "}
          Cold
          <br />
          <p>Size:</p>
          <input
            type="radio"
            name="size"
            value={"Small"}
            onChange={props.handleInputChange}
            checked={props.state.size === "Small"?true:false}
          />{" "}
          Small
          <input
            type="radio"
            name="size"
            value={"Large"}
            onChange={props.handleInputChange}
            checked={props.state.size === ""?true:props.state.size === "Large"?true:false}

          />{" "}
          Large
          <br />
          <p>Extra Espresso:</p>
          <input
            type="radio"
            name="extraShots"
            value={"1"}
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "1"?true:false}
            
          />{" "}
          1 shot
          <input
            type="radio"
            name="extraShots"
            value={"2"}
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "2"?true:false}
          />{" "}
          2 shots
          <input
            type="radio"
            name="extraShots"
            value="3"
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "3"?true:false}
          />{" "}
          3 shots
          <input
            type="radio"
            name="extraShots"
            value="4"
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "4"?true:false}
          />{" "}
          4 shots
          <br />
          <p>Milk Type:</p>
          <input
            type="radio"
            name="milk"
            value="Whole"
            onChange={props.handleInputChange}
            checked={props.state.milk === ""?true:props.state.milk === "Whole"?true:false}
          />{" "}
          Whole
          
          <input
            type="radio"
            name="milk"
            value="soy"
            onChange={props.handleInputChange}
            checked={props.state.milk === "soy"?true:false}
          />{" "}
          Soy
        
          <br />
          
          
          <p>Flavors</p>
          <input
            type="checkbox"
            name="vanilla"
            value={props.state.vanilla === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.vanilla === "true"?true:false}
          />{" "}
          Vanilla
          <input
            type="checkbox"
            name="hazlenut"
            value={props.state.hazlenut === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.hazlenut === "true"?true:false}
          />{" "}
          Hazzlenut
          <input
            type="checkbox"
            name="mocha"
            value={props.state.mocha === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.drinktype === "Mocha"?true:props.state.mocha === "true"?true:false}
          />{" "}
          Mocha
          <input
            type="checkbox"
            name="whiteMocha"
            value={props.state.whiteMocha === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.whiteMocha === "true"?true:false}
          />{" "}
          White Mocha
          <input
            type="checkbox"
            name="SFVanilla"
            value={props.state.SFVanilla === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.SFVanilla === "true"?true:false}

          />{" "}
          SF Vanilla
          <p>Notes</p>
          <textarea rows="5" cols="40" value={props.state.notes} name="notes" onChange={props.handleInputChange}></textarea>
          <br />
          <input type="submit" value="Add New Drink" onClick={props.handleNewDrink}/>
          <input type="submit" value="Submit Order" onClick={props.submitOrder}/>
        </form>
  ):<h1>Choose a Drink</h1>
  }
        {/* <form action="">
          <p>Hot or Cold?</p>
          <input
            type="radio"
            name="temp"
            // value={props.state.temp}
            value={"hot"}
            onChange={props.handleInputChange}
            selected={props.state.temp}
            checked={props.state.drinktype === "Cappucino"?true:props.state.drinktype === "Frappe"?false:props.state.temp === "hot"?true:false}
            
            
          />{" "}
          Hot
          <input
            type="radio"
            name="temp"
            // value={props.state.temp}
            value={"cold"}
            onChange={props.handleInputChange}
            selected={props.state.temp}
            checked={props.state.drinktype === "Frappe"?true:props.state.drinktype === "Cappucino"?false:props.state.temp === "cold"?true:false}
            
          />{" "}
          Cold
          <br />
          <p>Size:</p>
          <input
            type="radio"
            name="size"
            value={"Small"}
            onChange={props.handleInputChange}
            checked={props.state.size === "Small"?true:false}
          />{" "}
          Small
          <input
            type="radio"
            name="size"
            value={"Large"}
            onChange={props.handleInputChange}
            checked={props.state.size === ""?true:props.state.size === "Large"?true:false}

          />{" "}
          Large
          <br />
          <p>Extra Espresso:</p>
          <input
            type="radio"
            name="extraShots"
            value={"1"}
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "1"?true:false}
            
          />{" "}
          1 shot
          <input
            type="radio"
            name="extraShots"
            value={"2"}
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "2"?true:false}
          />{" "}
          2 shots
          <input
            type="radio"
            name="extraShots"
            value="3"
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "3"?true:false}
          />{" "}
          3 shots
          <input
            type="radio"
            name="extraShots"
            value="4"
            onChange={props.handleInputChange}
            checked={props.state.extraShots === "4"?true:false}
          />{" "}
          4 shots
          <br />
          <p>Milk Type:</p>
          <input
            type="radio"
            name="milk"
            value="Whole"
            onChange={props.handleInputChange}
            checked={props.state.milk === ""?true:props.state.milk === "Whole"?true:false}
          />{" "}
          Whole
          <input
            type="radio"
            name="milk"
            value="skim"
            onChange={props.handleInputChange}
            checked={props.state.milk === "skim"?true:false}
          />{" "}
          Skim
          <input
            type="radio"
            name="milk"
            value="soy"
            onChange={props.handleInputChange}
            checked={props.state.milk === "soy"?true:false}
          />{" "}
          Soy
          <input
            type="radio"
            name="milk"
            value="almond"
            onChange={props.handleInputChange}
            checked={props.state.milk === "almond"?true:false}
          />{" "}
          Almond
          <br />
          
          
          <p>Flavors</p>
          <input
            type="checkbox"
            name="vanilla"
            value={props.state.vanilla === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.vanilla === "true"?true:false}
          />{" "}
          Vanilla
          <input
            type="checkbox"
            name="hazlenut"
            value={props.state.hazlenut === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.hazlenut === "true"?true:false}
          />{" "}
          Hazzlenut
          <input
            type="checkbox"
            name="mocha"
            value={props.state.mocha === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.drinktype === "Mocha"?true:props.state.mocha === "true"?true:false}
          />{" "}
          Mocha
          <input
            type="checkbox"
            name="whiteMocha"
            value={props.state.whiteMocha === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.whiteMocha === "true"?true:false}
          />{" "}
          White Mocha
          <input
            type="checkbox"
            name="SFVanilla"
            value={props.state.SFVanilla === "false"?"true":"false"}
            onChange={props.handleInputChange}
            checked={props.state.SFVanilla === "true"?true:false}

          />{" "}
          SF Vanilla
          <p>Notes</p>
          <textarea rows="5" cols="40" value={props.state.notes} name="notes" onChange={props.handleInputChange}></textarea>
          <br />
          <input type="submit" value="Add New Drink" onClick={props.handleNewDrink}/>
          <input type="submit" value="Submit Order" onClick={props.submitOrder}/>
        </form> */}
      </div>
    )
}

export default drinkForm;