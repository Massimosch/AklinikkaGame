/*
  Module handles preloading images
*/
document.addEventListener('DOMContentLoaded', function () {

  const firstScenePreload = [
    './images/backgrounds/KoulunPiha.png',
    './images/characters/HahmoSofiJuoksee.png',
  ];
  const secondPreload = [
    './images/characters/HahmoSofiHuolestunut.png',
    './images/characters/HahmoSofiVihainen.png',
    './images/characters/HahmoSofi.png',
    
    // checkataan mitkä on tärkeimmät kuvat alkuun
  ];
  const thirdPreload = [
    './images/backgrounds/Roskikset.png',
    './images/characters/HahmoKouluterkka.png',
  ]
  const fourthPreload = [
    './images/characters/HahmoLydiaAhdistunut.png',
    './images/characters/HahmoLydia.png',
    './images/backgrounds/Kaytava.png',
  ]
  const fifthPreload = [
    './images/backgrounds/JuomaAutomaatti.png',
    './images/characters/HahmoLydiaKiitollinen.png',
    './images/characters/HahmoRoope.png',
    './images/characters/HahmoRoopeYlpea.png',
  ]
  const sixthPreload = [
    './images/backgrounds/Luokkahuone.png',
    './images/characters/HahmoKiusaajaPoika.png',
    './images/characters/HahmoKiusaajaTytto.png',
  ]
  const seventhPreload = [
    './images/backgrounds/Energiajuoma.png',
    './images/characters/HahmoMiroVasynyt.png',
    './images/characters/HahmoOpettajaPirkka.png',
  ]
  const eightPreload = [
    './images/backgrounds/MironKoti.png',
    './images/backgrounds/RoopenKoti.png',
    './images/backgrounds/Puisto.png',
    './images/characters/HahmoMironKaverit.png',
    './images/characters/HahmoMiro.png',
  ]
  const restOfTheImages = [

    './images/backgrounds/LuokanOvi.png',
    './images/backgrounds/Nuuska.png',
    './images/backgrounds/Keittio.png',
    './images/backgrounds/Kannabis.png',
    './images/backgrounds/Onnettomuus.png',
    './images/backgrounds/OmaHuone.png',
    './images/backgrounds/Pillerit.png',
    './images/backgrounds/PuhelinKirjoitaViesti.png',
    './images/backgrounds/PuhelinMuskelit.png',
    './images/backgrounds/PuhelinSnappi.png',
    './images/backgrounds/Risteys.png',
    './images/backgrounds/PuhelinViestit.png',
    './images/backgrounds/SofinKoti.png',
    './images/backgrounds/Steroidit.png',
    './images/backgrounds/Vanhemmat.png',

    './images/characters/HahmoKuraattoriAnu.png',
    './images/characters/HahmoMiroAhdistunut.png',
    './images/characters/HahmoMiroHuolestunut.png',
    './images/characters/OnnettomuusEffekti.png',
    './images/characters/Skootteri.png',
    // lisätään joskus loput
  ];

  const preloadOrder = [
    firstScenePreload,
    secondPreload,
    thirdPreload,
    fourthPreload,
    fifthPreload,
    sixthPreload,
    seventhPreload,
    eightPreload,
    restOfTheImages,
  ];

  preloadOrder.forEach((preload) => {
    preloadImages(preload);
  });

  function preloadImages(images) {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }
});