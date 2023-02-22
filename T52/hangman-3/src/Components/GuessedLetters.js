// GuessedLetters.js
import React from "react";
import { Typography } from "@material-ui/core";

const GuessedLetters = ({ letters }) => {
    return (
        <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            Guessed Letters: {letters.join(", ")}
        </Typography>
    );
};

export default GuessedLetters;