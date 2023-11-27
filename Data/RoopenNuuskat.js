const RoopenNuuskat = {
  MitaTiedatVapesta: {
    _comment: '',
    type: 'options',
    background: 'Kaytava',
    characters: ['HahmoRoope'],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tMitaTiedatVapesta',
    player_choice: [
      {
        text: 'tMitaTiedatVapestaEVVK',
        next_scene: 'VapenInfobox',
      },
      {
        text: 'tMitaTiedatVapestaEnTieda',
        next_scene: 'VapeInfobox',
      },
    ],
  },

  VapeInfobox: {
    _comment: '',
    type: 'linear',
    background: 'Kaytava',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tVapeInfobox',
    next_scene: 'Juomaautomaatti1',
  },

  Juomaautomaatti1: {
    _comment: '',
    type: 'linear',
    background: 'Kaytava',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tJuomaautomaatti2',
    next_scene: 'Juomaautomaatti2',
  },

  Juomaautomaatti2: {
    _comment: '',
    type: 'options',
    background: 'Kaytava',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tJuomaautomaatti2',
    player_choice: [
      {
        text: 'tJuomaautomaatti2Skippaan',
        next_scene: 'Energiajuomat',
      },
      {
        text: 'tJuomaautomaatti2Ostan',
        next_scene: 'Energiajuomat',
      },
    ],
  },

  Energiajuomat: {
    _comment: '',
    type: 'options',
    background: 'Kaytava',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tEnergiajuomat',
    player_choice: [
      {
        text: 'tEnergiajuomatEn',
        next_scene: 'EnergiajuomatInfobox',
      },
      {
        text: 'tEnergiajuomatJoo',
        next_scene: 'RoopenNuuskat1',
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
    next_scene: 'RoopenNuuskat1',
  },

  RoopenNuuskat1: {
    _comment: '',
    type: 'linear',
    background: 'Kaytava',
    characters: ['HahmoRoope'],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRoopenNuuskat1',
    next_scene: 'RoopenNuuskat2',
  },

  RoopenNuuskat2: {
    _comment: '',
    type: 'options',
    background: 'Kaytava',
    characters: ['HahmoRoope'],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRoopenNuuskat2',
    player_choice: [
      {
        text: 'tRoopenNuuskat2Ei',
        next_scene: 'NuuskaInfobox',
      },
      {
        text: 'tRoopenNuuskat2Joo',
        next_scene: 'RoopenNuuskat3',
      },
    ],
  },

  NuuskaInfobox: {
    _comment: '',
    type: 'linear',
    background: 'Kaytava',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tNuuskaInfobox',
    next_scene: 'RoopenRahapelit',
  },

  RoopenNuuskat3: {
    _comment: '',
    type: 'options',
    background: 'Kaytava',
    characters: ['HahmoRoope'],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRoopenNuuskat3',
    player_choice: [
      {
        text: 'tRoopenNuuskat3Skippaan',
        next_scene: 'RoopenRahapelit',
      },
      {
        text: 'tRoopenNuuskat3Joo',
        next_scene: 'RoopenNuuskat4',
      },
    ],
  },

  RoopenNuuskat4: {
    _comment: '',
    type: 'linear',
    background: 'Kaytava',
    characters: ['HahmoRoope'],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRoopenNuuskat4',
    next_scene: 'RoopenRahapelit',
  },

  RoopenRahapelit: {
    _comment: '',
    type: 'options',
    background: 'Kaytava',
    characters: ['HahmoRoope'],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRoopenRahapelit',
    player_choice: [
      {
        text: 'tRoopenRahapelitHyva',
        next_scene: 'RoopenRahapelitTodennakHyva',
      },
      {
        text: 'tRoopenRahapelitHaviit',
        next_scene: 'RoopenRahapelitTodennakHaviit',
      },
    ],
  },

  RoopenRahapelitTodennakHyva: {
    _comment: '',
    type: 'linear',
    background: 'Kaytava',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRoopenRahapelitTodennakHyva',
    next_scene: 'RahapelitInfobox',
  },

  RoopenRahapelitTodennakHaviit: {
    _comment: '',
    type: 'linear',
    background: 'Kaytava',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRoopenRahapelitTodennakHaviit',
    next_scene: 'RahapelitInfobox',
  },

  RahapelitInfobox: {
    _comment: '',
    type: 'linear',
    background: 'Kaytava',
    characters: [''],
    text_type: 'speech',
    text_position: 'speechLeft',
    text: 'tRahapelitInfobox',
    next_scene: 'TuomaksenKiusaaminen1',
  },
};
export default RoopenNuuskat;
