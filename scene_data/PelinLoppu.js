const PelinLoppu = {

  Tekstari1: {
    _comment: '',
    type: 'linear',
    background: 'OmaHuone',
    characters: [],
    text_type: 'narrator',
    text: 'tTekstari1',
    next_scene: 'Tekstari2Sofi',
  },

  EiTekstaria: {
    _comment: '',
    type: 'linear',
    background: 'OmaHuone',
    characters: [],
    text_type: 'narrator',
    text: 'tTekstari1',
    next_scene: 'Kotona3',
  },

  Tekstari2Sofi: {
    _comment: '',
    type: 'options',
    background: 'OmaHuone',
    characters: [],
    text_type: 'narrator',
    text: 'tTekstari2Sofi',
    player_choice: [
      {
        text: 'tTekstari3EiVastata',
        next_scene: 'Kotona4',
      },
      {
        text: 'tTekstari3Vastaa',
        next_scene: 'Kotona4',
      },
    ],
  },

  Kotona1: {
    _comment: '',
    type: 'linear',
    background: 'Keittio',
    characters: [],
    text_type: 'narrator',
    text: 'tKotona1',
    next_scene: 'Kotona2',
  },
  Kotona2: {
    _comment: '',
    type: 'options',
    background: 'Keittio',
    characters: [],
    text_type: 'narrator',
    text: 'tKotona2',
    player_choice: [
      {
        text: 'tKotona2Pizzaa',
        next_scene: 'RandomGroomer1',
      },
      {
        text: 'tKotona2Salaattia',
        next_scene: 'RandomGroomer1',
      },
    ],
  },
  RandomGroomer1: {
    _comment: '',
    type: 'options',
    background: 'PuhelinSnappi',
    characters: [],
    text_type: 'narrator',
    text: 'tRandomGroomer1',
    player_choice: [
      {
        text: 'tRandomGroomer1EnVastaa',
        next_scene: 'RandomGroomer2EnVastaa',
      },
      {
        text: 'tRandomGroomer1SuaVartenSomessa',
        next_scene: 'RandomGroomer2Lahetan',
      },
      {
        text: 'tRandomGroomer1Lahetan',
        next_scene: 'RandomGroomer2SuaVartenSomessa',
      },
    ],
  },
  RandomGroomer2Lahetan: {
    _comment: '',
    type: 'linear',
    background: 'PuhelinSnappi',
    characters: [],
    text_type: 'narrator',
    text: 'tRandomGroomer2Lahetan',
    next_scene: 'Kotona4',
  },
  RandomGroomer2SuaVartenSomessa: {
    _comment: '',
    type: 'linear',
    background: 'PuhelinSnappi',
    characters: [],
    text_type: 'narrator',
    text: 'tRandomGroomer2SuaVartenSomessa',
    next_scene: 'Kotona4',
  },
  RandomGroomer2EnVastaa: {
    _comment: '',
    type: 'linear',
    background: 'PuhelinSnappi',
    characters: [],
    text_type: 'narrator',
    text: 'tRandomGroomer2EnVastaa',
    next_scene: 'Kotona4',
  },
  Kotona3: {
    _comment: '',
    type: 'options',
    background: 'Keittio',
    characters: [],
    text_type: 'narrator',
    text: 'tKotona3',
    player_choice: [
      {
        text: 'tKotona3Pizzaa',
        next_scene: 'Kotona4',
      },
      {
        text: 'tKotona3Salaattia',
        next_scene: 'Kotona4',
      },
    ],
  },
  Kotona4: {
    _comment: '',
    type: 'options',
    background: 'OmaHuone',
    characters: [],
    text_type: 'narrator',
    text: 'tKotona4',
    player_choice: [
      {
        text: 'tKotona4Nukkumaan',
        next_scene: 'Loppu',
      },
      {
        text: 'tKotona4Pelaamaan',
        next_scene: 'Loppu',
      },
      {
        text: 'tKotona4Laksyja',
        next_scene: 'Loppu',
      },
    ],
  },
  Loppu: {
    _comment: 'Peli loppuu, ei next sceneä',
    type: 'linear',
    background: 'OmaHuone',
    characters: [],
    text_type: 'narrator',
    text_position: 'speechLeft',
    text: 'tLoppu',
    next_scene: '',
  },
};
export default PelinLoppu;
