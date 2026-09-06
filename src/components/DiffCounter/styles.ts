import { styled } from 'styled-components'

export const DiffCounterWrapper = styled.div`
  margin: 16px 0;
`

export const DiffCounterHeader = styled.div`
  padding: 18px;
  border: 2px solid #000;
  box-shadow: 3px 3px 0 0 #000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & h2 {
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    margin: 0;
  }

  & div {
    font-family: 'Space Grotesk', monospace;
    font-size: 14px;
    color: #000;
    text-align: left;

    display: flex;
    align-items: end;
    gap: 8px;

    & span {
      font-family: 'JetBrains Mono', monospace;
      font-size: 18px;
    }
  }
`
