import StartSceneData from "/data/StartSceneData.js";
import Suomi from "./data/suomi.js";

const mainGameContainer = document.querySelector('.game-flex-container');
const settingsMenu = document.querySelector('.top-options-menu');

const infoboxElement = document.querySelector('.narratorBox');
const infoboxText = document.querySelector('.narratorBoxText');

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
function addClickEventListener(){
  mainGameContainer.addEventListener("click", event => {

    // double click speed timer here to avoid accidental progress?
    const currentTimeInSeconds = new Date().getTime() / 1000;
    
    if (currentTimeInSeconds - transitionDelayTime < delayTimeInSeconds) {
      console.log(`Clicked too fast need to wait delayTime = ${delayTimeInSeconds}`);
      return;
    }
    transitionDelayTime = currentTimeInSeconds;

    if (event.target === settingsMenu){
      //TODO settings menu opening?
      return;
    }

    if (currentScene.type === "linear"){
      nextScene = StartSceneData[currentScene.next_scene];
      PopulateScene();
      return;
    }
    // if choice elements clicked, set nextscene
    for (let i = 0; i< playerChoiceElements.length; i++){
      if(event.target.parentElement === playerChoiceElements[i]){
        nextScene = StartSceneData[currentScene.player_choice[i].next_scene];
        PopulateScene();
        return;
      }
    }
  });
}

function PopulateScene(){

  // background image change
  if (nextScene.background !== null && nextScene.background !== currentBackground){
    currentBackground = nextScene.background;
    mainGameContainer.style.backgroundImage = "url(images/backgrounds/" + currentBackground + ".png)";
  }

  // draw characters here
  for (let i = 0; i< characterElements.length; i++){
    if (i >= nextScene.characters.length){
      characterElements[i].classList.add('hidden');
      continue;
    }
    characterElements[i].style.backgroundImage = "url(images/characters/" + nextScene.characters[i] + ".png)";
    characterElements[i].classList.remove('hidden');
  }

  if (nextScene.text_type === "dialogue" || nextScene.text_type === "speech"){
    WriteDialogue();
  }
  if (nextScene.text_type === "infobox" || nextScene.text_type === "narrator"){
    WriteInfobox();
  }
  PlayerChoiceSetup();

  // maybe use current scene later somewhere dunno
  currentScene = nextScene;
}
function WriteInfobox(){
  infoboxElement.classList.remove('hidden');
  infoboxText.textContent = language[nextScene.text];
  speechBubbleLeft.classList.add('hidden');
  speechBubbleRight.classList.add('hidden');
}
function WriteDialogue(){
  infoboxElement.classList.add('hidden');

  if (nextScene.text_position === "speechLeft"){
    speechBubbleLeft.classList.remove('hidden');
    speechBubbleRight.classList.add('hidden');
    speechBubbleLeft.textContent = language[nextScene.text];
  }
  else{
    speechBubbleRight.classList.remove('hidden');
    speechBubbleLeft.classList.add('hidden');
    speechBubbleRight.textContent = language[nextScene.text];
  }
}

// player choice box setup
function PlayerChoiceSetup(){
  for (let i = 0; i< playerChoiceElements.length; i++) {
    // hide null choices
    if (nextScene.type === "linear" || i >= nextScene.player_choice.length){
      playerChoiceElements[i].classList.add('hidden');
    }
    else{
      playerChoiceElements[i].classList.remove('hidden');
      playerChoiceTextElements[i].textContent = language[nextScene.player_choice[i].text];
    }
  }
}
