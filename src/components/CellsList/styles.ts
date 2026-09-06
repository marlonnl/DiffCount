import styled from 'styled-components'

type CellColorProps = {
  cellColor: string
}

export const CellsListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 16px;

  font-family: 'Space Grotesk', monospace;
  font-size: 14px;
  color: #000;
`

export const CellWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 4px 8px;
  border-bottom: 2px solid #000;
`

export const CellColor = styled.span<CellColorProps>`
  width: 10px;
  height: 10px;
  border: 2px solid #000;
  background-color: ${props => props.cellColor};

  /*margin-right: 16px;*/
`

export const CellName = styled.p`
  font-weight: bold;
  width: 110px;
`

export const CellDotsGrid = styled.div`
  width: 574px;

  display: grid;
  /*grid-auto-flow: column;*/
  grid-template-columns: repeat(50, max-content);
  /*grid-auto-columns: 10px;*/
  column-gap: 3px;
  row-gap: 4px;
`

export const CellDot = styled.span<CellColorProps>`
  width: 6px;
  height: 6px;
  border: 1px solid #000;
  background-color: ${props => props.cellColor};

  &:nth-child(5n):not(:nth-child(50n)) {
    margin-right: 3px;
  }
`
