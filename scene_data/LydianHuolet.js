const LydianHuolet = {    
        "LydianHuolet1": {
          "_comment": "",
          "type": "linear",
          "background": "Roskikset",
          "characters": ["HahmoSofi", "HahmoLydia"],
          "text_type": "speech",
          "text_position": "speechLeft",
          "text": "tLydianHuolet1",
          "next_scene": "LydianHuolet2"
        },
      
        "LydianHuolet2": {
          "_comment": "",
          "type": "linear",
          "background": "Roskikset",
          "characters": ["HahmoSofi", "HahmoLydia"],
          "text_type": "speech",
          "text_position": "speechLeft",
          "text": "tLydianHuolet2",
          "next_scene": "LydianHuolet3"
        },
      
        "LydianHuolet3": {
          "_comment": "",
          "type": "linear",
          "background": "Roskikset",
          "characters": ["HahmoSofi", "HahmoLydia"],
          "text_type": "speech",
          "text_position": "speechLeft",
          "text": "tLydianHuolet3",
          "next_scene": "LydianHuolet4"
        },
      
        "LydianHuolet4": {
          "_comment": "",
          "type": "linear",
          "background": "Roskikset",
          "characters": ["HahmoSofi", "HahmoLydia"],
          "text_type": "speech",
          "text_position": "speechLeft",
          "text": "tLydianHuolet4",
          "next_scene": "LydianHuolet5"
        },
      
        "LydianHuolet5": {
          "_comment": "speech",
          "type": "linear",
          "background": "Roskikset",
          "characters": ["HahmoSofi", "HahmoLydia"],
          "text_type": "speech",
          "text_position": "speechRight",
          "text": "tLydianHuolet5",
          "next_scene": "LydianHuolet6"
        },
      
        "LydianHuolet6": {
          "_comment": "",
          "type": "options",
          "background": "Roskikset",
          "characters": ["HahmoSofi", "HahmoLydia"],
          "text_type": "speech",
          "text_position": "speechRight",
          "text": "tLydianHuolet6",
          "player_choice": [
            {
              "text": "tLydianHuolet6Lahdetaan",
              "next_scene": "AnuKuulee1"
            },
            {
              "text": "tLydianHuolet6Autetaan",
              "next_scene": "LydianNude1"
            }
          ]
        },
      
        "LydianNude1": {
            "_comment": "",
            "type": "linear",
            "background": "Roskikset",
            "characters": ["HahmoLydia"],
            "text_type": "speech",
            "text_position": "speechLeft",
            "text": "tLydianNude1",
            "next_scene": "LydianNude2"
          },
        
          "LydianNude2": {
            "_comment": "",
            "type": "linear",
            "background": "Roskikset",
            "characters": ["HahmoLydia"],
            "text_type": "speech",
            "text_position": "speechLeft",
            "text": "tLydianNude2",
            "next_scene": "LydianNude3"
          },
        
          "LydianNude3": {
            "_comment": "",
            "type": "options",
            "background": "Roskikset",
            "characters": ["HahmoLydia"],
            "text_type": "narrator",
            "text_position": "",
            "text": "tLydianNude3",
            "player_choice": [
              {
                "text": "tLydianNude3Koulu",
                "next_scene": "LydianNude4"
              },
              {
                "text": "tLydianNude3SVS",
                "next_scene": "LydianNude4"
              },
              {
                "text": "tLydianNude3Aikuinen",
                "next_scene": "LydianNude4"
              }
            ]
          },
        
          "LydianNude4": {
            "_comment": "",
            "type": "linear",
            "background": "Roskikset",
            "characters": ["HahmoLydia"],
            "text_type": "narrator",
            "text_position": "",
            "text": "tLydianNude4",
            "next_scene": "LydianNude5"
          },
        
          "LydianNude5": {
            "_comment": "",
            "type": "linear",
            "background": "Roskikset",
            "characters": ["HahmoLydia"],
            "text_type": "speech",
            "text_position": "speechLeft",
            "text": "tLydianNude5",
            "next_scene": "Energiajuomat1"
          },
        
        "AnuKuulee1": {
          "_comment": "",
          "type": "options",
          "background": "Roskikset",
          "characters": ["HahmoKuraattoriAnu", "HahmoSofi"],
          "text_type": "speech",
          "text_position": "speechLeft",
          "text": "tAnuKuulee1",
          "player_choice": [
            {
              "text": "tAnuKuulee1OK",
              "next_scene": "AnuKuulee2Lydia"
            },
            {
              "text": "tAnuKuulee1Lydia",
              "next_scene": "SofinViiltely1"
            }
          ]
        },
            
        "SofinViiltely1": {
          "_comment": "",
          "type": "linear",
          "background": "Roskikset",
          "characters": ["HahmoSofi"],
          "text_type": "speech",
          "text_position": "speechLeft",
          "text": "tSofinViiltely1",
          "next_scene": "SofinViiltely2"
        },
            
        "SofinViiltely2": {
            "_comment": "",
            "type": "options",
            "background": "Roskikset",
            "characters": [HahmoSofi],
            "text_type": "speech",
            "text_position": "speechLeft",
            "text": "tSofinViiltely2",
            "player_choice": [
              {
                "text": "tSofinViiltely2Itsekin",
                "next_scene": "TukipalvelutHyvaAjatus"
              },
              {
                "text": "tSofinViiltely2OK",
                "next_scene": "TukipalvelutPidaMielessa"
              }
            ]
          },
        
        "TukipalvelutHyvaAjatus": {
          "_comment": "",
          "type": "linear",
          "background": "Roskikset",
          "characters": [],
          "text_type": "narrator",
          "text_position": "",
          "text": "tTukipalvelutHyvaAjatus",
          "next_scene": "Energiajuomat1"
        },
      
        "TukipalvelutPidaMielessa": {
          "_comment": "",
          "type": "linear",
          "background": "Roskikset",
          "characters": [],
          "text_type": "narrator",
          "text_position": "",
          "text": "tTukipalvelutPidaMielessa",
          "next_scene": "Energiajuomat1"
        },
}
export default LydianHuolet