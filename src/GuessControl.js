import React, { useState } from "react";
import Button from "./Button";

const GuessControl = (props) => {

  const [currentGuess, setCurrentGuess] = useState("")

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  }

  const onSubmitGuess = (event) => {
    event.preventDefault()
    props.onGuess(Number(currentGuess))
    setCurrentGuess("")
  }

  return (
    <div>
      <form onSubmit={onSubmitGuess}>
        <input
          type="number"
          value={currentGuess}
          onChange={handleInputChange}
          min="1"
          max="100"
        />
        <Button>Submit Guess</Button>
      </form>
    </div>
  );
}


export default GuessControl;
