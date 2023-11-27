import StartSceneData from '/data/StartSceneData.js';
import Suomi from './data/suomi.js';

const mainGameContainer = document.querySelector('.game-flex-container');

const infoboxElement = document.querySelector('.narratorBox');
const infoboxText = document.querySelector('.narratorBoxText');

//const bottomChoiceContainer = document.querySelector('.bottom-choice-container ');
//bottomChoiceContainer.style.transfrom = "translateX(-100%)";

const speechBubbleLeft = document.querySelector('.speechBubbleLeft');
const speechBubbleRight = document.querySelector('.speechBubbleRight');

// array queries
const characterElements = document.querySelectorAll('.character');
const playerChoiceElements = document.querySelectorAll('.choiceBox');
const playerChoiceTextElements = document.querySelectorAll('.choiceBoxText');

let currentBackground;
let language = Suomi;
let currentScene;
let nextScene;
let transitionDelayTime;
let delayTimeInSeconds = 0.25;

// game setup
nextScene = StartSceneData.SofillaOnTietoaAlku;
addClickEventListener();
PopulateScene();

// click event listener
function addClickEventListener() {
  mainGameContainer.addEventListener('click', event => {
    // double click speed timer here to avoid accidental progress?
    const currentTimeInSeconds = new Date().getTime() / 1000;

    if (currentTimeInSeconds - transitionDelayTime < delayTimeInSeconds) {
      console.log(
        `Clicked too fast need to wait delayTime = ${delayTimeInSeconds}`
      );
      return;
    }
    transitionDelayTime = currentTimeInSeconds;

    //Menu
    const settingsMenu = document.querySelector('.top-options-menu');
    const gameButtons = document.getElementById('game-buttons');

    // const startButton = document.getElementById("start-button");
    const continueButton = document.getElementById('pause-button');
    const restartButton = document.getElementById('restart-button');

    if (event.target === settingsMenu) {
      gameButtons.style.display = 'flex';
      // gameButtons.classList.toggle("active"); it doesn't work
      console.log('settingsMenu clicked');
      document.body.style.overflow = 'hidden';

      /* startButton.addEventListener("click", event => {
    console.log("start button clicked");
    nextScene = StartSceneData.SofillaOnTietoaAlku;
    gameButtons.style.display = "none";
    addClickEventListener();
    PopulateScene();
  });*/

      continueButton.addEventListener('click', event => {
        console.log('continue button clicked');
        gameButtons.style.display = 'none';
      });

      restartButton.addEventListener('click', event => {
        console.log('restart button clicked');
        nextScene = StartSceneData.SofillaOnTietoaAlku;
        addClickEventListener();
        PopulateScene();
        gameButtons.style.display = 'none';
      });
    }

    if (currentScene.type === 'linear') {
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

function PopulateScene() {
  // background image change
  if (
    nextScene.background !== null &&
    nextScene.background !== currentBackground
  ) {
    currentBackground = nextScene.background;
    mainGameContainer.style.backgroundImage =
      'url(images/backgrounds/' + currentBackground + '.png)';
  }

  // draw characters here
  for (let i = 0; i < characterElements.length; i++) {
    if (i >= nextScene.characters.length) {
      characterElements[i].classList.add('hidden');
      continue;
    }
    characterElements[i].style.backgroundImage =
      'url(images/characters/' + nextScene.characters[i] + '.png)';
    characterElements[i].classList.remove('hidden');
  }

  if (nextScene.text_type === 'dialogue' || nextScene.text_type === 'speech') {
    WriteDialogue();
  }
  if (nextScene.text_type === 'narrator') {
    WriteNarrator();
  }
  if (nextScene.text_type === 'infobox') {
    WriteInfobox();
  }

  PlayerChoiceSetup();

  // maybe use current scene later somewhere dunno
  currentScene = nextScene;
}
// infobox / narrator identical so far :shrug:
function WriteInfobox() {
  infoboxElement.classList.remove('hidden');
  infoboxText.textContent = language[nextScene.text];
  // bottomChoiceContainer.transfrom = "translateX(0%)";
  speechBubbleLeft.classList.add('hidden');
  speechBubbleRight.classList.add('hidden');
}
function WriteNarrator() {
  infoboxElement.classList.remove('hidden');
  infoboxText.textContent = language[nextScene.text];
  speechBubbleLeft.classList.add('hidden');
  speechBubbleRight.classList.add('hidden');
}
function WriteDialogue() {
  infoboxElement.classList.add('hidden');

  if (nextScene.text_position === 'speechLeft') {
    //bottomChoiceContainer.transfrom = "translateX(0%)";
    speechBubbleLeft.classList.remove('hidden');
    speechBubbleRight.classList.add('hidden');
    speechBubbleLeft.textContent = language[nextScene.text];
  } else {
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
    if (nextScene.type === 'linear' || i >= nextScene.player_choice.length) {
      playerChoiceElements[i].classList.add('hidden');
    } else {
      playerChoiceElements[i].classList.remove('hidden');
      playerChoiceTextElements[i].textContent =
        language[nextScene.player_choice[i].text];
    }
  }
}
