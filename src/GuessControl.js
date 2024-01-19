
import Button from "./Button";
import React, { useState } from 'react';

const  GuessControl = ({ onGuess }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  const onSubmitGuess = () => {

    onGuess(Number(currentGuess));

    setCurrentGuess("");
   
  };

  const handleInputChange = (event) => {

    setCurrentGuess(event.target.value);
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
