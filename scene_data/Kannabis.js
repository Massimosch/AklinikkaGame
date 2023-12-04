const Kannabis = {
  RoopenJointti1: {
    _comment: '',
    type: 'options',
    background: 'RoopenKoti',
    characters: ['HahmoRoope'],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRoopenJointti1',
    player_choice: [
      {
        text: 'tRoopenJointti1Ei',
        next_scene: 'RoopenJointti2',
      },
      {
        text: 'tRoopenJointti1Okei',
        next_scene: 'RoopenJointti3',
      },
    ],
  },
  RoopenJointti2: {
    _comment: '',
    type: 'linear',
    background: 'RoopenKoti',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tRoopenJointti2',
    next_scene: 'Puistobileisiin',
  },

  RoopenJointti3: {
    _comment: '',
    type: 'options',
    background: 'Kannabis',
    characters: [''],
    text_type: 'narrator',
    text: 'tRoopenJointti3',
    player_choice: [
      {
        text: 'tRoopenJointti3En',
        next_scene: 'Kannabis1',
      },
      {
        text: 'tRoopenJointti3Joo',
        next_scene: 'Kannabis1',
      },
    ],
  },
  Kannabis1: {
    _comment: '',
    type: 'options',
    background: 'Kannabis',
    characters: [''],
    text_type: 'narrator',
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
    _comment: '',
    type: 'linear',
    background: 'PuhelinViestit',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tHuonoOlo2',
    next_scene: 'SofiSaattaa1',
  },
};
export default Kannabis;
