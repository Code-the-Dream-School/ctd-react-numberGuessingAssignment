import Button from "./Button";

function GameOver({ hasWon, onReset }) {
    return (
        <div>
            {hasWon && <h2>Congratulation! You guessed my number.</h2>}
            {!hasWon && (
                <h2>
                    You didn't guess my number. Would you like to try again?
                </h2>
            )}
            <Button onClick={onReset}>Play Again!</Button>
        </div>
    );
}

export default GameOver;
