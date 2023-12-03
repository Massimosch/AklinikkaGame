import StartSceneData from './scene_data/StartSceneData.js';
import SuomiData from './languages/suomi.js';
//import EnglishData from "./languages/english.js";
//import SwedishData from "./languages/swedish.js";

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

const mainGameContainer = document.querySelector('.game-flex-container');

const infoboxElement = document.querySelector('.narratorBox');
const infoboxText = document.querySelector('.narratorBoxText');

const speechBubbleLeft = document.querySelector('.speechBubbleLeft');
const speechBubbleRight = document.querySelector('.speechBubbleRight');

// array queries
const characterElements = document.querySelectorAll('.character');
const playerChoiceElements = document.querySelectorAll('.choiceBox');
const playerChoiceTextElements = document.querySelectorAll('.choiceBoxText');

// animation containers
const topTextElement = document.querySelector('.top-text-container');
const bottomTextElement = document.querySelector('.bottom-choice-container');

// Pause menu
/*const pauseMenuIcon = document.querySelector('.top-options-menu');
const pauseMenu = document.querySelector('.pauseMenuBox');
const continueButton = document.querySelector('.continue-button');
const restartButton = document.querySelector('.restart-button');
// pause language switch buttons
const suomiButton = document.querySelector('.suomi-button');
const englishButton = document.querySelector('.english-button');
const swedishButton = document.querySelector('.swedish-button'); 
*/ 


// Testi eri branchien testaukseen
/*  
    PelinAlku.PelinAlku
    SofillaOnTietoa.SofillaOnTietoaAlku
    LydianHuolet.LydianHuolet1
    EnergiajuomaNuuskaRahapelit.Juomaautomaatti1
    TuomaksenKiusaaminen.TuomaksenKiusaaminen1
    MironTapaaminen.Energiajuomat1
    Kannabis.RoopenJointti1
    MironKotona.MatkallaMirolle1
    OppituntiAlkamassa.Oppitunti1
    RoopenNuuskat.MitaTiedatVapesta
    RoopenSteroidit.RoopenSteroidit1
    SofiaSaattamassa.SofiSaattaa1
    SofinKotona.SofinKotona
    SofinSometauko.SofinSometauko1
    TuomaksenKiusaaminen.TuomaksenKiusaaminen1
    Jos tuolla on eri alkuja, kun eka scene, 
    niin pitää muuttaa gameStartingScene muuttujaa siihen mihin haluaa

  eli tässä alla oleva gameStartingScene pitää vaihtaa osotteeseen mihin haluaa
  Vaihda StartSceneData.SofillaOnTietoaAlku johonkin noista yllä olevista tai omaan sceneen.
  Ja currentDataFile siihen alkupätkään joka on se filu. Alta esimerkki
*/
let gameStartingScene = PelinAlku.PelinAlku;

let currentBackground;
let language = SuomiData;
let currentScene;
let nextScene;
let transitionDelayTime;
let delayTimeInSeconds = 0.1;
//let pauseMenuOpen = false;

// game setup
nextScene = gameStartingScene;
addClickEventListener();
PopulateScene();
/*continueButton.addEventListener('click', ContinueGame);
restartButton.addEventListener('click', RestartGame);
suomiButton.addEventListener('click', ChangeLanguage('suomi'));
englishButton.addEventListener('click', ChangeLanguage('english'));
swedishButton.addEventListener('click', ChangeLanguage('swedish'));*/

// This is for switching the SceneData file from the SceneDataArray at addClickEventlistener
function getSceneData(sceneName) {
  const sceneDataArray = [
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

  for (const sceneData of sceneDataArray) {
    if (sceneData[sceneName]) {
      return sceneData[sceneName];
    }
  }
  console.error('Scene not found: ' + sceneName);
  return null;
}

/*
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
  }}
*/


// click event listener
function addClickEventListener() {
  mainGameContainer.addEventListener('click', event => {
    if (ClickedTooFast() === true) {
      return;
    }
    if (nextScene == null) {
      console.error('Scene not found?: ' + nextScene);
      return;
    }
    // if pause menu is open and player clicks outside it into game screen, pause ends
    /*if (pauseMenuOpen === true) {
      ContinueGame();
      return;
    }

    if (event.target === pauseMenuIcon) {
      pauseMenuOpen = true;
      OpenPauseMenu();
      return;
    }*/

    if (currentScene.type === 'linear') {
      nextScene = getSceneData(currentScene.next_scene);
      PopulateScene();
      return;
    }
    // if choice elements clicked, set nextscene
    for (let i = 0; i < playerChoiceElements.length; i++) {
      if (event.target.parentElement === playerChoiceElements[i]) {
        nextScene = getSceneData(currentScene.player_choice[i].next_scene);
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
  if (nextScene.text_type === 'infobox' || nextScene.text_type === 'narrator') {
    WriteInfobox();
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
  infoboxText.textContent = language[nextScene.text];
  // bottomChoiceContainer.transfrom = "translateX(0%)";
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
      if (language[nextScene.player_choice[i].text] == null) {
        console.error(
          'next scene text missing, typo here:? ' +
            nextScene.player_choice[i].text
        );
      }
    }
  }
}
