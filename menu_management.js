document.addEventListener('DOMContentLoaded', function() {
    const mainGameContainer = document.querySelector('.game-flex-container');
    const startButton = document.getElementById("startBtnId");
    const startPage = document.getElementById("startPageId");
  
    if(startButton) {
      startButton.addEventListener("click", event => {
        console.log("start button clicked");
        StartGame();
      });
    } else {
      console.log('startButton is null');
    }
  
    function StartGame () {
      mainGameContainer.style.display = "flex";
      startPage.style.display = "none";
    }

    //Pause menu
const pauseMenuIcon = document.querySelector('.top-options-menu');
const pauseMenu = document.querySelector('.pauseMenuBox');
const continueButton = document.querySelector('.continue-button');
const restartButton = document.querySelector('.restart-button');
// pause language switch buttons
const suomiButton = document.querySelector('.suomi-button');
const englishButton = document.querySelector('.english-button');
const swedishButton = document.querySelector('.swedish-button');

continueButton.addEventListener('click', ContinueGame);
restartButton.addEventListener('click', RestartGame);
/*suomiButton.addEventListener('click', ChangeLanguage('suomi'));
englishButton.addEventListener('click', ChangeLanguage('english'));
swedishButton.addEventListener('click', ChangeLanguage('swedish')); */

let pauseMenuOpen = false;

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

