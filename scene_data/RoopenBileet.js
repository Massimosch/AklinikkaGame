const RoopenBileet = {
  RoopenSteroidit1: {
    _comment: '',
    type: 'linear',
    background: 'RoopenKoti',
    characters: ['HahmoRoopeYlpea', 'HahmoMironKaveri2'],
    text_type: 'narrator',
    text: 'tRoopenSteroidit1',
    next_scene: 'RoopenSteroidit2',
  },
  RoopenSteroidit2: {
    _comment: '',
    type: 'linear',
    background: 'RoopenKoti',
    characters: ['HahmoRoopeYlpea', 'HahmoMironKaveri2'],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRoopenSteroidit2',
    next_scene: 'RoopenSteroidit3',
  },
  RoopenSteroidit3: {
    _comment: '',
    type: 'options',
    background: 'Steroidit',
    characters: [''],
    text_type: 'narrator',
    text: 'tRoopenSteroidit3',
    player_choice: [
      {
        text: 'tRoopenSteroidit3Tiedan',
        next_scene: 'SteroiditInfobox1',
      },
      {
        text: 'tRoopenSteroidit3Mita',
        next_scene: 'SteroiditInfobox1',
      },
    ],
  },
  SteroiditInfobox1: {
    _comment: '',
    type: 'linear',
    background: 'Steroidit',
    characters: [''],
    text_type: 'infobox',
    text: 'tSteroiditInfobox1',
    next_scene: 'SteroiditInfobox2',
  },
  SteroiditInfobox2: {
    _comment: '',
    type: 'linear',
    background: 'Steroidit',
    characters: [''],
    text_type: 'infobox',
    text: 'tSteroiditInfobox2',
    next_scene: 'RoopenSteroidit4',
  },
  RoopenSteroidit4: {
    _comment: '',
    type: 'options',
    background: 'Steroidit',
    characters: [''],
    text_type: 'narrator',
    text: 'tRoopenSteroidit4',
    player_choice: [
      {
        text: 'tRoopenSteroidit4Okei',
        next_scene: 'RoopenPillerit1',
      },
      {
        text: 'tRoopenSteroidit4IhaSama',
        next_scene: 'RoopenPillerit1',
      },
    ],
  },
  RoopenPillerit1: {
    _comment: '',
    type: 'linear',
    background: 'RoopenKoti',
    characters: ['HahmoKiusaajaTytto', 'HahmoRoope'],
    text_type: 'narrator',
    text: 'tRoopenPillerit1',
    next_scene: 'RoopenPillerit2',
  },
  RoopenPillerit2: {
    _comment: '',
    type: 'options',
    background: 'RoopenKoti',
    characters: ['HahmoKiusaajaTytto', 'HahmoRoope'],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRoopenPillerit2',
    player_choice: [
      {
        text: 'tRoopenPillerit2Ei',
        next_scene: 'RoopenPillerit3EiTotta',
      },
      {
        text: 'tRoopenPillerit2Joo',
        next_scene: 'RoopenPillerit3JooOletkoVarma',
      },
    ],
  },
  RoopenPillerit3JooOletkoVarma: {
    _comment: 'Puuttuu nextScene',
    type: 'options',
    background: 'Pillerit',
    characters: [''],
    text_type: 'narrator',
    text: 'tRoopenPillerit3JooOletkoVarma',
    player_choice: [
      {
        text: 'tRoopenPillerit3Okei',
        next_scene: 'RoopenJointti1',
      },
      {
        text: 'tRoopenPillerit3IhaSama',
        next_scene: 'RoopenPillerit4',
      },
    ],
  },

  RoopenPillerit3EiTotta: {
    _comment: 'Puuttuu nextScene',
    type: 'linear',
    background: 'Pillerit',  
    characters: [''],
    text_type: 'narrator',
    text: 'tRoopenPillerit3EiTotta',
    next_scene: 'Puistobileisiin',
  },
  
  RoopenPillerit4: {
    _comment: '',
    type: 'linear',
    background: 'Pillerit',
    characters: [''],
    text_type: 'narrator',
    text: 'tRoopenPillerit4',
    next_scene: 'RoopenJointti1',
  },

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
    background: 'Kannabis',
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
    characters: [],
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
  Kannabis1: {
    _comment: '',
    type: 'options',
    background: 'Kannabis',
    characters: [],
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
export default RoopenBileet;