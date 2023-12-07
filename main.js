//main.js

const gameList = [
  { name: "Tic Tac Toe", age: 30 },
  { name: "Connect Four", age: 25 },
  { name: "Rock Paper Scissors", age: 27 },
];

//selectors

const homeSection = document.getElementById("home-section");
const playButton = document.getElementById("play-button");
const aboutButton = document.getElementById("about-button");
const computerSection = document.getElementById("computer-section");
const gameSection = document.getElementById("game-section");
const shallInput = document.getElementById("shall-input");

// helper functions

const handlePlayButton = () => {
  homeSection.style.display = "none";
  computerSection.style.display = "flex";
};

const handleAboutButton = () => {
  console.log("about");
};

const showGames = () => {
  console.log("show these games");
  const newDiv = document.createElement("div");
  const newtitle = document.createElement("div");
  newtitle.innerText = "Game Title";
  computerSection.append(newtitle);
  const newList = document.createElement("li");
  const selectGameButtonDiv = document.createElement("div");
  const ticButton = document.createElement("button");
  const connectButton = document.createElement("button");
  const rockButton = document.createElement("button");
};

const enterInput = (enter) => {
  if (enter.key === "Enter") {
    const newDiv = document.createElement("div");
    computerSection.append(newDiv);
    const newMessage = document.createElement("div");
    newDiv.append(newMessage);
    if (shallInput.value === "y" || shallInput.value === "Y") {
      newMessage.innerHTML =
        "That is good to hear. Now select from the list of games below:";
    } else if (shallInput.value === "n" || shallInput.value === "N") {
      newMessage.innerHTML =
        "I'm sorry to hear that. But it's probably a wise decision. We'll take you back now:";
      // todo: take back to home screen
    } else {
      alert("Invalid Entry");
    }
  }
};

// event listeners

playButton.addEventListener("click", handlePlayButton);
aboutButton.addEventListener("click", handleAboutButton);
shallInput.addEventListener("keypress", enterInput);
