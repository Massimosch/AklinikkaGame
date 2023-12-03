const TuomaksenKiusaaminen = {
  TuomaksenKiusaaminen1: {
    _comment: "",
    type: "linear",
    background: "Luokkahuone",
    characters: ["HahmoTuomas", "HahmoKiusaajaPoika", "HahmoKiusaajaTytto"],
    text_type: "narrator",
    text: "tTuomaksenKiusaaminen1",
    next_scene: "TuomaksenKiusaaminen2",
  },

  TuomaksenKiusaaminen2: {
    _comment: "",
    type: "options",
    background: "Luokkahuone",
    characters: ["HahmoTuomas", "HahmoKiusaajaPoika", "HahmoKiusaajaTytto"],
    text_type: "narrator",
    text: "tTuomaksenKiusaaminen2",
    player_choice: [
      {
        text: "tTuomaksenKiusaaminen2Apuun",
        next_scene: "OpettajaApuun2",
      },
      {
        text: "tTuomaksenKiusaaminen2Pojat",
        next_scene: "OpettajaApuun1",
      },
      {
        text: "tTuomaksenKiusaaminen2Pelottaa",
        next_scene: "OpettajaApuun1",
      },
    ],
  },
  OpettajaApuun1: {
    _comment: "",
    type: "linear",
    background: "Luokkahuone",
    characters: ["HahmoTuomas","HahmoOpettajaPirkka"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tOpettajaApuun1",
    next_scene: "TuomaksenTukeminen",
  },
  OpettajaApuun2: {
    _comment: "",
    type: "linear",
    background: "Luokkahuone",
    characters: ["HahmoTuomas", "HahmoOpettajaPirkka"],
    text_type: "narrator",
    text: "tOpettajaApuun2",
    next_scene: "TuomaksenTukeminen",
  },
  TuomaksenTukeminen: {
    _comment: "",
    type: "options",
    background: "Luokkahuone",
    characters: ["HahmoTuomas"],
    text_type: "narrator",
    text: "tTuomaksenTukeminen",
    player_choice: [
      {
        text: "tTuomaksenTukeminenJoo",
        next_scene: "TuomaksenTukeminenHyvaPaatos",
      },
      {
        text: "tTuomaksenTukeminenEi",
        next_scene: "TuomaksenTukeminenTiesitko",
      },
    ],
  },
  TuomaksenTukeminenHyvaPaatos: {
    _comment: "",
    type: "linear",
    background: "Luokkahuone",
    characters: ["HahmoTuomas"],
    text_type: "narrator",
    text: "tTuomaksenTukeminenHyvaPaatos",
    next_scene: "Oppitunti1",
  },
  TuomaksenTukeminenTiesitko: {
    _comment: "",
    type: "linear",
    background: "Luokkahuone",
    characters: ["HahmoTuomas"],
    text_type: "narrator",
    text: "tTuomaksenTukeminenTiesitko",
    next_scene: "Oppitunti1",
  },
};
export default TuomaksenKiusaaminen;
