import { GlobalStyle } from './styles/globalStyle'

import DiffCounter from './components/DiffCounter'
import Header from './components/Header'
import Heading from './components/Heading'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Heading>Contador</Heading>
      <DiffCounter />
    </>
  )
}

export default App
