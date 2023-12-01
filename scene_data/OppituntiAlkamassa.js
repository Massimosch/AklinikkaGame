const OppituntiAlkamassa = {
  Oppitunti1: {
    _comment: "",
    type: "linear",
    background: "Luokkahuone",
    characters: [""],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tOppitunti1",
    next_scene: "Oppitunti2",
  },
  Oppitunti2: {
    _comment: "",
    type: "linear",
    background: "Luokkahuone",
    characters: ["HahmoOpettajaPirkka"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tOppitunti2",
    next_scene: "Oppitunti3",
  },
  Oppitunti3: {
    _comment: "",
    type: "linear",
    background: "Luokkahuone",
    characters: ["HahmoOpettajaPirkka"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tOppitunti3",
    next_scene: "Oppitunti4",
  },
  Oppitunti4: {
    _comment: "",
    type: "linear",
    background: "Luokkahuone",
    characters: ["HahmoOpettajaPirkka"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tOppitunti4",
    next_scene: "AhdistusInfobox",
  },

  AhdistusInfobox: {
    _comment: "",
    type: "linear",
    background: "",
    characters: [""],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tAhdistusInfobox",
    next_scene: "Oppitunti5",
  },

  Oppitunti5: {
    _comment: "",
    type: "options",
    background: "Luokkahuone",
    characters: ["HahmoOpettajaPirkka"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tOppitunti5",
    player_choice: [
      {
        text: "tOppitunti5A",
        next_scene: "Oppitunti6",
      },
      {
        text: "tOppitunti5B",
        next_scene: "Oppitunti6",
      },
      {
        text: "tOppitunti5C",
        next_scene: "Oppitunti6",
      },
    ],
  },

  Oppitunti6: {
    _comment: "",
    type: "options",
    background: "Luokkahuone",
    characters: ["HahmoOpettajaPirkka"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tOppitunti6",
    player_choice: [
      {
        text: "tOppitunti6lfA",
        next_scene: "Oppitunti7",
      },
      {
        text: "tOppitunti6lfB",
        next_scene: "Oppitunti7",
      },
      {
        text: "tOppitunti6lfC",
        next_scene: "Oppitunti7",
      },
    ],
  },

  Oppitunti7: {
    _comment: "",
    type: "linear",
    background: "Luokkahuone",
    characters: ["HahmoOpettajaPirkka"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tOppitunti7",
    next_scene: "Oppitunti8",
  },
  Oppitunti8: {
    _comment: "",
    type: "linear",
    background: "Luokkahuone",
    characters: ["HahmoOpettajaPirkka"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tOppitunti8",
    next_scene: "Oppitunti9",
  },

  Oppitunti9: {
    _comment: "",
    type: "linear",
    background: "Luokkahuone",
    characters: ["HahmoOpettajaPirkka"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tOppitunti9",
    next_scene: "Oppitunti10",
  },
  Oppitunti10: {
    _comment: "",
    type: "linear",
    background: "Luokkahuone",
    characters: ["HahmoOpettajaPirkka"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tOppitunti10",
    next_scene: "Oppitunti11",
  },
  Oppitunti11: {
    _comment: "",
    type: "options",
    background: "Luokkahuone",
    characters: ["HahmoOpettajaPirkka"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tOppitunti11",
    player_choice: [
      {
        text: "tOppitunti11Terkka",
        next_scene: "Oppitunti12",
      },
      {
        text: "tOppitunti11Kuraattori",
        next_scene: "Oppitunti12",
      },
      {
        text: "tOppitunti11TK",
        next_scene: "Oppitunti12",
      },
    ],
  },
  SekasinInfobox: {
    _comment: "",
    type: "linear",
    background: "Luokkahuone",
    characters: [""],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tSekasinInfobox",
    scene: "Oppitunti11Sekasin",
  },

  Oppitunti11Sekasin: {
    _comment: "",
    type: "",
    background: "Luokkahuone",
    characters: ["HahmoOpettajaPirkka"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tOppitunti11Sekasin",
    next_scene: "Oppitunti12",
  },

  Oppitunti12: {
    _comment: "",
    type: "linear",
    background: "Luokkahuone",
    characters: ["HahmoOpettajaPirkka"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tOppitunti12",
    next_scene: "KouluLoppuu",
  },

  KouluLoppuu: {
    _comment: "",
    type: "options",
    background: "Luokkahuone",
    characters: ["HahmoOpettajaPirkka"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tKouluLoppuu",
    player_choice: [
      {
        text: "tKouluLoppuuBileisiin",
        next_scene: "Oppitunti12",
      },
      {
        text: "tKouluLoppuuKotiin",
        next_scene: "Oppitunti12",
      },
    ],
  },
};
export default OppituntiAlkamassa;
