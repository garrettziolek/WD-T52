// GifDisplay.js
import React from "react";

const hangmanImages = [
    require("./gifs/hangman-0.png"),
    require("./gifs/hangman-1.png"),
    require("./gifs/hangman-2.png"),
    require("./gifs/hangman-3.png"),
    require("./gifs/hangman-4.png"),
    require("./gifs/hangman-5.png"),
    require("./gifs/hangman-6.png"),
    require("./gifs/hangman-7.png"),
    require("./gifs/hangman-8.png"),
    require("./gifs/hangman-9.png"),
    require("./gifs/hangman-10.png"),
];

const GifDisplay = ({ gifNumber }) => {
    return (
        <div className="gif-container">
            <img
                src={hangmanImages[gifNumber]}
                alt="Hangman"
                className="hangman-gif"
            />
        </div>
    );
};

export default GifDisplay;
