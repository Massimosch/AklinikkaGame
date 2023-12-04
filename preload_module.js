/*
  Module handles preloading images
*/
document.addEventListener('DOMContentLoaded', function () {
  const firstScenes = [
    './images/backgrounds/KoulunPiha.png',
    './images/backgrounds/Roskikset.png',
    './images/characters/HahmoSofi.png',
    './images/characters/HahmoSofiHuolestunut.png',
    './images/characters/HahmoSofiVakava.png',
    './images/characters/HahmoSofiVihainen.png',
    './images/characters/HahmoSofiYlpea.png',
    './images/characters/HahmoKouluterkka.png',
    // checkataan mitkä on tärkeimmät kuvat alkuun
  ];

  const restOfTheImages = [
    './images/backgrounds/Automaatti.png',
    './images/backgrounds/Energiajuoma.png',
    './images/backgrounds/EnergiaJuomaPinkki.png',
    './images/backgrounds/JuomaAutomaattiPinkki.png',
    './images/backgrounds/Kannabis.png',
    // lisätään joskus loput
  ];

  let loadedImages = 0;
  let imageObject = [];

  const loadImages = (images) => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === images.length) {
          loadedImages = 0; // reset the counter
          loadImages(restOfTheImages); // load the next batch of images
        }
      };
      imageObject.push(img);
    });
  };

  //loadImages(firstScenes); // start by loading the first batch of images
});