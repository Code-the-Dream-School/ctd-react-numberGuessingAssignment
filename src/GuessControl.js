import React, {useState } from "react";
import Button from "./Button";

const GuessControl = ({onGuess, disabled}) => {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  }

  const onSubmitGuess = () => {
    onGuess(+currentGuess);
    setCurrentGuess("");
  };

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
        disabled={disabled}
      />
      <Button onClick={onSubmitGuess} disabled={disabled}>
        Submit Guess
      </Button>
    </div>
  );
};

export default GuessControl

