import { CellsDB } from '../../context/CellContext/Cells'
import { twoDigitsTransform } from '../../utils/twoDigitsTransform'
import {
  CellColor,
  CellDot,
  CellDotsGrid,
  CellName,
  CellsListWrapper,
  CellTotals,
  CellWrapper,
} from './styles'

export default function CellsList() {
  return (
    <CellsListWrapper>
      {CellsDB.map(cell => {
        return (
          <CellWrapper>
            <CellColor cellColor={cell.color} />
            <CellName>
              <kbd>{cell.key.toUpperCase()}</kbd>
              {cell.name.name}
            </CellName>
            <CellDotsGrid>
              <CellDot cellColor={cell.color} />
            </CellDotsGrid>
            <CellTotals>
              <span>00.0%</span>
              <p className="monospaced">{twoDigitsTransform(cell.count)}</p>
            </CellTotals>
          </CellWrapper>
        )
      })}
    </CellsListWrapper>
  )
}
