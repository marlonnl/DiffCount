import Logo from '../Logo'
import { Menu } from '../Menu'
import { HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Menu />
    </HeaderContainer>
  )
}
