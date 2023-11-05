import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

/**
 *
 * Returns a random integer number from 1-100 inclusive
 */
function getRandomNumber() {
    const ranNum = Math.floor(Math.random() * 100) + 1;
    console.log(ranNum);
    return ranNum;
}

const MAX_ATTEMPTS = 5;
// use this variable outside to avoid its rendering everytime
let numberToGuess = getRandomNumber();

function NumberGuessingGame() {
    const [numberOfGuesses, setNumberOfGuesses] = useState(0);
    const [latestGuess, setLatestGuess] = useState(null);
    const [guessIsNan, setGuessIsNan] = useState(false);

    const handleGuess = (guess) => {
        setLatestGuess(guess);
        setNumberOfGuesses(numberOfGuesses + 1);
    };

    const handleReset = () => {
        numberToGuess = getRandomNumber();
        setLatestGuess(null);
        setNumberOfGuesses(0);
    };

    const checkIsNumber = (guess) => {
        if (guess < 1 || guess > 100) {
            setGuessIsNan(true);
            return;
        }
        setGuessIsNan(false);
        handleGuess(guess);
    };

    const isCorrectGuess = latestGuess === numberToGuess;
    const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

    return (
        <div>
            <h2>I'm thinking of a number from 1 to 100.</h2>
            <h2>
                Can you guess the number I am thinking of in {MAX_ATTEMPTS}{" "}
                tries?
            </h2>
            <GuessControl onGuess={checkIsNumber} isGameOver={isGameOver} />
            {isGameOver && (
                <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
            )}
            {!isGameOver && !guessIsNan && (
                <GuessMessage
                    guess={latestGuess}
                    numberToGuess={numberToGuess}
                    numberOfGuesses={numberOfGuesses}
                />
            )}
            {guessIsNan && <p>Please, provide number between 1-100.</p>}
        </div>
    );
}

export default NumberGuessingGame;