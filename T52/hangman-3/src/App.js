import React, { useState, useEffect } from "react"; // React hooks
import {
  Grid,
  Container,
} from "@material-ui/core"; // Material UI components for styling
import "./App.css"; // CSS file for styling
import Header from "./Components/Header";
import WordToGuess from "./Components/WordToGuess";
import GuessesRemaining from "./Components/GuessRemaining";
import GuessedLetters from "./Components/GuessedLetters";
import GifDisplay from "./Components/GifDisplay";
import RestartButton from "./Components/RestartButton";
import HelpButton from "./Components/HelpButton";
import Keyboard from "./Components/Keyboard";
import GameResult from "./Components/GameResult"; // Import all the components

function Hangman() { // Main component
  const [wordToGuess, setWordToGuess] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [guessesRemaining, setGuessesRemaining] = useState(10);
  const [gifNumber, setGifNumber] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  // Fetch a random word from the API, I used this implementation over using a dictionary.txt/json file as that was a large file with lots of superfluous data
  // Call the json() method on the response to parse the response body as JSON.
  // The API returns an array of words, so we access the first word in the array with data[0] and set it as the wordToGuess state.
  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
        .then((response) => response.json())
        .then((data) => {
          setWordToGuess(data[0]);
        });
  }, []);

  const handleLetterGuess = (letter) => { // Function to handle the letter guess
    if (!wordToGuess.includes(letter)) {
      setGuessesRemaining((prevGuessesRemaining) => prevGuessesRemaining - 1);
      setGifNumber((prevGifNumber) => prevGifNumber + 1);
    }
    setGuessedLetters((prevGuessedLetters) => [
      ...prevGuessedLetters,
      letter,
    ]);
  };

  useEffect(() => { // useEffect hook to check if the game is over
    const guessedWord = [...wordToGuess]
        .map((char) => (guessedLetters.includes(char) ? char : "_"))
        .join("");

    if (guessedWord === wordToGuess) { // If the guessed word is equal to the word to guess, the user wins
      setWin(true);
      setGameOver(true);
    }

    if (guessesRemaining === 0) { // If the user runs out of guesses, the user loses
      setWin(false);
      setGameOver(true);
    }
  }, [guessedLetters, guessesRemaining, wordToGuess]); // Dependencies for the useEffect hook

  // Reset all the states to their initial values
  // Also uses the API to fetch a new word
  const handleRestart = () => { // Function to handle the restart button
    setWordToGuess("");
    setGuessedLetters([]);
    setGuessesRemaining(10);
    setGifNumber(0);
    setGameOver(false);
    setWin(false);
    fetch("https://random-word-api.herokuapp.com/word")
        .then((response) => response.json())
        .then((data) => {
          setWordToGuess(data[0]);
        });
  };

  const letters = "abcdefghijklmnopqrstuvwxyz".split(""); // Array of letters split so that we can map over them

  return ( // Return and render the components
      <Container maxWidth="sm">
        <Header />
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <WordToGuess
                word={[
                  ...wordToGuess,
                ].map((char) =>
                    guessedLetters.includes(char) ? char : "_"
                )
                }/>
          </Grid>
          <Grid item>
            <GuessesRemaining guesses={guessesRemaining} />
          </Grid>
          <Grid item>
            <GuessedLetters letters={guessedLetters} />
          </Grid>
          <Grid item>
            <Keyboard
                letters={letters}
                guessedLetters={guessedLetters}
                handleLetterGuess={handleLetterGuess}
            />
          </Grid>
          <Grid item>
            <GifDisplay gifNumber={gifNumber} />
          </Grid>
          <Grid item>
            <RestartButton handleRestart={handleRestart} />
          </Grid>
          <Grid item>
            <HelpButton />
          </Grid>
        </Grid>
        <Grid item>
          <GameResult win={win} wordToGuess={wordToGuess} gameOver={gameOver} />
        </Grid>
      </Container>
  );
}

export default Hangman;