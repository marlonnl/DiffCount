export type CellModel = {
  name: {
    full: string
    name: string
    abr: string
  }
  info?: {
    description: string
    image: string
  }
  count: number
  key: 'a' | 's' | 'd' | 'f' | 'g' | 'h' | 'q'
  color: string
  VR: string
  group: 'RBC' | 'WBC'
  maturiry: 'mature' | 'immature'
}
