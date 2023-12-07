/*
  Module handles preloading images
*/
document.addEventListener('DOMContentLoaded', function () {
  const firstScenePreload = [
    './images/backgrounds/KoulunPiha.png',
    './images/characters/HahmoSofi.png',
    './images/characters/HahmoSofiHuolestunut.png',
    './images/characters/HahmoSofiVihainen.png',
    './images/characters/HahmoKouluterkka.png',
    // checkataan mitkä on tärkeimmät kuvat alkuun
  ];

  const restOfTheImages = [
    './images/backgrounds/Energiajuoma.png',
    './images/backgrounds/EnergiaJuomaPinkki.png',
    './images/backgrounds/KannabisLiila.png',
    './images/backgrounds/Kaytava.png',
    './images/backgrounds/JuomaAutomaatti.png',
    './images/backgrounds/LuokanOvi.png',
    './images/backgrounds/Luokkahuone.png',
    './images/backgrounds/MironKoti.png',
    './images/backgrounds/Nuuska.png',
    './images/backgrounds/OmaHuone.png',
    './images/backgrounds/Pillerit.png',
    './images/backgrounds/PuhelinKirjoitaViesti.png',
    './images/backgrounds/PuhelinMuskelit.png',
    './images/backgrounds/PuhelinSnappi.png',
    './images/backgrounds/PuhelinViestit.png',
    './images/backgrounds/Puisto.png',
    './images/backgrounds/Risteys.png',
    './images/backgrounds/RoopenKoti.png',
    './images/backgrounds/Roskikset.png',
    './images/backgrounds/Steroidit.png',
    './images/backgrounds/Vanhemmat.png',
    // lisätään joskus loput
  ];
  preloadImages(restOfTheImages);

  function preloadImages(images) {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }
});