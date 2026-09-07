import type { CellModel } from '../../models/CellModel'

export const CellsDB: CellModel[] = [
  {
    id: 'segmentado',
    name: {
      full: 'Neutrófilo segmentado',
      name: 'Segmentado',
      abr: 'seg',
    },
    info: {
      description: '',
      image: '',
    },
    count: 0,
    key: 'd',
    // color: '#e88fa6',
    VR: '50-60',
    group: 'WBC',
    maturiry: 'mature',
  },
  {
    id: 'bastao',
    name: {
      full: 'Neutrófilo bastonete',
      name: 'Bastão',
      abr: 'bast',
    },
    info: {
      description: '',
      image: '',
    },
    count: 0,
    key: 's',
    // color: '#F5C9D3',
    VR: '2-5',
    group: 'WBC',
    maturiry: 'immature',
  },
  {
    id: 'linfocito',
    name: {
      full: 'Linfócito',
      name: 'Linfócito',
      abr: 'lin',
    },
    info: {
      description: '',
      image: '',
    },
    count: 0,
    key: 'f',
    // color: '#5B9BD5',
    VR: '40-60',
    group: 'WBC',
    maturiry: 'mature',
  },
  {
    id: 'monocito',
    name: {
      full: 'Monócito',
      name: 'Monócito',
      abr: 'mono',
    },
    info: {
      description: '',
      image: '',
    },
    count: 0,
    key: 'g',
    // color: '#7B6FD1',
    VR: '6-10',
    group: 'WBC',
    maturiry: 'mature',
  },
  {
    id: 'eosinofilo',
    name: {
      full: 'Eosinófilo',
      name: 'Eosinófilo',
      abr: 'eos',
    },
    info: {
      description: '',
      image: '',
    },
    count: 0,
    key: 'a',
    // color: '#E2725C',
    VR: '1-10',
    group: 'WBC',
    maturiry: 'mature',
  },
  {
    id: 'basofilo',
    name: {
      full: 'Basófilo',
      name: 'Basófilo',
      abr: 'baso',
    },
    info: {
      description: '',
      image: '',
    },
    count: 0,
    key: 'q',
    // color: '#8FC9A9',
    VR: '0-2',
    group: 'WBC',
    maturiry: 'mature',
  },
]
