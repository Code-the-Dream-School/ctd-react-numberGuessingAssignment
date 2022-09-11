import React, { useState } from 'react';
import Button from './Button';

const GuessControl = ({ onGuess }) => {
    const [currentGuess, setCurrentGuess] = useState('');
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

    function handleInputChange(event) {
        setCurrentGuess(event.target.value);
    }
    function onSubmitGuess() {
        onGuess(Number(currentGuess));
        setCurrentGuess('');
    }
};

export default GuessControl;
