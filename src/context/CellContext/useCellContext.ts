import { useContext } from 'react'
import { CellContext } from './CellContext'

export function useCellContext() {
  return useContext(CellContext)
}
