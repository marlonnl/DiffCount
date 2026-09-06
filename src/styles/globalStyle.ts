import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0 auto;
    color: #423E3B;
    background-color: #f7f7f2;
    width: 860px;
  }

  li {
    list-style-type: none;
  }

  .neuBox {
    border: 3px solid #000;
    box-shadow: 4px 4px 0 0 #000;
  }
`
