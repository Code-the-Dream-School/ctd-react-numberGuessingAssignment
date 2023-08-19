import React, {useState} from 'react';
import Button from "./Button";

function GuessControl ({onGuess}) {

  const [currentGuess, setCurrentGuess] = useState('');

  function handleInputChange (event) {
    const newInputChange = event.target.value;
    setCurrentGuess(newInputChange);
  };

  function onSubmitGuess () {
      if (currentGuess !== '') {
      //convert to a number
      const guessNumber = Number(currentGuess);
      onGuess(guessNumber)
      //resets to an empty string
      setCurrentGuess('');
      };
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
}

export default GuessControl;