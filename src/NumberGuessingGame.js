import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GameOver from "./GameOver";

const NumberGuessingGame = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  const MAX_ATTEMPTS = 5;

  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  const handleGuess = (guess) => {
    setLatestGuess(Number(guess));
    setNumberOfGuesses(numberOfGuesses + 1);
  };

  const handleReset = () => {
    setNumberToGuess(getRandomNumber);
    setNumberOfGuesses(0);
    setLatestGuess(null);
  };
  // place in this comment to enable a resubmit
  return (
    <div>
      <h1>Number Guessing Game</h1>
      <p>Guess the number between 1 and 100</p>

      <GuessControl onGuess={handleGuess} />

      {latestGuess !== null && (
        <p>
          Latest Guess: {latestGuess}, Number of Guesses: {numberOfGuesses}
        </p>
      )}

      {numberOfGuesses === MAX_ATTEMPTS || latestGuess === numberToGuess ? (
        <GameOver onReset={handleReset} />
      ) : null}
    </div>
  );
};

export default NumberGuessingGame;
