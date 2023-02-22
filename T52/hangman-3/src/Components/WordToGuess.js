// WordToGuess.js
import React from "react";
import { Typography } from "@material-ui/core";

const WordToGuess = ({ word }) => {
    return (
        <Typography variant="h5" style={{ textAlign: "center" }}>
            {word}
        </Typography>
    );
};

export default WordToGuess;