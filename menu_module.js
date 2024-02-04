/*
  Module handles language switching, pause and main menu
*/

let Language;
export { CheckIfClickedWhilePauseOpen, PauseMenuClicked, Language };
import { StartSetup } from './scene_management.js';

// Pause menu behaviour
const pauseMenu = document.querySelector('.pauseMenuBox');
const continueButton = document.querySelector('.continue-button');
const restartButton = document.querySelector('.restart-button');
const startButton = document.querySelector('.start-button-text');
const continueButtonText = document.querySelector('.pause-menu-text-only-continue');
const restartButtonText = document.querySelector('.pause-menu-text-only-restart');

import SuomiData from './languages/suomi.js';
import EnglishData from "./languages/english.js";
import SwedishData from "./languages/swedish.js";
Language = SuomiData;

const buttonsSuomi = {
  start: "Aloita<br>peli",
  continue: "Jatka peliä",
  reset: "Aloita alusta",
}
const buttonsEnglish = {
  start: "Start<br>game",
  continue: "Continue",
  reset: "Start over",
}
const buttonsSwedish = {
  start: "Börja<br>spelet",
  continue: "Fortsätt spela",
  reset: "Börja om",
}


let pauseMenuOpen = false;

function CheckIfClickedWhilePauseOpen() {
  if (pauseMenuOpen === true) {
    pauseMenuOpen = false;
    pauseMenu.classList.add('hidden');
    return true;
  }
  return false;
}

function PauseMenuClicked() {
  // open pausemenu if closed or close if not?
  if (pauseMenuOpen === true) {
    pauseMenuOpen = false;
    pauseMenu.classList.add('hidden');
    return;
  }
  pauseMenuOpen = true;
  pauseMenu.classList.remove('hidden');
}

// continue
continueButton.addEventListener('click', function () {
  pauseMenuOpen = false;
  pauseMenu.classList.add('hidden');
});

// restart from start
restartButton.addEventListener('click', function () {
  localStorage.removeItem('sceneIDSave');
  StartSetup();
  pauseMenuOpen = false;
  pauseMenu.classList.add('hidden');
});

// Main menu behaviour
const mainGameContainer = document.querySelector('.game-flex-container');
const mainMenuContainer = document.querySelector(".main-menu-container");
const startButtonElement = document.querySelector(".startbutton");

startButtonElement.addEventListener('click', function () {
  mainGameContainer.classList.remove('hidden');
  mainMenuContainer.classList.add('hidden');
  StartSetup();
});

// language switch behaviour
const suomiButtons = document.querySelectorAll('.suomi-button');
const englishButtons = document.querySelectorAll('.english-button');
const swedishButtons = document.querySelectorAll('.swedish-button');

suomiButtons.forEach(button => button.addEventListener('click', (event) => ChangeLanguage('suomi')));
englishButtons.forEach(button => button.addEventListener('click', (event) => ChangeLanguage('english')));
swedishButtons.forEach(button => button.addEventListener('click', (event) => ChangeLanguage('swedish')));

function ChangeButtonLanguage(buttonLanguage) {
  if (buttonLanguage === 'suomi') {
    startButton.innerHTML = buttonsSuomi.start;
    continueButtonText.innerHTML = buttonsSuomi.continue;
    restartButtonText.innerHTML = buttonsSuomi.reset;
  }
  if (buttonLanguage === 'english') {
    startButton.innerHTML = buttonsEnglish.start;
    continueButtonText.innerHTML = buttonsEnglish.continue;
    restartButtonText.innerHTML = buttonsEnglish.reset;
  }
  if (buttonLanguage === 'swedish') {
    startButton.innerHTML = buttonsSwedish.start;
    continueButtonText.innerHTML = buttonsSwedish.continue;
    restartButtonText.innerHTML = buttonsSwedish.reset;
  }
}

// TODO change SuomiData to specific language when they are created
function ChangeLanguage(chosenLanguage) {
  switch (chosenLanguage) {
    case 'suomi':
      Language = SuomiData;
      ChangeButtonLanguage('suomi');
      break;

    case 'english':
      Language = EnglishData;
      ChangeButtonLanguage('english');
      break;

    case 'swedish':
      Language = SwedishData;
      ChangeButtonLanguage('swedish');
      break;

    default:
      console.log('typo in language button events??');
      break;
  }
}