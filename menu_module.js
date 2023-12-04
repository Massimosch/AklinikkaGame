export {CheckIfClickedWhilePauseOpen, PauseMenuClicked};
import {StartSetup} from './scene_management.js';

const pauseMenu = document.querySelector('.pauseMenuBox');
const continueButton = document.querySelector('.continue-button');
const restartButton = document.querySelector('.restart-button');

let pauseMenuOpen = false;

// Pause menu behaviour
function CheckIfClickedWhilePauseOpen() {
  if (pauseMenuOpen === true) {
    pauseMenuOpen = false;
    pauseMenu.classList.add('hidden');
    return true;
  }
  return false;
}

function PauseMenuClicked(){
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
continueButton.addEventListener('click', function(){
  pauseMenuOpen = false;
  pauseMenu.classList.add('hidden');
});

// restart from start
restartButton.addEventListener('click', function(){
  StartSetup();
  pauseMenuOpen = false;
  pauseMenu.classList.add('hidden');
});

// Main menu behaviour


// angelina's code
document.addEventListener('DOMContentLoaded', function () {
  const mainGameContainer = document.querySelector('.game-flex-container');
  const startButton = document.getElementById("startBtnId");
  const startPage = document.getElementById("startPageId");

  if (startButton) {
    startButton.addEventListener("click", event => {
      console.log("start button clicked");
      StartGame();
    });
  } else {
    console.log('startButton is null');
  }

  function StartGame() {
    mainGameContainer.style.display = "flex";
    startPage.style.display = "none";
  }

  //Pause menu

  // pause language switch buttons
  const suomiButton = document.querySelector('.suomi-button');
  const englishButton = document.querySelector('.english-button');
  const swedishButton = document.querySelector('.swedish-button');


  /*suomiButton.addEventListener('click', ChangeLanguage('suomi'));
  englishButton.addEventListener('click', ChangeLanguage('english'));
  swedishButton.addEventListener('click', ChangeLanguage('swedish')); */

  let pauseMenuOpen = false;

  function OpenPauseMenu() {
    pauseMenuOpen = true;
    pauseMenu.classList.remove('hidden');
  }


  function addClickEventListener() {
    mainGameContainer.addEventListener('click', event => {
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

      function ChangeLanguage(chosenLanguage) {
        switch (chosenLanguage) {
          case 'suomi':
            language = SuomiData;
            break;
          case 'english':
            //language = EnglishData;
            break;
          case 'swedish':
            //language = SwedishData;
            break;
          default:
            console.log('typo in language button events??');
            break;
        }
      }
    });
  }
});

