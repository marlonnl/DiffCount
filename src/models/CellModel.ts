import type { CellId } from '../constants/cellColors'

export type CellModel = {
  id: CellId
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
  // color: CellColorName
  VR: string
  group: 'RBC' | 'WBC'
  maturiry: 'mature' | 'immature'
}
