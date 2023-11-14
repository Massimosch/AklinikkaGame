import StartSceneData from "/Data/StartSceneData.js";
import Suomi from "./data/suomi.js";

const mainGameContainer = document.querySelector('.game-flex-container');
const settingsMenu = document.querySelector('.top-options-menu');

const infoboxElement = document.querySelector('.narratorBox');
const infoboxText = document.querySelector('.narratorBoxText');

const speechBubbleElement = document.querySelector('.speechBubble');
const speechBubbleText = document.querySelector('.speechBubbleText');

// array queries
const characterElements = document.querySelectorAll('.character');
const playerChoiceElements = document.querySelectorAll('.choiceBox');
const playerChoiceTextElements = document.querySelectorAll('.choiceBoxText');

let currentBackground;
let language = Suomi;
let currentScene;
let nextScene;

// game setup
nextScene = StartSceneData.SofillaOnTietoa_1;
addClickEventListener();
PopulateScene();

// click event listener
function addClickEventListener(){
  mainGameContainer.addEventListener("click", event => {

    // double click speed timer here to avoid accidental progress?

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
  if (nextScene.background !== currentBackground && nextScene.background !== null){
    currentBackground = nextScene.background;
    mainGameContainer.style.backgroundImage = "url(images/backgrounds/" + currentBackground + ")";
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

  if (nextScene.text_type === "dialogue"){
    WriteDialogue();
  }
  if (nextScene.text_type === "infobox"){
    WriteInfobox();
  }
  PlayerChoiceSetup();

  // maybe use current scene later somewhere dunno
  currentScene = nextScene;
}
function WriteInfobox(){
  infoboxElement.classList.remove('hidden');
  infoboxText.textContent = language[nextScene.text];
  speechBubbleElement.classList.add('hidden');
}
function WriteDialogue(){
  speechBubbleElement.classList.remove('hidden');
  speechBubbleText.textContent = language[nextScene.text];
  infoboxElement.classList.add('hidden');
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
