export const cellColors = {
  Segmentado: '#e88fa6',
  Bastão: '#F5C9D3',
  Linfócito: '#5B9BD5',
  Monócito: '#7B6FD1',
  Eosinófilo: '#E2725C',
  Basófilo: '#8FC9A9',
} as const

export type CellColorHex = keyof typeof cellColors
