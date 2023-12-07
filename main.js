//main.js

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

// event listeners

playButton.addEventListener("click", handlePlayButton);
aboutButton.addEventListener("click", handleAboutButton);
