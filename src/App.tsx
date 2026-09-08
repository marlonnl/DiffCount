import { GlobalStyle } from './styles/globalStyle'

import DiffCounter from './components/DiffCounter'
import Header from './components/Header'
import Heading from './components/Heading'
import { CellContextProvider } from './context/CellContext/CellContextProvider'
import { useCellContext } from './context/CellContext/useCellContext'
import { CellActionTypes } from './context/CellContext/cellActions'
import { CellsDB } from './context/CellContext/Cells'

function App() {
  const { dispatch } = useCellContext()

  function handleClick() {
    console.log('aaaa', CellsDB[0])
    dispatch({ type: CellActionTypes.COUNT_CELL, payload: CellsDB[0] })
  }

  return (
    <>
      <CellContextProvider>
        <GlobalStyle />
        <Header />

        <Heading>Contador</Heading>
        <DiffCounter />

        <button onClick={handleClick}>Contar célula</button>
      </CellContextProvider>
    </>
  )
}

export default App
