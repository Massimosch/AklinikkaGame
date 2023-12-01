const MironTapaaminen = {
  Energiajuomat1: {
    _comment: '',
    type: 'linear',
    background: '',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tEnergiajuomat1',
    next_scene: 'Energiajuomat2',
  },

  Energiajuomat2: {
    _comment: '',
    type: 'options',
    background: '',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tEnergiajuomat2',
    player_choice: [
      {
        text: 'tEnergiajuomat2EVVK',
        next_scene: 'MiroTapaaminen',
      },
      {
        text: 'tEnergiaJuomat2Onko',
        next_scene: 'EnergiajuomatInfobox',
      },
    ],
  },

  EnergiajuomatInfobox: {
    _comment: '',
    type: 'linear',
    background: '',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tEnergiajuomatInfobox',
    next_scene: 'Energiajuomat3',
  },

  Energiajuomat3: {
    _comment: '',
    type: 'options',
    background: '',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tEnergiajuomat3',
    player_choice: [
      {
        text: 'tEnergiajuomat2En',
        next_scene: 'MiroTapaaminen',
      },
      {
        text: 'tEnergiaJuomat2Joo',
        next_scene: 'MiroTapaaminen',
      },
    ],
  },

  MiroTapaaminen: {
    _comment: '',
    type: 'options',
    background: '',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tMiroLintsaaminen',
    player_choice: [
      {
        text: 'tMiroLintsaaminenJoo',
        next_scene: 'MatkallaMirolle',
      },
      {
        text: 'tMiroLintsaaminenEi',
        next_scene: 'MironTilanne1',
      },
    ],
  },

  MironTilanne1: {
    _comment: '',
    type: 'linear',
    background: '',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tMironTilanne1',
    next_scene: 'MironTilanne2',
  },

  MiroTilanne2: {
    _comment: '',
    type: 'options',
    background: '',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tMiroTilanne2',
    player_choice: [
      {
        text: 'tMironTilanne2Sekasin',
        next_scene: 'SekasinInfobox',
      },
      {
        text: 'tMironTilanne2Lasinen',
        next_scene: 'LasinenInfobox',
      },
      {
        text: 'tMironTilanne2Koulu',
        next_scene: 'MironTilanne2Hienoa',
      },
    ],
  },

  SekasinInfobox: {
    _comment: '',
    type: 'linear',
    background: '',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tSekasinInfobox',
    next_scene: 'MironTilanne2Hienoa',
  },

  LasinenInfobox: {
    _comment: '',
    type: 'linear',
    background: '',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tLasinenInfobox',
    next_scene: 'MironTilanne2Hienoa',
  },

  MironTilanne2Hienoa: {
    _comment: '',
    type: 'linear',
    background: '',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tMironTilanne2Hienoa',
    next_scene: 'Oppitunti1',
  },
};
export default MironTapaaminen;
