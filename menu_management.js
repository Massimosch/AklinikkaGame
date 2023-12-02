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
  });