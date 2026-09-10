import { GlobalStyle } from './styles/globalStyle'

import { CellContextProvider } from './context/CellContext/CellContextProvider'

import Header from './components/Header'
import DiffCounter from './components/DiffCounter'

function App() {
  return (
    <>
      <CellContextProvider>
        <GlobalStyle />
        <Header />

        <DiffCounter />
      </CellContextProvider>
    </>
  )
}

export default App
