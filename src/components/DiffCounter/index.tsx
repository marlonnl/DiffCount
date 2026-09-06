import CellsList from '../CellsList'
import { DiffCounterHeader, DiffCounterWrapper } from './styles'

export default function DiffCounter() {
  return (
    <DiffCounterWrapper>
      <DiffCounterHeader>
        <h2>Diferencial leucocitário</h2>
        <div>
          Total<span>100</span>
        </div>
      </DiffCounterHeader>
      <CellsList />
    </DiffCounterWrapper>
  )
}
