/*
  Module handles scenes and player choices
*/

export { StartSetup };
import { CheckIfClickedWhilePauseOpen, PauseMenuClicked, Language } from './menu_module.js';

import PelinAlku from './scene_data/PelinAlku.js';
import LydianHuolet from './scene_data/LydianHuolet.js';
import MironKotona from './scene_data/MironKotona.js';
import MironTapaaminen from './scene_data/MironTapaaminen.js';
import EnergiajuomaNuuskaRahapelit from './scene_data/EnergiajuomaNuuskaRahapelit.js';
import OppituntiAlkamassa from './scene_data/OppituntiAlkamassa.js';
import RoopenSteroidit from './scene_data/RoopenSteroidit.js';
import SofiaSaattamassa from './scene_data/SofiaSaattamassa.js';
import SofinKotona from './scene_data/SofinKotona.js';
import SofillaOnTietoa from './scene_data/SofillaOnTietoa.js';
import SofinSomeTauko from './scene_data/SofinSometauko.js';
import Kannabis from './scene_data/Kannabis.js';
import TuomaksenKiusaaminen from './scene_data/TuomaksenKiusaaminen.js';

const sceneDataFiles = [
  PelinAlku,
  LydianHuolet,
  MironKotona,
  MironTapaaminen,
  OppituntiAlkamassa,
  EnergiajuomaNuuskaRahapelit,
  TuomaksenKiusaaminen,
  RoopenSteroidit,
  SofiaSaattamassa,
  SofinKotona,
  SofillaOnTietoa,
  SofinSomeTauko,
  Kannabis,
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
const bottomTextElement = document.querySelector('.bottom-choice-container');

// settings menu
const pauseMenuElement = document.querySelector('.top-options-menu');

/*
  Alla olevassa voi vaihtaa currentScene = minkä haluaa
  Rivillä nextScene = GetSceneData("EnsimmainenScene");
  Vaihda EnsimmainenScene siihen SceneID:en josta haluat aloittaa pelin. 
  Peli alkaa Start Menusta, klikkaa "Aloita peli" ja pääset valitsemaasi aloitussceneen
*/
function StartSetup(){
  nextScene = GetSceneData("EnsimmainenScene");
  PopulateScene();
}

let currentDataFile = PelinAlku;

let currentBackground;
let currentScene;
let nextScene;

let transitionDelayTime;
let delayTimeInSeconds = 0.1;
//let pauseMenuOpen = false;

// game setup
StartSetup();
AddClickEventListener();

// This is for switching the SceneData file
function GetSceneData(sceneName) {
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
    if(CheckIfClickedWhilePauseOpen() === true){
      return;
    }
    if (event.target === pauseMenuElement) {
      PauseMenuClicked();
      return;
    }
    if (event.target.tagName === 'A') {
      return;
    }

    if (nextScene == null) {
      console.error('Scene not found?: ' + nextScene);
      return;
    }

    if (currentScene.type === 'linear') {
      nextScene = GetSceneData(currentScene.next_scene);
      if(nextScene == null){
        return;
      }
      PopulateScene();
      return;
    }
    // if choice elements clicked, set nextscene
    for (let i = 0; i < playerChoiceElements.length; i++) {
      if (event.target.parentElement === playerChoiceElements[i]) {
        nextScene = GetSceneData(currentScene.player_choice[i].next_scene);
        if(nextScene == null){
          return;
        }
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
    WriteInfobox();
  }
  if (nextScene.text_type === 'narrator') {
    WriteNarrator();
  }

  PlayerChoiceSetup();

  ResetAnimations();
  AnimateScene();
  // maybe use current scene later somewhere dunno
  currentScene = nextScene;
}

function ResetAnimations() {
  topTextElement.classList.remove('fade-in-animation');
  bottomTextElement.classList.remove('fade-in-animation');
  // "in order to know what the offsetWidth is, the browser has to abandon
  // its plan of batching the changes and perform the reflow of the page right now"
  void topTextElement.offsetWidth;
}
function AnimateScene() {
  topTextElement.classList.add('fade-in-animation');
  bottomTextElement.classList.add('fade-in-animation');
}

function WriteInfobox() {
  infoboxElement.classList.remove('hidden');
  infoboxText.innerHTML = Language[nextScene.text];
  // bottomChoiceContainer.transfrom = "translateX(0%)";
  speechBubbleLeft.classList.add('hidden');
  speechBubbleRight.classList.add('hidden');
  narratorElement.classList.add('hidden');
}

function WriteNarrator() {
  narratorElement.classList.remove('hidden');
  narratorText.innerHTML = Language[nextScene.text];
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
  for (let i = 0; i < playerChoiceElements.length; i++) {
    // hide null choices
    if (nextScene.type === 'linear' || i >= nextScene.player_choice.length) {
      playerChoiceElements[i].classList.add('hidden');
    } else {
      playerChoiceElements[i].classList.remove('hidden');
      playerChoiceTextElements[i].innerHTML =
        Language[nextScene.player_choice[i].text];
      if (Language[nextScene.player_choice[i].text] == null) {
        console.error(
          'next scene text missing, typo here:? ' +
            nextScene.player_choice[i].text
        );
      }
    }
  }
}