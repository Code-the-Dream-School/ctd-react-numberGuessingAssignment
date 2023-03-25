import React, { useState} from "react";
import Button from "./Button";

function GuessControl (props){

  const [currentGuess,setCurrentGuess] = useState("")

  function handleInputChange(event) {
    setCurrentGuess(event.target.value)
    console.log(event)
  }
  function onSubmitGuess() {
      props.onGuess(Number(currentGuess));
      setCurrentGuess("");
      
    }

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}
    /**
     * These lines are required to make the methods/functions declared on this
     *  class have the correct `this` object when they run.
     */
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.onSubmitGuess = this.onSubmitGuess.bind(this);
  
//     /**
//      * These lines are required to make the methods/functions declared on this
//      *  class have the correct `this` object when they run.
//      */
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.onSubmitGuess = this.onSubmitGuess.bind(this);
  
  //   // Since the values from an HTML input are strings by default,
  //   //  convert to a number for the returned guess value
  //   //  by passing in the string to the Number function.
  //   // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
  

export default GuessControl;
