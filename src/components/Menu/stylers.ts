import styled from 'styled-components'

export const NavContainer = styled.nav`
  background-color: #e4e6c3;

  display: flex;
  align-items: center;
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MenuItem = styled.div`
  & a {
    display: block;
    padding: 16px 24px;

    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #fea82f;
    }

    &:active {
      filter: opacity(80%);
    }
  }

  & svg {
    color: #000;
  }
`

export const Spacing = styled.div`
  width: 2px;
  align-self: stretch;
  margin: 16px 0;
  background-color: #000;
`
