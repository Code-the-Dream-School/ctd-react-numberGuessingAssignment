import React, { useState } from "react";

import Button from "./Button";

const GuessControl = ({ onGuess }) => {
    const [currentGuess, setCurrentGuess] = useState("");

    const handleInputChange = (event) => {
        let newGuessNumber = event.target.value;
        setCurrentGuess(newGuessNumber);
    };

    const onSubmitGuess = (event) => {
        event.preventDefault();
        onGuess(Number(currentGuess));
        setCurrentGuess("");
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
