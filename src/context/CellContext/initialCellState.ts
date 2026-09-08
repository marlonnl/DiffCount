import type { CellStateModel } from '../../models/CellStateModel'
import { CellsDB } from './Cells'

export const initialCellState: CellStateModel = {
  cells: CellsDB,
  totalCount: 0,
  config: {
    countTo: 100,
    beep: true,
  },
}
