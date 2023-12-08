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
const suomiButton = document.querySelector('.suomi-button');
const englishButton = document.querySelector('.english-button');
const swedishButton = document.querySelector('.swedish-button');

suomiButton.addEventListener('click', ChangeLanguage('suomi'));
englishButton.addEventListener('click', ChangeLanguage('english'));
swedishButton.addEventListener('click', ChangeLanguage('swedish'));

import SuomiData from './languages/suomi.js';
//import EnglishData from "./languages/english.js";
//import SwedishData from "./languages/swedish.js";

//ChangeLanguage('suomi');
function ChangeLanguage(chosenLanguage) {
  switch (chosenLanguage) {
    case 'suomi':
      Language = SuomiData;
      // update UI text
      break;
    case 'english':
      //language = EnglishData;
      // update UI text
      break;
    case 'swedish':
      //language = SwedishData;
      // update UI text
      break;
    default:
      console.log('typo in language button events??');
      break;
  }
}