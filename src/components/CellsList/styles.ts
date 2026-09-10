import styled from 'styled-components'

type CellWrapperProps = {
  active?: boolean
}

type CellColorProps = {
  $cellColor: string
}

export const CellsListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 16px;

  font-family: 'Space Grotesk', monospace;
  font-size: 14px;
  color: #000;
`

export const CellWrapper = styled.div<CellWrapperProps>`
  display: flex;
  align-items: center;
  /*justify-content: space-around;*/
  gap: 16px;

  padding: 4px 8px;
  border-bottom: 2px solid #000;
  background-color: ${props => (props.active ? '#FFFECB' : 'transparent')};
`

export const CellColor = styled.span<CellColorProps>`
  width: 10px;
  height: 10px;
  border: 2px solid #000;
  background-color: ${props => props.$cellColor};
`

export const CellName = styled.p`
  font-weight: bold;
  width: 116px;

  kbd {
    margin-right: 4px;
  }
`

export const CellDotsGrid = styled.div`
  width: 584px;

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
  background-color: ${props => props.$cellColor};

  &:nth-child(5n):not(:nth-child(50n)) {
    margin-right: 3px;
  }
`

export const CellTotals = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-left: auto;

  & span {
    font-size: 12px;
    color: #666;
  }

  & p {
    font-size: 16px;
    line-height: 8px;
    /*color: #000;*/
  }
`
