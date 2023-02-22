// LetterInput.js
import React from "react";
import { TextField, Button } from "@material-ui/core";

const LetterInput = ({ handleLetterGuess }) => {
    const [letter, setLetter] = React.useState("");

    const handleChange = (event) => {
        setLetter(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLetterGuess(letter);
        setLetter("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Guess a letter"
                value={letter}
                onChange={handleChange}
                style={{ marginRight: "1rem" }}
            />
            <Button variant="contained" color="primary" type="submit">
                Guess
            </Button>
        </form>
    );
};

export default LetterInput;