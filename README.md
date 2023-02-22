# WD-T52

# Swim-Man(!) Game in React
This is a simple Hangman style game built using React. 

It fetches a random word from an API and allows the user to guess the letters of the word. The game ends when the user either correctly guesses the word or runs out of guesses.

Currently, the logic for the win/lose conditions is not working. The game will end when the user runs out of guesses, but the win condition is not working.
Additionally, this means the keyboard (which would be hidden on gameover) can still accept input after win or lose.
I have booked a mentor session to discuss this issue but the earliest available was weeks after submission deadline.

# Installation
1. Clone the gitHub repository to your local machine
2. In the terminal, navigate to the project folder and run npm install
3. To start the app, run ### `npm start`
4. The app will open in your default browser at http://localhost:3000

# How to Play
1. Follow installation instructions and visit the localhost page to start the game
2. The app will automatically fetch a random word for you to guess
3. The aim is to avoid the shark catching the swimmer by guessing the word correctly
4. You can click on the keyboard to guess a letter
5. You have 10 guesses to guess the word
6. If you guess the word correctly, you win!
7. If you run out of guesses, you lose!

# Built with
React (Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)).
React Hooks
Material-UI

# Acknowledgments and References
This project was inspired by the alternative to hangman here: https://www.tefllemon.com/alternatives-to-hangman
Gif of shark from: https://tenor.com/view/pool-swimming-just-keep-swimming-jaws-gif-16811065
Background image from https://drinkgenz.com/
React Hooks: https://reactjs.org/docs/hooks-intro.html
Material-UI: https://mui.com/getting-started/usage/
API: https://random-word-api.herokuapp.com/home
WD T46-51 lectures and pdfs.
React documentation: https://reactjs.org/docs/getting-started.html
React state and lifecycle: https://reactjs.org/docs/state-and-lifecycle.html
GifDisplay component: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
