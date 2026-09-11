import { useEffect } from 'react'
import { CellActionTypes } from '../../context/CellContext/cellActions'
import { useCellContext } from '../../context/CellContext/useCellContext'
import CellsList from '../CellsList'
import { DiffCounterHeader, DiffCounterWrapper } from './styles'
import { ListRestartIcon } from 'lucide-react'
import Button from '../Button'

export default function DiffCounter() {
  const { state, dispatch } = useCellContext()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      // teclas de comando ou contagem final já atingida
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        state.totalCount >= 5
      )
        return

      const cell = state.cells.find(
        countCell => countCell.key === event.key.toLocaleLowerCase(),
      )
      // tecla não correspondente
      if (!cell) return

      dispatch({ type: CellActionTypes.COUNT_CELL, payload: cell })
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [state.cells, dispatch, state.totalCount])

  // contagem encerrada
  useEffect(() => {
    if (state.totalCount === 5) {
      console.log('Deu de contar!!')
    }
  }, [state.totalCount])

  function handleReset() {
    dispatch({ type: CellActionTypes.RESET_COUNT })
  }

  return (
    <DiffCounterWrapper>
      <DiffCounterHeader>
        <h2>Diferencial leucocitário</h2>
        <Button
          onClick={handleReset}
          icon={<ListRestartIcon size={20} strokeWidth={1.5} />}
        >
          resetar
        </Button>
      </DiffCounterHeader>
      <CellsList />
    </DiffCounterWrapper>
  )
}
