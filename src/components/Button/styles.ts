import styled from 'styled-components'

type ButtonWrapperProps = {
  $size?: number
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  cursor: pointer;
  font-family: 'Outfit', sans-serif;

  background: #fea82f;
  color: #261c15;
  border: 3px solid #000;
  border-radius: 6px;
  padding: 4px 6px;
  transition: all 0.2s ease-in-out;

  display: flex;
  align-items: center;
  gap: 6px;

  font-size: ${props => props.$size}px;

  svg {
    font-size: ${props => props.$size}px;
  }

  &:hover {
    filter: brightness(90%);
    box-shadow: 3px 3px 0 0 #000;
  }

  &:active {
    filter: brightness(105%);
    box-shadow: 1px 1px 0 0 #000;
  }
`
