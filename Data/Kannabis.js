const Kannabis = {
  RoopeJointti1: {
    _comment: '',
    type: 'options',
    background: 'Roskikset',
    characters: ['HahmoTuomas'],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRoopeJointti1',
    player_choice: [
      {
        text: 'tRoopeJointti1Ei',
        next_scene: 'RoopeJointti2',
      },
      {
        text: 'tRoopeJointti1Okei',
        next_scene: 'RoopeJointti3',
      },
    ],
  },
  RoopeJointti2: {
    _comment: 'Puuttuu nextScene',
    type: 'linear',
    background: 'Kannabis',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tRoopeJointti2',
    next_scene: '',
  },
  RoopeJointti3: {
    _comment: '',
    type: 'options',
    background: 'Kannabis',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRoopeJointti1',
    player_choice: [
      {
        text: 'tRoopeJointti3En',
        next_scene: 'Kannabis1',
      },
      {
        text: 'tRoopeJointti3Joo',
        next_scene: 'Kannabis1',
      },
    ],
  },
  Puistobileisiin: {
    _comment: '',
    type: 'options',
    background: 'PuhelinViestit',
    characters: ['HahmoRoope'],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tPuistobileisiin',
    player_choice: [
      {
        text: 'tPuistobileisiinKotiin',
        next_scene: 'Kotona1',
      },
      {
        text: 'tPuistobileisiinJoo',
        next_scene: 'Puistossa1',
      },
    ],
  },
  Kannabis1: {
    _comment: '',
    type: 'options',
    background: 'Kannabis',
    characters: ['HahmoRoope'],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tKannabis1',
    player_choice: [
      {
        text: 'tKannabis1OK',
        next_scene: 'HuonoOlo1',
      },
      {
        text: 'tKannabis1Onko',
        next_scene: 'Kannabis2',
      },
    ],
  },
  Kannabis2: {
    _comment: 'Kannabis',
    type: 'linear',
    background: 'Kannabis',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tKannabis2',
    next_scene: 'HuonoOlo1',
  },
  HuonoOlo1: {
    _comment: '',
    type: 'linear',
    background: 'PuhelinViestit',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tHuonoOlo1',
    next_scene: 'HuonoOlo2',
  },
  HuonoOlo2: {
    _comment: 'Puuttuu nextScene',
    type: 'linear',
    background: 'PuhelinViestit',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tHuonoOlo2',
    next_scene: '',
  },
  Puistossa1: {
    _comment: 'Oikea nextScene?',
    type: 'linear',
    background: 'PuhelinViestit',
    characters: [''],
    text_type: 'narrator',
    text_position: '',
    text: 'tPuistossa1',
    next_scene: 'Puistossa2',
  },
  Puistossa2: {
    _comment: '',
    type: 'options',
    background: '',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tPuistossa2',
    player_choice: [
      {
        text: 'tPuistossa2Mita',
        next_scene: 'Puistossa3',
      },
      {
        text: 'tPuistossa2Otan',
        next_scene: 'Puistossa3',
      },
    ],
  },
  Puistossa3: {
    _comment: '',
    type: 'linear',
    background: 'PuhelinViestit',
    characters: [''],
    text_type: 'narrator',
    text_position: '',
    text: 'tPuistossa3',
    next_scene: 'Puistossa4',
  },
  Puistossa4: {
    _comment: 'Oikea nextScene?',
    type: 'linear',
    background: 'PuhelinViestit',
    characters: [''],
    text_type: 'narrator',
    text_position: '',
    text: 'tPuistossa4',
    next_scene: 'Puistossa5',
  },
  Puistossa5: {
    _comment: 'Oikea nextScene?',
    type: 'linear',
    background: '',
    characters: [''],
    text_type: 'narrator',
    text_position: '',
    text: 'tPuistossa5',
    next_scene: 'Puistossa6',
  },
  Puistossa6: {
    _comment: '',
    type: 'options',
    background: '',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tPuistossa6',
    player_choice: [
      {
        text: 'tPuistossa6Painostaminen',
        next_scene: 'Puistossa7',
      },
      {
        text: 'tPuistossa6OlisSekin',
        next_scene: 'Puistossa7',
      },
    ],
  },
  Puistossa7: {
    _comment: '',
    type: 'linear',
    background: '',
    characters: [''],
    text_type: 'narrator',
    text_position: '',
    text: 'tPuistossa7',
    next_scene: 'Puistossa8',
  },
  Puistossa8: {
    _comment: '',
    type: 'linear',
    background: '',
    characters: [''],
    text_type: 'narrator',
    text_position: '',
    text: 'tPuistossa8',
    next_scene: 'Puistossa9',
  },
  Puistossa9: {
    _comment: '',
    type: 'options',
    background: '',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tPuistossa9',
    player_choice: [
      {
        text: 'tPuistossa9Okei',
        next_scene: 'Puistossa10',
      },
      {
        text: 'tPuistossa9Tultiin',
        next_scene: 'SofiSaattaa1',
      },
    ],
  },
  Puistossa10: {
    _comment: '',
    type: 'linear',
    background: '',
    characters: [''],
    text_type: 'narrator',
    text_position: '',
    text: 'tPuistossa10',
    next_scene: 'Puistossa11',
  },
  Puistossa11: {
    _comment: '',
    type: 'linear',
    background: '',
    characters: [''],
    text_type: 'narrator',
    text_position: '',
    text: 'tPuistossa11',
    next_scene: 'SofiSaattaa1',
  },
};
export default Kannabis;
