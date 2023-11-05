import React, { useState } from "react";
import Button from "./Button";

const GuessControl = ({ onGuess, isGameOver }) => {
    const [currentGuess, setCurrentGuess] = useState("");

    const handleInputChange = (event) => {
        setCurrentGuess(event.target.value);
    };

    const onSubmitGuess = () => {
        const guessNum = Number(currentGuess);
        onGuess(guessNum);
        setCurrentGuess("");
    };

    return (
        <div>
            <input
                name="inputNumber"
                type="number"
                value={currentGuess}
                onChange={handleInputChange}
            />
            <Button onClick={onSubmitGuess} disabled={isGameOver}>
                Submit Guess
            </Button>
        </div>
    );
};

export default GuessControl;