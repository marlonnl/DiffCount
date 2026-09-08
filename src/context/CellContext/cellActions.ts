import type { CellModel } from '../../models/CellModel'

export const CellActionTypes = {
  COUNT_CELL: 'COUNT_CELL',
  RESET_COUNT: 'RESET_COUNT',
} as const

type CellActionTypes = (typeof CellActionTypes)[keyof typeof CellActionTypes]

export type CellActionModel =
  | { type: typeof CellActionTypes.COUNT_CELL; payload: CellModel }
  | { type: typeof CellActionTypes.RESET_COUNT }
