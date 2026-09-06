import { styled } from 'styled-components'

export const LogoStyle = styled.h1`
  & a {
    color: #000;
    background-color: #e4e6c3;

    border: 3px solid #000;
    box-shadow: 4px 4px 0 0 #000;

    text-decoration: none;
    padding: 6px 8px;

    transition: all 0.2s ease;

    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 6px 6px 0 0 #000;
    }

    &:active {
      transform: translate(3px, 3px);
      box-shadow: none;
    }
  }
`
