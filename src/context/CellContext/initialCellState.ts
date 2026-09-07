import type { CellStateModel } from '../../models/CellStateModel'

export const initialCellState: CellStateModel = {
  cells: [],
  totalCount: 0,
  config: {
    countTo: 100,
    beep: true,
  },
}
