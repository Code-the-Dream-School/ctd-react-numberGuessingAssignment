
import Button from "./Button";
import React, { useState } from 'react';

function GuessControl({ onGuess }) {
  const [currentGuess, setCurrentGuess] = useState([]);

  const onSubmitGuess = () => {

    onGuess(Number(currentGuess));
    setCurrentGuess('');
  };

  const handleInputChange = (event) => {
    const newInput = event.target.value;
    setCurrentGuess(newInput);
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
};

export default GuessControl;
