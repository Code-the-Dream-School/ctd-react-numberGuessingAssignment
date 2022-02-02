import React, { useState } from "react";
import Button from "./Button";

const GuessControl = ({ onGuess }) => {
	const [currentGuess, setCurrentGuess] = useState("");

	function handleInputChange(event) {
		setCurrentGuess(event.target.value);
	}

	function onSubmitGuess() {
		onGuess(parseInt(currentGuess));
		setCurrentGuess("");
	}

	return (
		<div>
			<input
				type="number"
				value={currentGuess} //state. ?
				onChange={handleInputChange}
			/>
			<Button onClick={onSubmitGuess}>Submit Guess</Button>
		</div>
	);
};

export default GuessControl;
