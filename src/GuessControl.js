import React, { Component } from "react";
import Button from "./Button";
import { useState } from "react";

const GuessControl = ({ onGuess }) => {

  const [currentGuess, setCurrentGuess] = useState('');

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);

  }

  const onSubmitGuess = () => {
    onGuess(Number(currentGuess)); // Calling the onGuess function prop with the current guess 
    setCurrentGuess('');    
  }
  return (
      <div>
        <input
          type="number"
          value={currentGuess}
          onChange={handleInputChange}
        />
        <Button onClick={ ()=> onSubmitGuess()}>Submit Guess</Button>
      </div >
    );

}
 

export default GuessControl;
