import React from "react";
import Button from "./Button";
import { useState } from "react";

function GuessControl({onGuess}){
    const [currentGuess, setCurrentGuess] = useState("");
    function handleInputChange(event){
        setCurrentGuess(event.target.value);
    };
    function onSubmitGuess(){
        const parcedGuess = Number(currentGuess);
        if(!isNaN(parcedGuess)){
            onGuess(parcedGuess);
            setCurrentGuess("");
        }
    }
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
}
export default GuessControl;