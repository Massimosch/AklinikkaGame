import StartSceneData from "/data/StartSceneData.js";
import SuomiData from "./data/suomi.js";
//import EnglishData from "./data/english.js";
//import SwedishData from "./data/swedish.js";

const mainGameContainer = document.querySelector('.game-flex-container');

const infoboxElement = document.querySelector('.narratorBox');
const infoboxText = document.querySelector('.narratorBoxText');

const speechBubbleLeft = document.querySelector('.speechBubbleLeft');
const speechBubbleRight = document.querySelector('.speechBubbleRight');

// array queries
const characterElements = document.querySelectorAll('.character');
const playerChoiceElements = document.querySelectorAll('.choiceBox');
const playerChoiceTextElements = document.querySelectorAll('.choiceBoxText');

//Pause menu
const pauseMenuIcon = document.querySelector('.top-options-menu');
const pauseMenu = document.querySelector('.pauseMenuBox');
const continueButton = document.querySelector('.continue-button');
const restartButton = document.querySelector('.restart-button');
// pause language switch buttons
const suomiButton = document.querySelector('.suomi-button');
const englishButton = document.querySelector('.english-button');
const swedishButton = document.querySelector('.swedish-button');


let currentBackground;
let language = SuomiData;
let currentScene;
let nextScene;
let transitionDelayTime;
let delayTimeInSeconds = 0.22;
let pauseMenuOpen = false;

let gameStartingScene = StartSceneData.SofillaOnTietoaAlku;

// game setup
nextScene = gameStartingScene;
addClickEventListener();
PopulateScene();
continueButton.addEventListener("click", ContinueGame);
restartButton.addEventListener("click", RestartGame);
suomiButton.addEventListener("click", ChangeLanguage("suomi"));
englishButton.addEventListener("click", ChangeLanguage("english"));
swedishButton.addEventListener("click", ChangeLanguage("swedish"));


function OpenPauseMenu() {
  pauseMenuOpen = true;
  pauseMenu.classList.remove('hidden');
}
function ContinueGame() {
  pauseMenuOpen = false;
  pauseMenu.classList.add('hidden');
}
function RestartGame() {
  nextScene = gameStartingScene;
  PopulateScene();
  pauseMenuOpen = false;
  pauseMenu.classList.add('hidden');
}
function ChangeLanguage(chosenLanguage) {
  switch (chosenLanguage) {
    case "suomi":
      language = SuomiData;
      break;
    case "english":
      //language = EnglishData;
      break;
    case "swedish":
      //language = SwedishData;
      break;
    default:
      console.log("typo in language button events??");
      break;
  }
}

// click event listener
function addClickEventListener() {
  mainGameContainer.addEventListener("click", event => {

    if (ClickedTooFast() === true) {
      return;
    }
    
    // if pause menu is open and player clicks outside it into game screen, pause ends
    if (pauseMenuOpen === true) {
      ContinueGame();
      return;
    }

    if (event.target === pauseMenuIcon) {
      pauseMenuOpen = true;
      OpenPauseMenu();
      return;
    }

    if (currentScene.type === "linear") {
      nextScene = StartSceneData[currentScene.next_scene];
      PopulateScene();
      return;
    }
    // if choice elements clicked, set nextscene
    for (let i = 0; i < playerChoiceElements.length; i++) {
      if (event.target.parentElement === playerChoiceElements[i]) {
        nextScene = StartSceneData[currentScene.player_choice[i].next_scene];
        PopulateScene();
        return;
      }
    }
  });
}

function ClickedTooFast() {
  // double click speed timer here to avoid accidental progress?
  const currentTimeInSeconds = new Date().getTime() / 1000;

  if (currentTimeInSeconds - transitionDelayTime < delayTimeInSeconds) {
    console.log(`Clicked too fast, delayTime = ${delayTimeInSeconds}`);
    return true;
  }
  transitionDelayTime = currentTimeInSeconds;
  return false;
}

function PopulateScene() {

  // background image change
  if (nextScene.background !== null && nextScene.background !== currentBackground) {
    currentBackground = nextScene.background;
    mainGameContainer.style.backgroundImage = "url(images/backgrounds/" + currentBackground + ".png)";
  }

  // draw characters here
  for (let i = 0; i < characterElements.length; i++) {
    if (i >= nextScene.characters.length) {
      characterElements[i].classList.add('hidden');
      continue;
    }
    characterElements[i].style.backgroundImage = "url(images/characters/" + nextScene.characters[i] + ".png)";
    characterElements[i].classList.remove('hidden');
  }

  if (nextScene.text_type === "dialogue" || nextScene.text_type === "speech") {
    WriteDialogue();
  }
  if (nextScene.text_type === "infobox" || nextScene.text_type === "narrator") {
    WriteInfobox();
  }
  PlayerChoiceSetup();

  // maybe use current scene later somewhere dunno
  currentScene = nextScene;
}
function WriteInfobox() {
  infoboxElement.classList.remove('hidden');
  infoboxText.textContent = language[nextScene.text];
  // bottomChoiceContainer.transfrom = "translateX(0%)";
  speechBubbleLeft.classList.add('hidden');
  speechBubbleRight.classList.add('hidden');

}
function WriteDialogue() {
  infoboxElement.classList.add('hidden');

  if (nextScene.text_position === "speechLeft") {
    //bottomChoiceContainer.transfrom = "translateX(0%)";
    speechBubbleLeft.classList.remove('hidden');
    speechBubbleRight.classList.add('hidden');
    speechBubbleLeft.textContent = language[nextScene.text];
  }
  else {
    //bottomChoiceContainer.transfrom = "translateX(0%)";
    speechBubbleRight.classList.remove('hidden');
    speechBubbleLeft.classList.add('hidden');
    speechBubbleRight.textContent = language[nextScene.text];
  }
}

// player choice box setup
function PlayerChoiceSetup() {
  for (let i = 0; i < playerChoiceElements.length; i++) {
    // hide null choices
    if (nextScene.type === "linear" || i >= nextScene.player_choice.length) {
      playerChoiceElements[i].classList.add('hidden');
    }
    else {
      playerChoiceElements[i].classList.remove('hidden');
      playerChoiceTextElements[i].textContent = language[nextScene.player_choice[i].text];
    }
  }
}