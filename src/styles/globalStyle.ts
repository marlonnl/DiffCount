import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0 auto;
    width: 860px;

    font-family: 'Inter', sans-serif;
    font-optical-sizing: auto;

    color: #423E3B;
    background-color: #f7f7f2;
  }

  li {
    list-style-type: none;
  }

  .neuBox {
    border: 3px solid #000;
    box-shadow: 4px 4px 0 0 #000;
  }

  .monospaced {
    font-family: "JetBrains Mono", monospace;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
  }

  kbd {
    display: inline-block;
    padding: 3px 6px;
    font-family: inherit;
    font-size: 0.85em;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;

    color: #333;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`
