import React, { Component } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";
import { useState } from 'react';


function NumberGuessingGame() {

  const MAX_ATTEMPTS = 5;

  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess(guess) {
    const guessAsNumber = Number(guess);

    setLatestGuess(guessAsNumber);
    setNumberOfGuesses(numberOfGuesses + 1);
  }

  function handleReset() {
    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);
  }

  const isGameOver = numberOfGuesses === MAX_ATTEMPTS || latestGuess === numberToGuess;

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?</h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver ? (
        <GameOver
          hasWon={latestGuess === numberToGuess} 
          onReset={handleReset} />
      ) : (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
}

export default NumberGuessingGame;
