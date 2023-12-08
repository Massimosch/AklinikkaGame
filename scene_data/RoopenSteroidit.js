const RoopenSteroidit = {
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
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRoopenPillerit4',
    next_scene: 'RoopenJointti1',
  },
};
export default RoopenSteroidit;
