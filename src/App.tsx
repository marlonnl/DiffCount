import { GlobalStyle } from './styles/globalStyle'

import DiffCounter from './components/DiffCounter'
import Header from './components/Header'
import Heading from './components/Heading'
import { CellContextProvider } from './context/CellContext/CellContextProvider'

function App() {
  return (
    <>
      <CellContextProvider>
        <GlobalStyle />
        <Header />

        <Heading>Contador</Heading>
        <DiffCounter />
      </CellContextProvider>
    </>
  )
}

export default App
