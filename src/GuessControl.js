import React, {Component, useState} from "react";
import Button from "./Button";

function GuessControl({onGuess})  {

  const [currentGuess, setCurrentGuess ] = useState("")

    const onSubmitGuess = () => {
        onGuess(currentGuess)
        setCurrentGuess("")
    }
  return (
      <div>
        <input
            type="number"
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <Button onClick={onSubmitGuess}>Submit Guess</Button>
      </div>
  );
}

export default GuessControl