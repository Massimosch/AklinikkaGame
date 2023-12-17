/*
  Module handles scenes and player choices
*/

export { StartSetup };
import {
  CheckIfClickedWhilePauseOpen,
  PauseMenuClicked,
  Language,
} from './menu_module.js';

import EnergiajuomaNuuskaRahapelit from './scene_data/EnergiajuomaNuuskaRahapelit.js';
import Kotimatka from './scene_data/Kotimatka.js';
import LydianHuolet from './scene_data/LydianHuolet.js';
import MironKotona from './scene_data/MironKotona.js';
import MironTapaaminen from './scene_data/MironTapaaminen.js';
import OppituntiAlkamassa from './scene_data/OppituntiAlkamassa.js';
import PelinAlku from './scene_data/PelinAlku.js';
import PelinLoppu from './scene_data/PelinLoppu.js';
import Puistossa from './scene_data/Puistossa.js';
import RoopenBileet from './scene_data/RoopenBileet.js';
import SofillaOnTietoa from './scene_data/SofillaOnTietoa.js';
import SofinSomeTauko from './scene_data/SofinSometauko.js';
import TuomaksenKiusaaminen from './scene_data/TuomaksenKiusaaminen.js';

//Audio import and new instance created
import AudioModule from './audio_module.js';
const audioModule = new AudioModule();

// ordered by scene appearance
const sceneDataFiles = [
  PelinAlku,
  SofillaOnTietoa,
  EnergiajuomaNuuskaRahapelit,
  LydianHuolet,
  TuomaksenKiusaaminen,
  MironTapaaminen,
  SofinSomeTauko,
  OppituntiAlkamassa,
  MironKotona,
  RoopenBileet,
  Puistossa,
  Kotimatka,
  PelinLoppu,
];

const mainGameContainer = document.querySelector('.game-flex-container');

const infoboxElement = document.querySelector('.infoBox');
const infoboxText = document.querySelector('.infoBoxText');

const narratorElement = document.querySelector('.narratorBox');
const narratorText = document.querySelector('.narratorBoxText');

const speechBubbleLeft = document.querySelector('.speechBubbleLeft');
const speechBubbleRight = document.querySelector('.speechBubbleRight');

// array queries
const characterElements = document.querySelectorAll('.character');
const playerChoiceElements = document.querySelectorAll('.choiceBox');
const playerChoiceTextElements = document.querySelectorAll('.choiceBoxText');

// animation containers
const topTextElement = document.querySelector('.top-text-container');
const bottomPlayerChoiceElement = document.querySelector(
  '.bottom-choice-container'
);

// settings menu
const pauseMenuElement = document.querySelector('.top-options-menu');

/*
  Alla olevassa voi vaihtaa currentScene = minkä haluaa
  Rivillä nextScene = GetSceneData("EnsimmainenScene");
  Vaihda EnsimmainenScene siihen SceneID:en josta haluat aloittaa pelin. 
  Peli alkaa Start Menusta, klikkaa "Aloita peli" ja pääset valitsemaasi aloitussceneen
*/
function StartSetup() {
  let save = localStorage.getItem('sceneIDSave');
  audioModule.startBackgroundMusic('./audio/AKlinikka-BGM.mp3');
  if (save === null || save === 'Loppu' || save === '') {
    nextScene = GetSceneData('EnsimmainenScene');
  } else {
    nextScene = GetSceneData(localStorage.getItem('sceneIDSave'));
  }
  PopulateScene();
}

let currentDataFile = PelinAlku;

let currentBackground;
let currentScene;
let nextScene;
let sceneID;
let waitingForPlayerChoiceButtons = false;
let timerForPlayerChoices;
let playerChoiceDelayTime = 400; //milliseconds

let transitionDelayTime;
let delayTimeInSeconds = 0.1;

// game setup
StartSetup();
AddClickEventListener();

// This is for switching the SceneData file
function GetSceneData(sceneName) {
  sceneID = sceneName;
  if (currentDataFile[sceneName]) {
    return currentDataFile[sceneName];
  }

  for (const sceneData of sceneDataFiles) {
    if (sceneData[sceneName]) {
      currentDataFile = sceneData;
      return sceneData[sceneName];
    }
  }
  console.error('Scene not found: ' + sceneName);
  return null;
}

// click event listener
function AddClickEventListener() {
  mainGameContainer.addEventListener('click', event => {
    if (ClickedTooFast() === true) {
      return;
    }

    // menu module click events
    if (CheckIfClickedWhilePauseOpen() === true) {
      return;
    }
    if (event.target === pauseMenuElement) {
      PauseMenuClicked();
      return;
    }
    if (event.target.tagName === 'A') {
      return;
    }

    if (waitingForPlayerChoiceButtons === true) {
      StopFadeInAnimation();
      return;
    }

    if (nextScene == null) {
      console.error('Scene not found?: ' + nextScene);
      return;
    }

    if (currentScene.type === 'linear') {
      nextScene = GetSceneData(currentScene.next_scene);
      if (nextScene == null) {
        return;
      }
      PopulateScene();
      return;
    }
    // if choice elements clicked, set nextscene
    for (let i = 0; i < playerChoiceElements.length; i++) {
      if (event.target.parentElement === playerChoiceElements[i]) {
        audioModule.playClickSound('./audio/aklinikka-clicked.mp3');
        nextScene = GetSceneData(currentScene.player_choice[i].next_scene);
        if (nextScene == null) {
          return;
        }
        PopulateScene();
        return;
      }
    }
  });
}

function StopFadeInAnimation() {
  waitingForPlayerChoiceButtons = false;
  clearTimeout(timerForPlayerChoices);
  PlayerChoiceSetup();
  bottomPlayerChoiceElement.classList.remove('fade-in-animation-long');
  bottomPlayerChoiceElement.style.animation = 'none';
  void topTextElement.offsetWidth;
  bottomPlayerChoiceElement.style.animation = '';
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
    if (nextScene.characters === null || nextScene.characters === undefined) {
      characterElements[i].classList.add('hidden');
      continue;
    }
    if (i >= nextScene.characters.length) {
      characterElements[i].classList.add('hidden');
      continue;
    }
    // data täyttö fix
    if (nextScene.characters[i] == '') {
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
  if (nextScene.text_type === 'infobox' || nextScene.text_type === 'Infobox') {
    //WriteInfobox(); temp? muotoilu ongelman vuoksi vaihettu Narratoriksi
    WriteNarrator();
  }
  if (nextScene.text_type === 'narrator') {
    WriteNarrator();
  }
  // hide player choices by default for delay
  for (let i = 0; i < playerChoiceElements.length; i++) {
    playerChoiceElements[i].classList.add('hidden');
  }
  if (nextScene.player_choice !== undefined) {
    timerForPlayerChoices = setTimeout(
      PlayerChoiceSetup,
      playerChoiceDelayTime
    );
    waitingForPlayerChoiceButtons = true;
  }

  ResetAnimations();
  AnimateScene();
  // maybe use current scene later somewhere dunno
  currentScene = nextScene;
}

function ResetAnimations() {
  for (let i = 0; i < characterElements.length; i++) {
    if (characterElements[i].classList.contains('zoom-in-animation')) {
      continue;
    }
    if (characterElements[i].classList.contains('hidden')) {
      characterElements[i].className = 'character hidden';
      continue;
    }
    characterElements[i].className = 'character';
  }
  //mainGameContainer.className = 'game-flex-container';

  topTextElement.classList.remove('fade-in-animation');
  bottomPlayerChoiceElement.classList.remove('fade-in-animation-long');
  // "in order to know what the offsetWidth is, the browser has to abandon
  // its plan of batching the changes and perform the reflow of the page right now"
  void topTextElement.offsetWidth;
}
function AnimateScene() {
  topTextElement.classList.add('fade-in-animation');
  if (nextScene.animations !== undefined) {
    nextScene.animations.forEach(anim => {
      switch (anim.type) {
        case 'SlideFromLeft':
          characterElements[anim.target].classList.add(
            'slide-character-from-left-animation'
          );
          break;
        case 'SlideFromRight':
          characterElements[anim.target].classList.add(
            'slide-character-from-right-animation'
          );
          break;
        case 'BGFadeIn':
          break;
        case 'CharacterFadeIn':
          characterElements[anim.target].classList.add(
            'fade-in-animation-long'
          );
          break;
        case 'CharacterFadeOut':
          characterElements[anim.target].classList.add(
            'fade-out-animation-long'
          );
          break;
        case 'ZoomInCharacter':
          characterElements[anim.target].classList.add('zoom-in-animation');
          break;
        case 'StopZoom':
          characterElements[anim.target].classList.remove('zoom-in-animation');
          break;
        case 'ZoomOutCharacter':
          characterElements[anim.target].classList.add('zoom-out-animation');
          break;
        case 'Shake':
          characterElements[anim.target].classList.add('shake-animation');
          break;
        default:
          console.log('default animation switch case triggered');
          break;
      }
    });
  }
}

function WriteInfobox() {
  infoboxElement.classList.remove('hidden');
  infoboxText.innerHTML = Language[nextScene.text];
  infoboxElement.style.fontSize = GetFontSizeBasedOnString(
    Language[nextScene.text]
  );
  // bottomChoiceContainer.transfrom = "translateX(0%)";
  speechBubbleLeft.classList.add('hidden');
  speechBubbleRight.classList.add('hidden');
  narratorElement.classList.add('hidden');
}

function WriteNarrator() {
  narratorElement.classList.remove('hidden');
  narratorText.innerHTML = Language[nextScene.text];
  narratorElement.style.fontSize = GetFontSizeBasedOnString(
    Language[nextScene.text]
  );
  // bottomChoiceContainer.transfrom = "translateX(0%)";
  speechBubbleLeft.classList.add('hidden');
  speechBubbleRight.classList.add('hidden');
  infoboxElement.classList.add('hidden');
}

function WriteDialogue() {
  infoboxElement.classList.add('hidden');
  narratorElement.classList.add('hidden');

  if (nextScene.text_position === 'speechLeft') {
    //bottomChoiceContainer.transfrom = "translateX(0%)";
    speechBubbleLeft.classList.remove('hidden');
    speechBubbleRight.classList.add('hidden');
    speechBubbleLeft.innerHTML = Language[nextScene.text];
  } else {
    //bottomChoiceContainer.transfrom = "translateX(0%)";
    speechBubbleRight.classList.remove('hidden');
    speechBubbleLeft.classList.add('hidden');
    speechBubbleRight.innerHTML = Language[nextScene.text];
  }
}

// player choice box setup
function PlayerChoiceSetup() {
  bottomPlayerChoiceElement.classList.add('fade-in-animation-long');

  let choiceTextLength = 0;

  for (let i = 0; i < playerChoiceElements.length; i++) {
    // hide null choices
    if (nextScene.type === 'linear' || i >= nextScene.player_choice.length) {
      playerChoiceElements[i].classList.add('hidden');
    } else {
      playerChoiceElements[i].classList.remove('hidden');
      playerChoiceTextElements[i].innerHTML =
        Language[nextScene.player_choice[i].text];
      choiceTextLength += Language[nextScene.player_choice[i].text].length;

      if (Language[nextScene.player_choice[i].text] == null) {
        console.error(
          'next scene text missing, typo here:? ' +
            nextScene.player_choice[i].text
        );
      }
    }
  }
  bottomPlayerChoiceElement.style.fontSize =
    GetFontSizeBasedOnStringLength(choiceTextLength);
}

bottomPlayerChoiceElement.addEventListener('animationend', () => {
  waitingForPlayerChoiceButtons = false;
});

function GetFontSizeBasedOnString(string) {
  const smallFontSize = '1.16rem';
  const mediumFontSize = '1.3rem';
  const largeFontSize = '1.5rem';
  if (string.length > 240) {
    return smallFontSize;
  } else if (string.length > 150) {
    return mediumFontSize;
  }
  return largeFontSize;
}
function GetFontSizeBasedOnStringLength(numbers) {
  const smallFontSize = '1.25rem';
  const mediumFontSize = '1.35rem';
  const largeFontSize = '1.5rem';
  if (numbers > 200) {
    return smallFontSize;
  } else if (numbers > 110) {
    return mediumFontSize;
  }
  return largeFontSize;
}

window.addEventListener('beforeunload', function () {
  localStorage.setItem('sceneIDSave', sceneID);
});
