import { cellColors } from '../../constants/cellColors'
import { useCellContext } from '../../context/CellContext/useCellContext'
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
  const { state } = useCellContext()

  return (
    <CellsListWrapper>
      {state.cells.map(cell => {
        const cellHexColor = cellColors[cell.id]

        return (
          <CellWrapper key={cell.id}>
            <CellColor $cellColor={cellHexColor} />
            <CellName>
              <kbd>{cell.key.toUpperCase()}</kbd>
              {cell.name.name}
            </CellName>
            <CellDotsGrid>
              {Array.from({ length: cell.count }).map((_, index) => (
                <CellDot $cellColor={cellHexColor} key={index} />
              ))}
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
