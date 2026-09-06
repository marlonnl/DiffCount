import Logo from '../Logo'
import { Menu } from '../Menu'
import { HeaderContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Menu />
    </HeaderContainer>
  )
}
