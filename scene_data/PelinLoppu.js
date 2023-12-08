const PelinLoppu = {

  Tekstari1: {
    _comment: 'Puuttuu nextScene',
    type: 'linear',
    background: 'OmaHuone',
    characters: [],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tTekstari1',
    next_scene: 'Tekstari2Sofi',
  },
  Tekstari2MikaFiilis: {
    _comment: '',
    type: 'linear',
    background: 'PuhelinKirjoitaViesti',
    characters: [],
    text_type: 'narrator',
    text_position: 'speechLeft',
    text: 'tTekstari2MikaFiilis',
    next_scene: 'Tekstari3OmaKommentti',
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
        next_scene: 'Kotona3',
      },
      {
        text: 'tTekstari3Vastaa',
        next_scene: 'Tekstari3OmaKommentti',
      },
    ],
  },
  Tekstari2Tuomas: {
    _comment: '',
    type: 'options',
    background: 'OmaHuone',
    characters: [],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tTekstari2Tuomas',
    player_choice: [
      {
        text: 'tTekstari3EiVastata',
        next_scene: 'Kotona3',
      },
      {
        text: 'tTekstari3Vastaa',
        next_scene: 'Tekstari3OmaKommentti',
      },
    ],
  },
  Tekstari3OmaKommentti: {
    _comment: '',
    type: 'linear',
    background: 'PuhelinKirjoitaViesti',
    characters: [],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tTekstari3OmaKommentti',
    next_scene: 'Kotona2',
  },
  Kotona1: {
    _comment: '',
    type: 'linear',
    background: 'PuhelinKirjoitaViesti',
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
        text: 'tTKotona2Salaattia',
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
    text_position: 'speechLeft',
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
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRandomGroomer2Lahetan',
    next_scene: 'Kotona4',
  },
  RandomGroomer2SuaVartenSomessa: {
    _comment: '',
    type: 'linear',
    background: 'PuhelinSnappi',
    characters: [],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRandomGroomer2SuaVartenSomessa',
    next_scene: 'Kotona4',
  },
  RandomGroomer2EnVastaa: {
    _comment: '',
    type: 'linear',
    background: 'PuhelinSnappi',
    characters: [],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRandomGroomer2EnVastaa',
    next_scene: 'Kotona4',
  },
  Kotona3: {
    _comment: '',
    type: 'options',
    background: 'Keittio',
    characters: [],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tKotona3',
    player_choice: [
      {
        text: 'tKotona3Pizzaa',
        next_scene: 'Loppu',
      },
      {
        text: 'tKotona3Salaattia',
        next_scene: 'Loppu',
      },
    ],
  },
  Kotona4: {
    _comment: '',
    type: 'options',
    background: 'OmaHuone',
    characters: [],
    text_type: 'speech',
    text_position: 'speechLeft',
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
        text: 'tKotona4Laksuja',
        next_scene: 'Loppu',
      },
    ],
  },
  Loppu: {
    _comment: 'Peli loppuu, ei next sceneä',
    type: 'linear',
    background: '',
    characters: [],
    text_type: 'narrator',
    text_position: 'speechLeft',
    text: 'tLoppu',
    next_scene: '',
  },
};
export default PelinLoppu;
