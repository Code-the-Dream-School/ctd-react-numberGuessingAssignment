//import React, { Component } from "react";
import { useState } from "react";
import Button from "./Button";
function GuessControl({ onGuess }) {
  const [currentGuess, setCurrentGuess] = useState("");
  const handleInputChange = (e) => {
    setCurrentGuess(e.target.value);
  };
  function onSubmitGuess() {
    onGuess(Number(currentGuess));
    setCurrentGuess("");
  }
  return (
    <>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </>
  );
}
export default GuessControl;
