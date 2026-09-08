import type { CellStateModel } from '../../models/CellStateModel'
import { CellActionTypes, type CellActionModel } from './cellActions'

export function cellReducer(state: CellStateModel, action: CellActionModel) {
  switch (action.type) {
    case CellActionTypes.COUNT_CELL:
      return {
        ...state,
        cells: state.cells.map(cell =>
          cell.id === action.payload.id
            ? { ...cell, count: cell.count + 1 }
            : cell,
        ),
        totalCount: state.totalCount + 1,
      }
    case CellActionTypes.RESET_COUNT:
      return state
  }
}
