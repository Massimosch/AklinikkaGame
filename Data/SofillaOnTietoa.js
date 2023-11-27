const SofillaOnTietoa = {
    "SofillaOnTietoaAlku": {
      "_comment": "",
      "type": "linear",
      "background": "KoulunPiha",
      "characters": ["HahmoSofi"],
      "text_type": "narrator",
      "text_position": "",
      "text": "tSofillaOnTietoaAlku",
      "next_scene": "SofillaOnTietoaDraamaa"
    },
  
    "SofillaOnTietoaDraamaa": {
      "_comment": "",
      "type": "options",
      "background": "KoulunPiha",
      "characters": ["HahmoSofi"],
      "text_type": "speech",
      "text_position": "speechLeft",
      "text": "tSofillaOnTietoaDraamaa",
      "player_choice": [
        {
          "text": "tSofillaOnTietoaKatsomaanEi",
          "next_scene": "SofillaOnTietoaHaloo"
        },
        {
          "text": "tSofillaOnTietoaKatsomaanJoo",
          "next_scene": "SofillaOnTietoaRoskiksille"
        }
      ]
    },
  
    "SofillaOnTietoaHaloo": {
      "_comment": "",
      "type": "options",
      "background": "KoulunPiha",
      "characters": ["HahmoSofi"],
      "text_type": "speech",
      "text_position": "speechLeft",
      "text": "tSofillaOnTietoaHaloo",
      "player_choice": [
        {
          "text": "tSofillaOnTietoaHalooEiPysty",
          "next_scene": "Juomaautomaatti1"
        },
        {
          "text": "tSofillaOnTietoaHalooOkei",
          "next_scene": "LydianHuolet1"
        }
      ]
    },
  
    "SofillaOnTietoaRoskiksille": {
      "_comment": "",
      "type": "linear",
      "background": "KoulunPiha",
      "characters": ["HahmoSofi"],
      "text_type": "narrator",
      "text_position": "",
      "text": "tSofillaOnTietoaRoskiksille",
      "next_scene": "KerrotaankoTerkalle"
    },
  
    "KerrotaankoTerkalle": {
      "_comment": "",
      "type": "options",
      "background": "KoulunPiha",
      "characters": [HahmoKouluterkka],
      "text_type": "speech",
      "text_position": "speechLeft",
      "text": "tKerrotaankoTerkalle",
      "player_choice": [
        {
          "text": "tKerrotaankoTerkalleEi",
          "next_scene": "LydianHuolet1"
        },
        {
          "text": "tKerrotaankoTerkalleJoo",
          "next_scene": "TerkanVastaus"
        }
      ]
    },
  
    "TerkanVastaus": {
      "_comment": "",
      "type": "linear",
      "background": "KoulunPiha",
      "characters": [HahmoKouluterkka],
      "text_type": "speech",
      "text_position": "speechLeft",
      "text": "tTerkanVastaus",
      "next_scene": "MitaTiedatVapesta"
    },
}
export default SofillaOnTietoa