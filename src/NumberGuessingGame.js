import React, { useState } from 'react';
import GuessControl from './GuessControl';
import GuessMessage from './GuessMessage';
import GameOver from './GameOver';

/**
 *
 * Returns a random integer number from 1-100 inclusive
 */
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

// Create a new function component called NumberGuessingGame.
function NumberGuessingGame() {
    // Create 3 state variables and their setters for numberToGuess, numberOfGuesses, and latestGuess and initialize them to the same values from the class component version. (Make sure to import useState)
    const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
    const [numberOfGuesses, setNumberOfGuesses] = useState(0);
    const [latestGuess, setLatestGuess] = useState(null);

    // Create a handleGuess function that will be passed in to the GuessControl component as the onGuess prop. This function should take the guess as an argument and set the latestGuess state with the guess (converted to a number using the Number function) and increment the numberOfGuesses state.
    function handleGuess(guess) {
        setLatestGuess(Number(guess));
        setNumberOfGuesses(numberOfGuesses + 1);
    }

    //  Create a handleReset function within the component that resets all 3 of the state properties the same way the handleReset function from the class component reset them. Pass this function to the GameOver component as the onReset prop.
    function handleReset() {
        setNumberToGuess(getRandomNumber());
        setNumberOfGuesses(0);
        setLatestGuess(null);
    }
    // Copy the logic and return value from the render function in the class component to be in the new function component. Remove any references to this. since those will be replaced with new references.
    // Update all references from the class component that referred to this.<something> to refer to the correct variable or function for the new function component.
    const isCorrectGuess = latestGuess === numberToGuess;

    const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

    return (
        <div>
            <h2>I'm thinking of a number from 1 to 100.</h2>
            <h2>
                Can you guess the number I am thinking of in {MAX_ATTEMPTS}{' '}
                tries?
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

//  Rename the current NumberGuessingGame class to NumberGuessingGameOld if you want to keep it a reference while converting the code.
// class NumberGuessingGameOld extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             numberToGuess: getRandomNumber(),
//             numberOfGuesses: 0,
//             latestGuess: null,
//         };

/**
 * These lines are required to make the methods/functions declared on this
 *  class have the correct `this` object when they run.
 */
// this.handleGuess = this.handleGuess.bind(this);
// this.handleReset = this.handleReset.bind(this);
// }

// handleGuess(guess) {
//     this.setState({
//         latestGuess: guess,
//         numberOfGuesses: this.state.numberOfGuesses + 1,
//     });
// }

// handleReset() {
//     this.setState({
//         numberToGuess: getRandomNumber(),
//         numberOfGuesses: 0,
//         latestGuess: null,
//     });
// }

//     render() {
//         const isCorrectGuess =
//             this.state.latestGuess === this.state.numberToGuess;

//         const isGameOver =
//             isCorrectGuess || this.state.numberOfGuesses === MAX_ATTEMPTS;

//         return (
//             <div>
//                 <h2>I'm thinking of a number from 1 to 100.</h2>
//                 <h2>
//                     Can you guess the number I am thinking of in {MAX_ATTEMPTS}{' '}
//                     tries?
//                 </h2>
//                 <GuessControl onGuess={this.handleGuess} />
//                 {isGameOver && (
//                     <GameOver
//                         hasWon={isCorrectGuess}
//                         onReset={this.handleReset}
//                     />
//                 )}
//                 {!isGameOver && (
//                     <GuessMessage
//                         guess={this.state.latestGuess}
//                         numberToGuess={this.state.numberToGuess}
//                         numberOfGuesses={this.state.numberOfGuesses}
//                     />
//                 )}
//             </div>
//         );
//     }
// }

export default NumberGuessingGame;
