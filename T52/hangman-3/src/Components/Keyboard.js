import React from "react";
import { Button } from "@material-ui/core";

function Keyboard(props) {
    const handleLetterClick = (letter) => {
        props.handleLetterGuess(letter);
    };

    return (
        <div className="keyboard">
            {props.letters.map((letter, index) => (
                <Button
                    key={index}
                    variant="contained"
                    className="keyboard-button"
                    disabled={props.guessedLetters.includes(letter)}
                    onClick={() => handleLetterClick(letter)}
                >
                    {letter}
                </Button>
            ))}
        </div>
    );
}

export default Keyboard;
