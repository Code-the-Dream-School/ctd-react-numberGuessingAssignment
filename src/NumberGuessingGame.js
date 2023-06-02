import React, { Component, useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";



const NumberGuessingGame = () => {
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  const [latestGuess, setLatestGuess] = useState(null);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);

  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }


  const MAX_ATTEMPTS = 5;

  const isCorrectGuess = latestGuess === numberToGuess;
  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  function handleGuess(guess) {

    (Number(guess));
    setNumberOfGuesses(numberOfGuesses + 1);
  }

  function handleReset() {

    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);

  }


  return (
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
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
}
// }
// }


export default NumberGuessingGame;





/**
 *
 * Returns a random integer number from 1-100 inclusive
 */
// function getRandomNumber() {
//   return Math.floor(Math.random() * 100) + 1;
// }

// const MAX_ATTEMPTS = 5;

// const isCorrectGuess = latestGuess === numberToGuess;
// const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;
// const handleGuess = (guess) => {
//   setLatestGuess(Number(guess));
//   setNumberOfGuesses(numberOfGuesses + 1);
// };
// class NumberGuessingGame extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       numberToGuess: getRandomNumber(),
//       numberOfGuesses: 0,
//       latestGuess: null,
//     };
/**
 * These lines are required to make the methods/functions declared on this
 *  class have the correct `this` object when they run.
 */
// this.handleGuess = this.handleGuess.bind(this);
// this.handleReset = this.handleReset.bind(this);
// }

// function handleGuess (guess) {
// setLatestGuess (guess);
// setnumberOfGuesses (numberOfGuesses + 1);
//  }

  // function getRandomNumber() {
  //   return
  //   Math.floor(Math.random() * 100) + 1;
  // }

  // render() {
  //   const isCorrectGuess = this.state.latestGuess === this.state.numberToGuess;

  //   const isGameOver =
  //     isCorrectGuess || this.state.numberOfGuesses === MAX_ATTEMPTS;


