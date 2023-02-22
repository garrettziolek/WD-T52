import React from "react";
import { Typography } from "@material-ui/core";

function GameResult({ win, wordToGuess, gameOver }) {
    return (
        <>
            {gameOver && (
                <div>
                    <Typography variant="h4" style={{ marginTop: "20px" }}>
                        {win ? "You Win!" : "You Lose"}
                    </Typography>
                    {!win && (
                        <Typography variant="h5" style={{ marginTop: "20px" }}>
                            The word was: {wordToGuess}
                        </Typography>
                    )}
                </div>
            )}
        </>
    );
}

export default GameResult;
