export const cellColors = {
  total: '#000',
  segmentado: '#E88FA6',
  bastao: '#F5C9D3',
  linfocito: '#5B9BD5',
  monocito: '#7B6FD1',
  eosinofilo: '#E2725C',
  basofilo: '#8FC9A9',
} as const satisfies Record<string, `#${string}`> // garante o # no hex

export type CellId = keyof typeof cellColors
