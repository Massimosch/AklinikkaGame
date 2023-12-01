const MironKotona = {
  MatkallaMirolle1: {
    "_comment": '',
    "type": 'linear',
    "background": '',
    "characters": [''],
    "text_type": 'speech',
    "text_position": 'speechLeft',
    "text": 'tMarkallaMirolle1',
    "next_scene": 'MatkallaMirolle2',
  },
  MatkallaMirolle2: {
    "_comment": '',
    "type": 'linear',
    "background": '',
    "characters": [''],
    "text_type": 'speech',
    "text_position": 'speechLeft',
    "text": 'tMarkallaMirolle2',
    "next_scene": 'MatkallaMirolle3',
  },
  MatkallaMirolle3: {
    "_comment": '',
    "type": 'linear',
    "background": '',
    "characters": [''],
    "text_type": 'speech',
    "text_position": 'speechLeft',
    "text": 'tMarkallaMirolle3',
    "next_scene": 'MironKotona1',
  },
  MironKotona1: {
    "_comment": '',
    "type": 'linear',
    "background": '',
    "characters": [''],
    "text_type": 'speech',
    "text_position": 'speechLeft',
    "text": 'tMironKotona1',
    "next_scene": 'MironKotona2',
  },
  MironKotona2: {
    "_comment": '',
    "type": 'linear',
    "background": '',
    "characters": [''],
    "text_type": 'speech',
    "text_position": 'speechLeft',
    "text": 'tMironKotona2',
    "next_scene": 'MironKotona3',
  },
  MironKotona3: {
    "_comment": '',
    "type": 'linear',
    "background": '',
    "characters": [''],
    "text_type": 'speech',
    "text_position": 'speechLeft',
    "text": 'tMironKotona3',
    "next_scene": 'MironKotona4',
  },
  MironKotona4: {
    "_comment": '',
    "type": 'linear',
    "background": '',
    "characters": [''],
    "text_type": 'speech',
    "text_position": 'speechLeft',
    "text": 'tMironKotona4',
    "next_scene": 'MironKotona5',
  },
  MironKotona5: {
    "_comment": '',
    "type": 'linear',
    "background": '',
    "characters": [''],
    "text_type": 'speech',
    "text_position": 'speechLeft',
    "text": 'tMironKotona5',
    "next_scene": 'MironKotona6',
  },
  MironKotona6: {
    "_comment": 'Ehkä vääärä next scene toisessa Option.',
    "type": 'options',
    "background": '',
    "characters": [''],
    "text_type": 'speech',
    "text_position": 'speechLeft',
    "text": 'tMironKotona6',
    "player_choice": [
      {
        "text": 'tMironKotona6Ignore',
        "next_scene": 'JuominenInfobox',
      },
      {
        "text": 'tMironKotona6Kysyt',
        "next_scene": 'MironKotona7',
      },
    ],
  },
  MironKotona7: {
    "_comment": '',
    "type": 'linear',
    "background": '',
    "characters": [''],
    "text_type": 'speech',
    "text_position": 'speechLeft',
    "text": 'tMironKotona7',
    "next_scene": 'MironKotona8',
  },
  JuominenInfobox: {
    "_comment": '',
    "type": 'linear',
    "background": '',
    "characters": [''],
    "text_type": 'speech',
    "text_position": 'speechLeft',
    "text": 'tJuominenInfobox',
    "next_scene": 'Puistossa1',
  },
  LasinenInfobox: {
    "_comment": '',
    "type": 'linear',
    "background": '',
    "characters": [''],
    "text_type": 'speech',
    "text_position": 'speechLeft',
    "text": 'tLasinenInfobox',
    "next_scene": 'MironKotona9',
  },
  MironKotona8: {
    "_comment": '',
    "type": 'options',
    "background": '',
    "characters": [''],
    "text_type": 'speech',
    "text_position": 'speechLeft',
    "text": 'tMironKotona8',
    "player_choice": [
      {
        "text": 'tMironKotona8Lasinen',
        "next_scene": 'MironKotona9',
      },
      {
        "text": 'tMironKotona8Sekasin',
        "next_scene": 'MironKotona9',
      },
      {
        "text": 'tMironKotona8Koulu',
        "next_scene": 'MironKotona9',
      },
    ],
  },
  SekasinInfobox: {
    "_comment": '',
    "type": 'linear',
    "background": '',
    "characters": [''],
    "text_type": 'speech',
    "text_position": 'speechLeft',
    "text": 'tSekasinInfobox',
    "next_scene": 'MironKotona9',
  },
  MironKotona9: {
    "_comment": '',
    "type": 'linear',
    "background": '',
    "characters": [''],
    "text_type": 'speech',
    "text_position": 'speechLeft',
    "text": 'tMironKotona9',
    "next_scene": 'Puistossa1',
  },
};
export default MironKotona;
