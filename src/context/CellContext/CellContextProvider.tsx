import { useReducer } from 'react'
import { cellReducer } from './cellReducer'
import { initialCellState } from './initialCellState'
import { CellContext } from './CellContext'

type CellContextProviderProps = {
  children: React.ReactNode
}

export function CellContextProvider({ children }: CellContextProviderProps) {
  const [state, dispatch] = useReducer(cellReducer, initialCellState)

  return (
    <CellContext.Provider value={{ state, dispatch }}>
      {children}
    </CellContext.Provider>
  )
}
