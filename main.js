// imports

import { playRock } from "./scripts/rock.js";
import { playConnect } from "./scripts/connect.js";
import { playTic } from "./scripts/tic.js";
import { gameList } from "./data/game-details.js";

// Game data

// DOM element selectors
const homeSection = document.getElementById("home-section");
const playButton = document.getElementById("play-button");
const aboutButton = document.getElementById("about-button");
const computerSection = document.getElementById("computer-section");
const shallInput = document.getElementById("shall-input");
const shallButton = document.getElementById("shall-button");
const gameSection = document.getElementById("game-section");

// Function to handle Play button click
// Hides the home section and shows the computer section
const handlePlayButton = () => {
  homeSection.style.display = "none";
  computerSection.style.display = "flex";
};

// Function to handle About button click
// Logs 'about' to the console (could be expanded for more functionality)
const handleAboutButton = () => {
  console.log("about");
};

const selectGame = (inputElement) => {
  const newMessage = document.createElement("div");
  let playerInput = inputElement.value;
  if (playerInput === "Connect Four") {
    playConnect();
  } else if (playerInput === "Tic Tac Toe") {
    playTic();
  } else if (playerInput === "Rock Paper Scissors") {
    playRock();
  } else {
    alert("Invalid Selection. Check your spelling (must be case sensative)");
  }
  gameSection.append(newMessage);
};

// Function to show the list of games
// Iterates over the gameList array and displays each game's name and description
const showGames = () => {
  computerSection.innerHTML = "";
  const gamesContainer = document.createElement("div");
  const selectTitle = document.createElement("p");
  selectTitle.innerText = "Select your game:";
  gamesContainer.append(selectTitle);
  gamesContainer.id = "games-container";
  const gamesList = document.createElement("ol");
  gamesList.classList.add("game-list");
  gameList.forEach((game) => {
    const gameItem = document.createElement("li");
    gameItem.textContent = game.name;
    gamesList.appendChild(gameItem);
  });
  gamesContainer.appendChild(gamesList);
  computerSection.appendChild(gamesContainer);
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "input-button-container");
  gamesContainer.append(newDiv);
  const input = document.createElement("input");
  input.setAttribute("class", "my-inputs");
  const button = document.createElement("button");
  button.innerText = "Confirm";

  // Set up event listeners
  button.addEventListener("click", () => selectGame(input));
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      selectGame(input);
    }
  });

  newDiv.append(input);
  newDiv.append(button);
};

const goBack = () => {
  // setTimeout();
  console.log("goback");

  computerSection.innerHTML = "";
  homeSection.style.display = "flex";

  // reattach event listeners
};

const confirmInput = () => {
  const newMessage = document.createElement("div");
  computerSection.append(newMessage);
  if (shallInput.value === "y" || shallInput.value === "Y") {
    newMessage.textContent =
      "That is good to hear. Now select from the list of games below:";
    showGames();
  } else if (shallInput.value === "n" || shallInput.value === "N") {
    newMessage.textContent =
      "I'm sorry to hear that. But it's probably a wise decision. We'll take you back now:";

    goBack();
  } else {
    alert("Invalid Entry");
  }
};
// Function to handle input in the shallInput field
// Checks for 'Enter' key press and responds based on the input value
const enterInput = (enter) => {
  const backButton = document.createElement("button");
  backButton.innerText = "Back";

  if (enter.key === "Enter") {
    const newMessage = document.createElement("div");
    computerSection.append(newMessage);

    if (shallInput.value === "y" || shallInput.value === "Y") {
      newMessage.textContent =
        "That is good to hear. Now select from the list of games below:";
      showGames();
    } else if (shallInput.value === "n" || shallInput.value === "N") {
      newMessage.textContent =
        "I'm sorry to hear that. But it's probably a wise decision. We'll take you back now:";
      console.log("hitt this");
      goBack();

      // todo: take back to home screen
    } else {
      alert("Invalid Entry");
    }
  }
};

// Event listeners
playButton.addEventListener("click", handlePlayButton);
aboutButton.addEventListener("click", handleAboutButton);
shallInput.addEventListener("keypress", enterInput);
shallButton.addEventListener("click", confirmInput);
