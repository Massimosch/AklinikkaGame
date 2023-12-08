class SaveGameState {
  constructor() {
    this.savedData = {
      // init default scene data here
      currentSavedData: 'PelinAlku',
    };
  }

  saveGame() {
    const data = JSON.stringify(this.savedData);
    localStorage.setItem('savedGame', data);
    console.log('Game saved successfully.');
    //convert saveGame data to localstorage as json.
  }

  loadGame() {
    // look for json in localstorage and parse it
    const data = localStorage.getItem('savedGame');
    if (data) {
      this.savedData = JSON.parse(data);
      console.log('Game loaded successfully.');
    } else {
      console.log('No saved game found.');
    }
  }

  resetGame() {
    this.savedData = {
      currentSavedData: 'PelinAlku',
    };
    this.saveGame();
    console.log('Game reset successfully.');
  }
}

export default SaveGameState;
