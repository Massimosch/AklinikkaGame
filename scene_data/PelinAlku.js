const PelinAlku = {
    PelinAlku: {
      _comment: "",
      type: "linear",
      background: "KoulunPiha",
      characters: [],
      text_type: "narrator",
      text: "tPelinAlku",
      next_scene: "PelinAlkuHahmonMuokkaus"
    },
  
    PelinAlkuHahmonMuokkaus: {
      _comment: "",
      type: "linear",
      background: "KoulunPiha",
      characters: [],
      text_type: "narrator",
      text: "tPelinAlkuHahmonMuokkaus",
      next_scene: "PelinAlkuTutorial"
    },
  
    PelinAlkuTutorial: {
      _comment: "",
      type: "options",
      background: "KoulunPiha",
      characters: [],
      text_type: "narrator",
      text: "tPelinAlkuTutorial",
      player_choice: [
        {
          "text": "tPelinAlkuTutorialNukkumaan",
          "next_scene": "SofillaOnTietoaAlku"
        },
        {
          "text": "tPelinAlkuTutorialKasinAamut",
          "next_scene": "SofillaOnTietoaAlku"
        }
      ]
    }
}
export default PelinAlku