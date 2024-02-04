import React, { Component } from "react";
import Button from "./Button";
import { useState } from 'react';


function GuessControl({ onGuess }) {
  const [currentGuess, setCurrentGuess] = useState('');

  const handleInputChange = (e) => {
    setCurrentGuess(e.target.value);
  };

  const onSubmitGuess = () => {
    const guessAsNumber = parseInt(currentGuess, 10); 
    onGuess(guessAsNumber); 
    setCurrentGuess(''); 
  };

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
};


export default GuessControl;
