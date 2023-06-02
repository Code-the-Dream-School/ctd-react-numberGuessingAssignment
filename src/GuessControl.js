// import React, { Component } from "react";
import React, { useState } from "react";
import Button from "./Button";

function GuessControl({ onGuess }) {
  const [currentGuess, setCurrentGuess] = useState("");

  // class GuessControl extends Component {
  //   constructor(props) {
  //     super(props);

  // this.state = {
  //   currentGuess: "",
  // };
  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess("");
  };

  /**
   * These lines are required to make the methods/functions declared on this
   *  class have the correct `this` object when they run.
   */
  // this.handleInputChange = this.handleInputChange.bind(this);
  // this.onSubmitGuess = this.onSubmitGuess.bind(this);

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };


  // handleInputChange(event) {
  //   // this.setState({ currentGuess: event.target.value });
  // }

  // onSubmitGuess() {
  //   // Since the values from an HTML input are strings by default,
  //   //  convert to a number for the returned guess value
  //   //  by passing in the string to the Number function.
  //   // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
  //   this.props.onGuess(Number(this.state.currentGuess));
  //   this.setState({ currentGuess: "" });
  // }


  // render() {
  //   return (
  //     <div>
  //       <input
  //         type="number"
  //         value={this.state.currentGuess}
  //         onChange={this.handleInputChange}
  //       />
  //       <Button onClick={this.onSubmitGuess}>Submit Guess</Button>
  //     </div>
  //   );
  // }
  // }
  // }
  return (
    <div>
      <input type="number"
        value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}> Submit Guess </Button>
    </div>
  );
}

export default GuessControl;
