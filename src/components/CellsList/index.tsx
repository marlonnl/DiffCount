import { cellColors } from '../../constants/cellColors'
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
        const cellHexColor = cellColors[cell.id]

        return (
          <CellWrapper>
            <CellColor cellColor={cellHexColor} />
            <CellName>
              <kbd>{cell.key.toUpperCase()}</kbd>
              {cell.name.name}
            </CellName>
            <CellDotsGrid>
              <CellDot cellColor={cellHexColor} />
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
