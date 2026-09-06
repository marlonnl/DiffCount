import {
  CellColor,
  CellDot,
  CellDotsGrid,
  CellName,
  CellsListWrapper,
  CellWrapper,
} from './styles'

export default function CellsList() {
  const Cells = [
    'Segmentado',
    'Bastão',
    'Linfócito',
    'Monócito',
    'Eosinófilo',
    'Basófilo',
  ]

  const Cells2 = [
    {
      name: 'Segmentado',
      color: '#e88fa6',
    },
    {
      name: 'Bastão',
      color: '#F5C9D3',
    },
    {
      name: 'Linfócito',
      color: '#5B9BD5',
    },
    {
      name: 'Monócito',
      color: '#7B6FD1',
    },
    {
      name: 'Eosinófilo',
      color: '#E2725C',
    },
    {
      name: 'Basófilo',
      color: '#8FC9A9',
    },
  ]

  return (
    <CellsListWrapper>
      {Cells2.map(cell => {
        return (
          <CellWrapper>
            <CellColor cellColor={cell.color} />
            <CellName>{cell.name}</CellName>
            <CellDotsGrid>
              <CellDot cellColor={cell.color} />
            </CellDotsGrid>
            <div>totais</div>
          </CellWrapper>
        )
      })}
    </CellsListWrapper>
  )
}
