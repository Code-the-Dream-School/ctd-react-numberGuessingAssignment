import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

function NumberGuessingGame() {

  // Create 3 state variables and their setters for numberToGuess, numberOfGuesses,
  //  and latestGuess and initialize them to the same values from the class component version. 
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);


  // Create a handleGuess function that will be passed in to 
  // the GuessControl component as the onGuess prop
  function handleGuess(guess) {
    setLatestGuess(Number(guess));
    setNumberOfGuesses(numberOfGuesses + 1);
  }
  // Create a handleReset function within the component that resets all 3 of the state properties
  //  the same way the handleReset function from the class component reset them
  function handleReset() {
    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);
  }

  const isCorrectGuess = latestGuess === numberToGuess;
  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?</h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && <GameOver hasWon={isCorrectGuess} onReset={handleReset} />}
      {!isGameOver && (
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
