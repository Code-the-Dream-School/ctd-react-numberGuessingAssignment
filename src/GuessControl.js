import React, { useState } from "react";
import Button from "./Button";


function GuessControl() {
  
  const [ currentGuess, setCurrentGuess ] = useState('')
  
  const handleInputChange = (event) =>  {
    setCurrentGuess( Number(event.target.value) );
  }

  const onSubmitGuess = () => {
    setCurrentGuess('')
  }

  return (
    <>
      <div>
        <input
          type="number"
          value={currentGuess}
          onChange={handleInputChange}
        />
        <Button onClick={onSubmitGuess}>Submit Guess</Button>
      </div>
    </>
  )
}


export default GuessControl;
