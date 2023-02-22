import React from "react";
import { Typography } from "@material-ui/core";

const GuessesRemaining = ({ guesses }) => {
    return (
        <Typography className="guesses-remaining" variant="h5" style={{ textAlign: "center" }}>
            Guesses Remaining: {guesses}
        </Typography>
    );
};

export default GuessesRemaining;