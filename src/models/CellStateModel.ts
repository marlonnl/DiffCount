import type { CellModel } from './CellModel'

export type CellStateModel = {
  cells: CellModel[]
  totalCount: number
  config: {
    countTo: 50 | 100 | 250 | 500
    finalBeep: boolean
    cellBeep: boolean
  }
}
