const SofinSometauko = {
  SofinSometauko1: {
    _comment: "",
    type: "linear",
    background: "Kaytava",
    characters: ["HahmoSofi"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tSofinSometauko1",
    next_scene: "SofinSometauko2Tiedoksi"
  },
  SofinSometauko2Tiedoksi: {
    _comment: "",
    type: "linear",
    background: "Kaytava",
    characters: ["HahmoSofi"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tSofinSometauko2Tiedoksi",
    next_scene: "SofinSometauko3EnVastaa",
  },
  SofinSometauko3EnVastaa: {
    _comment: "",
    type: "options",
    background: "Kaytava",
    characters: ["HahmoSofi"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tSofinSometauko3EnVastaa",
    player_choice: [
      {
        text: "tSofinSometauko3EnPystyis",
        next_scene: "SofinSometauko4",
      },
      {
        text: "tSofinSometauko3Miksi",
        next_scene: "SofinSometauko4",
      },
    ],
  },
  SofinSometauko4: {
    _comment: "",
    type: "linear",
    background: "Kaytava",
    characters: ["HahmoSofi"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tSofinSometauko4",
    next_scene: "SofinSometauko5",
  },
  SofinSometauko5: {
    _comment: "",
    type: "options",
    background: "Kaytava",
    characters: ["HahmoSofi"],
    text_type: "speech",
    text_position: "speechLeft",
    text: "tSofinSometauko5",
    player_choice: [
      {
        text: "tSofinSometauko5Liikaa",
        next_scene: "SometaukoInfobox2",
      },
      {
        text: "tSofinSometauko5Hyotya",
        next_scene: "SometaukoInfobox1",
      },
    ],
  },
  SometaukoInfobox1: {
    _comment: "Molemmat vaihtoehdot jatkaa kohtaukseen Oppitunti1",
    type: "linear",
    background: "Kaytava",
    characters: ["HahmoSofi"],
    text_type: "narrator",
    text: "tSometaukoInfobox1",
    next_scene: "Oppitunti1",
  },
  SometaukoInfobox2: {
    _comment: "Molemmat vaihtoehdot jatkaa kohtaukseen Oppitunti1",
    type: "linear",
    background: "Kaytava",
    characters: ["HahmoSofi"],
    text_type: "narrator",
    text: "tSometaukoInfobox2",
    next_scene: "Oppitunti1",
  },
}
export default SofinSometauko;