const Kotimatka = {
  SofiSaattaa1: {
    _comment: '',
    type: 'options',
    background: 'Risteys',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tSofiSaattaa1',
    player_choice: [
      {
        text: 'tSofiSaattaa1Kavellen',
        next_scene: 'SofiSaattaa2Hyva',
      },
      {
        text: 'tSofiSaattaa1Skuutilla',
        next_scene: 'SofiSaattaa2Huono',
      },
    ],
  },
  SofiSaattaa2Hyva: {
    _comment: '',
    type: 'linear',
    background: 'Risteys',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tSofiSaattaa2Hyva',
    next_scene: 'VanhemmatKannabis1',
  },
  SofiSaattaa2Huono: {
    _comment: '',
    type: 'linear',
    background: 'Risteys',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tSofiSaattaa2Huono',
    next_scene: 'SofiSaattaa3',
  },
  SofiSaattaa3: {
    _comment: '',
    type: 'linear',
    background: 'Risteys',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tSofiSaattaa3',
    next_scene: 'SofiSaattaa4',
  },
  SofiSaattaa4: {
    _comment: '',
    type: 'linear',
    background: 'Risteys',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tSofiSaattaa4',
    next_scene: 'VanhemmatKannabis1',
  },
  VanhemmatKannabis1: {
    _comment: '',
    type: 'linear',
    background: 'Kannabis',
    characters: [],
    text_type: 'narrator',
    text_position: 'speechLeft',
    text: 'tVanhemmatKannabis1',
    next_scene: 'VanhemmatKannabis2',
  },
  VanhemmatKannabis2: {
    _comment: '',
    type: 'linear',
    background: 'Risteys',
    characters: ["HahmoSofiVakava"],
    text_type: 'speech',
    text_position: '',
    text: 'tVanhemmatKannabis2',
    next_scene: 'VanhemmatKannabis3',
  },
  VanhemmatKannabis3: {
    _comment: '',
    type: 'options',
    background: 'Kannabis',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tVanhemmatKannabis3',
    player_choice: [
      {
        text: 'tVanhemmatKannabis3Puhuttais',
        next_scene: 'VanhemmatKannabis4HyvatValit',
      },
      {
        text: 'tVanhemmatKannabis3Suuttuis',
        next_scene: 'VanhemmatKannabis4Vaikeaa',
      },
      {
        text: 'tVanhemmatKannabis3EiKiinnosta',
        next_scene: 'VanhemmatKannabis4Vaikeaa',
      },
    ],
  },
  VanhemmatKannabis4Vaikeaa: {
    _comment: '',
    type: 'linear',
    background: 'Vanhemmat',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tVanhemmatKannabis4Vaikeaa',
    next_scene: 'Tekstari1',
  },
  VanhemmatKannabis4HyvatValit: {
    _comment: 'SofiaSaattamassaLoppuu',
    type: 'linear',
    background: 'Vanhemmat',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tVanhemmatKannabis4HyvatValit',
    next_scene: 'Tekstari1',
  },
  SofiaSaattamassa1: {
    _comment: '',
    type: 'options',
    background: 'Risteys',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tSofiaSaattamassa1',
    player_choice: [
      {
        text: 'tSofiaSaattamassa1Kavellen',
        next_scene: 'SofiaSaattamassa2Hyva',
      },
      {
        text: 'tSofiaSaattamassa1Skuutilla',
        next_scene: 'SofiaSaattamassa3Huono',
      },
    ],
  },
  SofiaSaattamassa2Hyva: {
    _comment: '',
    type: 'linear',
    background: 'Risteys',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tSofiaSaattamassa2Hyva',
    next_scene: 'SofinKotona',
  },
  SofiaSaattamassa3Huono: {
    _comment: '',
    type: 'linear',
    background: 'Onnettomuus',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tSofiaSaattamassa3Huono',
    next_scene: 'SofiaSaattamassa4Sakot',
  },
  SofiaSaattamassa4Sakot: {
    _comment: '',
    type: 'linear',
    background: 'Risteys',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tSofiaSaattamassa4Sakot',
    next_scene: 'SofiaSaattamassa5',
  },
  SofiaSaattamassa5: {
    _comment: '',
    type: 'linear',
    background: 'Risteys',
    characters: [],
    text_type: 'narrator',
    text_position: '',
    text: 'tSofiaSaattamassa5',
    next_scene: 'SofinKotona',
  },
  SofinKotona: {
    _comment: '',
    type: 'linear',
    background: 'SofinOvi',
    characters: ["HahmoSofinAiti"],
    text_type: 'narrator',
    text_position: 'speechLeft',
    text: 'tSofinKotona',
    next_scene: 'SofinKotona2',
  },
  SofinKotona2: {
    _comment: '',
    type: 'linear',
    background: '',
    characters: ["HahmoSofinAiti", "HahmoSofiVakava"],
    text_type: 'narrator',
    text_position: 'speechLeft',
    text: 'tSofinKotona2',
    next_scene: 'SofinKotona3',
  },
  SofinKotona3: {
    _comment: '',
    type: 'options',
    background: 'SofinOvi',
    characters: [],
    text_type: 'narrator',
    text_position: 'speechLeft',
    text: 'tSofinKotona3',
    player_choice: [
      {
        text: 'tSofinKotona3Suuttuis',
        next_scene: 'SofinKotona4Vaikeaa',
      },
      {
        text: 'tSofinKotona3Eikiinnosta',
        next_scene: 'SofinKotona4Vaikeaa',
      },
      {
        text: 'tSofinkotona4Keskustelu',
        next_scene: 'SofinKotona4HyvatValit',
      },
    ],
  },
  SofinKotona4Vaikeaa: {
    _comment: 'Puuttuu nextScene',
    type: 'linear',
    background: 'Vanhemmat',
    characters: [],
    text_type: 'narrator',
    text_position: 'speechLeft',
    text: 'tSofinKotona4Vaikeaa',
    next_scene: 'Tekstari1',
  },
  SofinKotona4HyvatValit: {
    _comment: 'Puuttuu nextScene',
    type: 'linear',
    background: 'Vanhemmat',
    characters: [],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tSofinKotona4HyvatValit',
    next_scene: 'Tekstari1',
  },

};
export default Kotimatka;