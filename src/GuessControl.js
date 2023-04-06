// import the useState hook from React.
import React, { useState } from "react";
import Button from "./Button";


// define a new function component called GuessControl that takes an onGuess prop 
function GuessControl({ onGuess }) {

  // create a state variable called currentGuess using the useState hook 
  // Replace with setCurrentGuess 
  const [currentGuess, setCurrentGuess] = useState("");


  // create a new function called handleInputChange that updates the currentGuess 
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  // create a new function called onSubmitGuess 
  const onSubmitGuess = () => {
    // Convert currentGuess to a number and call onGuess prop
    onGuess(Number(currentGuess));
    setCurrentGuess("");
  };
  // return the JSX that was originally in the render 
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

export default GuessControl;
