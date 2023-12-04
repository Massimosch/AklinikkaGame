const Puistossa = {
  Puistobileisiin: {
    _comment: '',
    type: 'options',
    background: 'RoopenKoti',
    characters: [],
    text_type: 'narrator',
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
  Puistossa1: {
    _comment: 'Oikea nextScene?',
    type: 'linear',
    background: 'Puistossa',
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
export default Puistossa;
