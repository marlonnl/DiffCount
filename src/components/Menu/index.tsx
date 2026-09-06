import { MenuContainer, MenuItem, NavContainer, Spacing } from './stylers'
import {
  ArchiveIcon,
  HelpCircleIcon,
  InfoIcon,
  ListRestartIcon,
  Settings2Icon,
} from 'lucide-react'

export const Menu = () => {
  return (
    <NavContainer className="neuBox">
      <MenuContainer>
        <MenuItem>
          <a
            href="#"
            aria-label="Reiniciar/zerar contagem"
            title="Reiniciar/zerar contagem"
          >
            <ListRestartIcon />
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            aria-label="Ir para configurações"
            title="Ir para configurações"
          >
            <Settings2Icon />
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#" aria-label="Ver histórico" title="Ver histórico">
            <ArchiveIcon />
          </a>
        </MenuItem>
        <Spacing />
        <MenuItem>
          <a
            href="#"
            aria-label="Ir para página de ajuda"
            title="Ir para página de ajuda"
          >
            <HelpCircleIcon />
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#" aria-label="Sobre a aplicação" title="Sobre a aplicação">
            <InfoIcon />
          </a>
        </MenuItem>
      </MenuContainer>
    </NavContainer>
  )
}
