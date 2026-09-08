import { CellActionTypes } from '../../context/CellContext/cellActions'
import { CellsDB } from '../../context/CellContext/Cells'
import { useCellContext } from '../../context/CellContext/useCellContext'
import { twoDigitsTransform } from '../../utils/twoDigitsTransform'
import CellsList from '../CellsList'
import { DiffCounterHeader, DiffCounterWrapper } from './styles'

export default function DiffCounter() {
  const { state, dispatch } = useCellContext()

  function handleClick() {
    dispatch({ type: CellActionTypes.COUNT_CELL, payload: CellsDB[0] })
    console.log(state)
  }

  return (
    <DiffCounterWrapper>
      <DiffCounterHeader>
        <h2>Diferencial leucocitário</h2>
        <div>
          Total<span>{twoDigitsTransform(state.totalCount)}</span>
        </div>
      </DiffCounterHeader>
      <CellsList />

      <button onClick={handleClick}>Contar célula</button>
    </DiffCounterWrapper>
  )
}
