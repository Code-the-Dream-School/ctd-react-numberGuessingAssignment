import Button from "./Button";
import React, { useState } from "react";

function GuessControl({ onGuess }) {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  const onSubmitGuess = () => {
    if (currentGuess !== "") {
      onGuess(currentGuess);
      setCurrentGuess("");
    }
  };

  return (
    <>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </>
  );
}

export default GuessControl;
