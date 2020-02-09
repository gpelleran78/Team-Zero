import React from "react";
import "../App/DrinkForm.css";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

const drinkForm = (props) => {
  // console.log(props)
  return (
    // grade>90?"a":grade>80?"B":"F"
    <div className="container imageANDTextContainer">

      <div className="row rowWITHHeaderANDOrderList">
        <h1 className="orderingHeader">steps to ordering</h1>

const drinkForm = (props) => {
// console.log(props)
    return(
// grade>90?"a":grade>80?"B":"F"
<div>
  {props.state.drinktype === "Lattes"?(
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
        <ol className="orderStepList">
          <li>select a drink from above</li>
          <li>customize your drink order</li>
          <li>add your drink to your cart</li>
        </ol>
      </div>

      <div className="row">
        {/* <Image className="cactusImage" src="https://png.pngtree.com/png-vector/20190327/ourlarge/pngtree-continuous-line-drawing-of-vector-set-of-cute-cactus-black-and-png-image_883542.jpg"></Image> */}
        <Image className="cactusImage" src="https://media.istockphoto.com/vectors/continuous-line-drawing-of-vector-set-of-cute-cactus-black-and-white-vector-id1022464060"></Image>

      </div>

      {/* Customizig drink form */}
      {props.state.drinktype === "Lattes" ? (
        <Form action="">

          {/* This is the temp section of the form  */}
          <div className="newFormSection">
            <p>Would you like your Latte, hot or cold?</p>

            <input
              type="radio"
              name="temp"
              // value={props.state.temp}
              value={"hot"}
              onChange={props.handleInputChange}
              selected={props.state.temp}
              checked={props.state.drinktype === "Cappucino" ? true : props.state.drinktype === "Frappe" ? false : props.state.temp === "hot" ? true : false}
            />{" "}
            Hot

            <input
              type="radio"
              name="temp"
              // value={props.state.temp}
              value={"cold"}
              onChange={props.handleInputChange}
              selected={props.state.temp}
              checked={props.state.drinktype === "Frappe" ? true : props.state.drinktype === "Cappucino" ? false : props.state.temp === "cold" ? true : false}
            />{" "}
            Cold
            </div>

          {/* This  is the size section of the form */}
          <div className="newFormSection">
            <p>What size would you like your drink?</p>
            <input
              type="radio"
              name="size"
              value={"Small"}
              onChange={props.handleInputChange}
              checked={props.state.size === "Small" ? true : false}
            />{" "}
            Small

            <input
              type="radio"
              name="size"
              value={"Large"}
              onChange={props.handleInputChange}
              checked={props.state.size === "" ? true : props.state.size === "Large" ? true : false}
            />{" "}
            Large <span className="smallDefaultText"> (default) </span>
          </div>

          {/* This is the expresso amount section of the form  */}
          <div className="newFormSection">
            <p>Customize the amount of Espresso shots. </p>
            <input
              type="radio"
              name="extraShots"
              value={"1"}
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "1" ? true : false}

            />{" "}
            1 shot
    <input
              type="radio"
              name="extraShots"
              value={"2"}
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "2" ? true : false}
            />{" "}
            2 shots
    <input
              type="radio"
              name="extraShots"
              value="3"
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "3" ? true : false}
            />{" "}
            3 shots
    <input
              type="radio"
              name="extraShots"
              value="4"
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "4" ? true : false}
            />{" "}
            4 shots
          </div>

          {/* This is the milk type of the form  */}
          <div className="newFormSection">
            <p>What type of milk would you like? </p>
            <input
              type="radio"
              name="milk"
              value="Whole"
              onChange={props.handleInputChange}
              checked={props.state.milk === "" ? true : props.state.milk === "Whole" ? true : false}
            />{" "}
            Whole
    <input
              type="radio"
              name="milk"
              value="skim"
              onChange={props.handleInputChange}
              checked={props.state.milk === "skim" ? true : false}
            />{" "}
            Skim
    <input
              type="radio"
              name="milk"
              value="soy"
              onChange={props.handleInputChange}
              checked={props.state.milk === "soy" ? true : false}
            />{" "}
            Soy
    <input
              type="radio"
              name="milk"
              value="almond"
              onChange={props.handleInputChange}
              checked={props.state.milk === "almond" ? true : false}
            />{" "}
            Almond
          </div>

          {/* this is the falvors section of the form  */}
          <div className="newFormSection">
            <p>Customize the falvor of your drink!</p>
            <input className="customCheckBox"
              type="checkbox"
              name="vanilla"
              value={props.state.vanilla === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.vanilla === "true" ? true : false}
            />{" "}
            Vanilla
    <input className="customCheckBox"
              type="checkbox"
              name="hazlenut"
              value={props.state.hazlenut === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.hazlenut === "true" ? true : false}
            />{" "}
            Hazzlenut
    <input className="customCheckBox"
              type="checkbox"
              name="mocha"
              value={props.state.mocha === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.drinktype === "Mocha" ? true : props.state.mocha === "true" ? true : false}
            />{" "}
            Mocha
    <input className="customCheckBox"
              type="checkbox"
              name="whiteMocha"
              value={props.state.whiteMocha === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.whiteMocha === "true" ? true : false}
            />{" "}
            White Mocha
    <input className="customCheckBox"
              type="checkbox"
              name="SFVanilla"
              value={props.state.SFVanilla === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.SFVanilla === "true" ? true : false}

            />{" "}
            SF Vanilla
          </div>

          {/* this  is the notes section of the form  */}
          <div className="newFormSection">
            <textarea className="notesArea" placeholder="Add extra notes about your drink for your barista." rows="5" cols="40" value={props.state.notes} name="notes" onChange={props.handleInputChange}></textarea>
            <br />
          </div>

          {/* "Add drink to cart btn" */}
          <input className="addDrinkToCartBTN btn" type="submit" value="Add To Cart" onClick={props.handleNewDrink} />

        </Form>



        // ++++++++++++++++++++++++++++++++++++++++
        // ++++++++++++++++++++++++++++++++++++++++
        // This is the start of a new drink 
      ) : props.state.drinktype === "Cappucino" ? (
        <form action="">

          {/* This is the temp section of the form  */}
          <div className="newFormSection">
            <p>Our Cappucinos are only served hot</p>

            <input
              type="radio"
              name="temp"
              // value={props.state.temp}
              value={"hot"}
              onChange={props.handleInputChange}
              selected={props.state.temp}
              checked={props.state.drinktype === "Cappucino" ? true : props.state.drinktype === "Frappe" ? false : props.state.temp === "hot" ? true : false}
            />{" "}
            Hot
            </div>

          {/* This  is the size section of the form */}
          <div className="newFormSection">
            <p>What size would you like your drink?</p>

            <input
              type="radio"
              name="size"
              value={"Small"}
              onChange={props.handleInputChange}
              checked={props.state.size === "Small" ? true : false}
            />{" "}
            Small

          <input
              type="radio"
              name="size"
              value={"Large"}
              onChange={props.handleInputChange}
              checked={props.state.size === "" ? true : props.state.size === "Large" ? true : false}
            />{" "}
            Large <span className="smallDefaultText"> (default) </span>
          </div>


          {/* This is the expresso amount section of the form  */}
          <div className="newFormSection">
            <p>Customize the amount of Espresso shots. </p>

            <input
              type="radio"
              name="extraShots"
              value={"1"}
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "1" ? true : false}
            />{" "}
            1 shot

          <input
              type="radio"
              name="extraShots"
              value={"2"}
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "2" ? true : false}
            />{" "}
            2 shots

          <input
              type="radio"
              name="extraShots"
              value="3"
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "3" ? true : false}
            />{" "}
            3 shots

          <input
              type="radio"
              name="extraShots"
              value="4"
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "4" ? true : false}
            />{" "}
            4 shots
          </div>


          {/* This is the milk type of the form  */}
          <div className="newFormSection">
            <p>What type of milk would you like? </p>

            <input
              type="radio"
              name="milk"
              value="Whole"
              onChange={props.handleInputChange}
              checked={props.state.milk === "" ? true : props.state.milk === "Whole" ? true : false}
            />{" "}
            Whole

          <input
              type="radio"
              name="milk"
              value="skim"
              onChange={props.handleInputChange}
              checked={props.state.milk === "skim" ? true : false}
            />{" "}
            Skim

          <input
              type="radio"
              name="milk"
              value="soy"
              onChange={props.handleInputChange}
              checked={props.state.milk === "soy" ? true : false}
            />{" "}
            Soy

          <input
              type="radio"
              name="milk"
              value="almond"
              onChange={props.handleInputChange}
              checked={props.state.milk === "almond" ? true : false}
            />{" "}
            Almond
          </div>

          {/* this is the falvors section of the form  */}
          <div className="newFormSection">
            <p>Customize the falvor of your drink!</p>
            <input
              type="checkbox"
              name="vanilla"
              value={props.state.vanilla === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.vanilla === "true" ? true : false}
            />{" "}
            Vanilla

          <input
              type="checkbox"
              name="hazlenut"
              value={props.state.hazlenut === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.hazlenut === "true" ? true : false}
            />{" "}
            Hazzlenut

          <input
              type="checkbox"
              name="mocha"
              value={props.state.mocha === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.drinktype === "Mocha" ? true : props.state.mocha === "true" ? true : false}
            />{" "}
            Mocha

          <input
              type="checkbox"
              name="whiteMocha"
              value={props.state.whiteMocha === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.whiteMocha === "true" ? true : false}
            />{" "}
            White Mocha

          <input
              type="checkbox"
              name="SFVanilla"
              value={props.state.SFVanilla === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.SFVanilla === "true" ? true : false}
            />{" "}
            SF Vanilla
          </div>

          {/* this  is the notes section of the form  */}
          <div className="newFormSection">
            <p>Add extra notes about your drink for your barista.</p>
            <textarea rows="5" cols="40" value={props.state.notes} name="notes" onChange={props.handleInputChange}></textarea>
            <br />
            <input type="submit" value="Add Drink To Cart" onClick={props.handleNewDrink} />
          </div>

          {/* "Add drink to cart btn" */}
          <input type="submit" value="Add Drink To Cart" onClick={props.handleNewDrink} />

        </form>


        // ++++++++++++++++++++++++++++++++++++++++
        // ++++++++++++++++++++++++++++++++++++++++
        // This is the start of a new drink 
      ) : props.state.drinktype === "Mocha" ? (
        <form action="">

          {/* This is the temp section of the form  */}
          <div className="newFormSection">
            <p>Would you like your Mocha drink hot or cold?</p>

            <input
              type="radio"
              name="temp"
              // value={props.state.temp}
              value={"hot"}
              onChange={props.handleInputChange}
              selected={props.state.temp}
              checked={props.state.drinktype === "Cappucino" ? true : props.state.drinktype === "Frappe" ? false : props.state.temp === "hot" ? true : false}
            />{" "}
            Hot

          <input
              type="radio"
              name="temp"
              // value={props.state.temp}
              value={"cold"}
              onChange={props.handleInputChange}
              selected={props.state.temp}
              checked={props.state.drinktype === "Frappe" ? true : props.state.drinktype === "Cappucino" ? false : props.state.temp === "cold" ? true : false}
            />{" "}
            Cold

          </div>

          {/* This  is the size section of the form */}
          <div className="newFormSection">
            <p>What size would you like your drink?</p>

            <input
              type="radio"
              name="size"
              value={"Small"}
              onChange={props.handleInputChange}
              checked={props.state.size === "Small" ? true : false}
            />{" "}
            Small

          <input
              type="radio"
              name="size"
              value={"Large"}
              onChange={props.handleInputChange}
              checked={props.state.size === "" ? true : props.state.size === "Large" ? true : false}
            />{" "}
            Large <span className="smallDefaultText"> (default) </span>

          </div>


          {/* This is the expresso amount section of the form  */}
          <div className="newFormSection">
            <p>Customize the amount of Espresso shots. </p>

            <input
              type="radio"
              name="extraShots"
              value={"1"}
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "1" ? true : false}
            />{" "}
            1 shot

          <input
              type="radio"
              name="extraShots"
              value={"2"}
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "2" ? true : false}
            />{" "}
            2 shots

          <input
              type="radio"
              name="extraShots"
              value="3"
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "3" ? true : false}
            />{" "}
            3 shots

          <input
              type="radio"
              name="extraShots"
              value="4"
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "4" ? true : false}
            />{" "}
            4 shots
          </div>


          {/* This is the milk type of the form  */}
          <div className="newFormSection">
            <p>What type of milk would you like? </p>

            <input
              type="radio"
              name="milk"
              value="Whole"
              onChange={props.handleInputChange}
              checked={props.state.milk === "" ? true : props.state.milk === "Whole" ? true : false}
            />{" "}
            Whole

          <input
              type="radio"
              name="milk"
              value="skim"
              onChange={props.handleInputChange}
              checked={props.state.milk === "skim" ? true : false}
            />{" "}
            Skim

          <input
              type="radio"
              name="milk"
              value="soy"
              onChange={props.handleInputChange}
              checked={props.state.milk === "soy" ? true : false}
            />{" "}
            Soy

          <input
              type="radio"
              name="milk"
              value="almond"
              onChange={props.handleInputChange}
              checked={props.state.milk === "almond" ? true : false}
            />{" "}
            Almond
         </div>


          {/* this is the falvors section of the form  */}
          <div className="newFormSection">
            <p>Customize the falvor of your drink!</p>

            <input
              type="checkbox"
              name="vanilla"
              value={props.state.vanilla === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.vanilla === "true" ? true : false}
            />{" "}
            Vanilla

          <input
              type="checkbox"
              name="hazlenut"
              value={props.state.hazlenut === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.hazlenut === "true" ? true : false}
            />{" "}
            Hazzlenut

          <input
              type="checkbox"
              name="mocha"
              value={props.state.mocha === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.drinktype === "Mocha" ? true : props.state.mocha === "true" ? true : false}
            />{" "}
            Mocha

          <input
              type="checkbox"
              name="whiteMocha"
              value={props.state.whiteMocha === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.whiteMocha === "true" ? true : false}
            />{" "}
            White Mocha

          <input
              type="checkbox"
              name="SFVanilla"
              value={props.state.SFVanilla === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.SFVanilla === "true" ? true : false}
            />{" "}
            SF Vanilla
          </div>


          {/* this  is the notes section of the form  */}
          <div className="newFormSection">
            <p>Add extra notes about your drink for your barista.</p>
            <textarea rows="5" cols="40" value={props.state.notes} name="notes" onChange={props.handleInputChange}></textarea>
            <br />
          </div>

          {/* "Add drink to cart btn" */}
          <input type="submit" value="Add Drink To Cart" onClick={props.handleNewDrink} />

        </form>


        // ++++++++++++++++++++++++++++++++++++++++
        // ++++++++++++++++++++++++++++++++++++++++
        // This is the start of a new drink 
      ) : props.state.drinktype === "Frappe" ? (
        <form action="">

          {/* This is the temp section of the form  */}
          <div className="newFormSection">
            <p>Our Frappes are only served cold</p>

            <input
              type="radio"
              name="temp"
              // value={props.state.temp}
              value={"cold"}
              onChange={props.handleInputChange}
              selected={props.state.temp}
              checked={props.state.drinktype === "Frappe" ? true : props.state.drinktype === "Cappucino" ? false : props.state.temp === "cold" ? true : false}

            />{" "}
            Cold
</div>

          {/* This  is the size section of the form */}
          <div className="newFormSection">
            <p>What size would you like your drink?</p>

            <input
              type="radio"
              name="size"
              value={"Small"}
              onChange={props.handleInputChange}
              checked={props.state.size === "Small" ? true : false}
            />{" "}
            Small

          <input
              type="radio"
              name="size"
              value={"Large"}
              onChange={props.handleInputChange}
              checked={props.state.size === "" ? true : props.state.size === "Large" ? true : false}
            />{" "}
            Large <span className="smallDefaultText"> (default) </span>
          </div>


          {/* This is the expresso amount section of the form  */}
          <div className="newFormSection">
            <p>Customize the amount of Espresso shots. </p>

            <input
              type="radio"
              name="extraShots"
              value={"1"}
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "1" ? true : false}
            />{" "}
            1 shot

          <input
              type="radio"
              name="extraShots"
              value={"2"}
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "2" ? true : false}
            />{" "}
            2 shots

          <input
              type="radio"
              name="extraShots"
              value="3"
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "3" ? true : false}
            />{" "}
            3 shots

          <input
              type="radio"
              name="extraShots"
              value="4"
              onChange={props.handleInputChange}
              checked={props.state.extraShots === "4" ? true : false}
            />{" "}
            4 shots
          </div>



          {/* This is the milk type of the form  */}
          <div className="newFormSection">
            <p>What type of milk would you like? </p>

            <input
              type="radio"
              name="milk"
              value="Whole"
              onChange={props.handleInputChange}
              checked={props.state.milk === "" ? true : props.state.milk === "Whole" ? true : false}
            />{" "}
            Whole

          <input
              type="radio"
              name="milk"
              value="soy"
              onChange={props.handleInputChange}
              checked={props.state.milk === "soy" ? true : false}
            />{" "}
            Soy
          </div>


          {/* this is the falvors section of the form  */}
          <div className="newFormSection">
            <p>Customize the falvor of your drink!</p>

            <input
              type="checkbox"
              name="vanilla"
              value={props.state.vanilla === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.vanilla === "true" ? true : false}
            />{" "}
            Vanilla

          <input
              type="checkbox"
              name="hazlenut"
              value={props.state.hazlenut === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.hazlenut === "true" ? true : false}
            />{" "}
            Hazzlenut

          <input
              type="checkbox"
              name="mocha"
              value={props.state.mocha === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.drinktype === "Mocha" ? true : props.state.mocha === "true" ? true : false}
            />{" "}
            Mocha

          <input
              type="checkbox"
              name="whiteMocha"
              value={props.state.whiteMocha === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.whiteMocha === "true" ? true : false}
            />{" "}
            White Mocha

          <input
              type="checkbox"
              name="SFVanilla"
              value={props.state.SFVanilla === "false" ? "true" : "false"}
              onChange={props.handleInputChange}
              checked={props.state.SFVanilla === "true" ? true : false}
            />{" "}
            SF Vanilla
          </div>

          {/* this  is the notes section of the form  */}
          <div className="newFormSection">
            <p>Add extra notes about your drink for your barista.</p>
            <textarea rows="5" cols="40" value={props.state.notes} name="notes" onChange={props.handleInputChange}></textarea>
            <br />
            <input type="submit" value="Add Drink To Cart" onClick={props.handleNewDrink} />
          </div>

        </form>

        // Choose a drink text 
      ) : <span></span>}

      {/* End of the entire form */}
    </div>
  )
}

export default drinkForm;