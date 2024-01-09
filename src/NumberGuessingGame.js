import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";


function NumberGuessingGame() {

  const [ numberData, setNumberData ] = useState({
      numberToGuess: getRandomNumber(),
      numberOfGuesses: 0,
      latestGuess: null,
  })

  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const MAX_ATTEMPTS = 5;

  const handleGuess = (guess) => {
    setNumberData({
      latestGuess: guess,
      numberOfGuesses: numberData.numberOfGuesses + 1,
    });
  }

  const handleReset = () => {
    setNumberData({
      numberToGuess: getRandomNumber(),
      numberOfGuesses: 0,
      latestGuess: null,
    });
  }

  const isCorrectGuess = numberData.latestGuess === numberData.numberToGuess;

  const isGameOver = isCorrectGuess || numberData.numberOfGuesses === MAX_ATTEMPTS;

  return (
    <>
      <div>
        <h2>I'm thinking of a number from 1 to 100.</h2>
        <h2>
          Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
        </h2>
        <GuessControl onGuess={handleGuess} />
        {isGameOver && (
          <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
        )}
        {!isGameOver && (
          <GuessMessage
            guess={numberData.latestGuess}
            numberToGuess={numberData.numberToGuess}
            numberOfGuesses={numberData.numberOfGuesses}
          />
        )}
      </div>
    </>
  )
} 

export default NumberGuessingGame;
