import { createContext } from 'react'
import type { CellStateModel } from '../../models/CellStateModel'
import { initialCellState } from './initialCellState'
import type { CellActionModel } from './cellActions'

type CellContextProps = {
  state: CellStateModel
  dispatch: React.Dispatch<CellActionModel>
}

const initialCellContext = {
  state: initialCellState,
  dispatch: () => {},
}

export const CellContext = createContext<CellContextProps>(initialCellContext)
